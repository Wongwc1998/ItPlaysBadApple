"use server";

import { type Item } from "@/types";
import { type z } from "zod";
import { prisma } from "@/app/db";
import { getItemsSchema } from "@/lib/validations/item";

export async function filterItemsAction(query: string) {
  if (query.length === 0) return null;

  try {
    const results = await prisma.item.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
      select: {
        id: true,
        title: true,
        previewImgUrl: true,
      },
    });

    const itemgroup = {
      vars: results,
    };
    return [itemgroup];
  } catch (error) {
    console.error("Error filtering items:", error);
    return null;
  }
}

export async function getItemsAction(input: z.infer<typeof getItemsSchema>) {
  console.log({ input });
  const [column, order] = (input.sort?.split(".") as [
    keyof Item,
    "asc" | "desc"
  ]) ?? ["createdAt", "desc"];
  const tags = (input.tags?.split(".") as Item["tags"]) ?? [];
  // Initialize an array to hold the conditions

  const conditions = [];
  if (tags && tags.length > 0) {
    conditions.push({
      tags: {
        hasEvery: tags,
      },
    });
  }
  // Convert authorId to a number

  // Now conditionally add it to your conditions array
  if (input.authorId) {
    const authorIdNumber = parseInt(input.authorId, 10);
    conditions.push({
      authorId: authorIdNumber,
    });
  }

  try {
    const transaction = await prisma.$transaction([
      prisma.item.findMany({
        take: input.limit,
        skip: input.offset,
        where: {
          AND: conditions,
        },
        orderBy: {
          [column]: order,
        },
      }),
      prisma.item.count({
        where: {
          AND: conditions,
        },
      }),
    ]);
    const [items, count] = transaction;

    return {
      items,
      count,
    };
  } catch (error) {
    // Handle and/or log the error
    console.error("Error getting items:", error);
    throw error;
  }
}
