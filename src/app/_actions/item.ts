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
        mode: "insensitive", // This makes the filter case-insensitive,
      },
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
  const [column, order] =
    (input.sort?.split(".") as [
      keyof Item | undefined,
      "asc" | "desc" | undefined
    ]) ?? [];
  const tags = input.tags?.split(".") ?? [];
  
  try {
  const items = await prisma.item.findMany({
    take: input.limit,
    skip: input.offset,
    where: {
      tags: {
        hasEvery: tags,
      },
    },
    orderBy: {
      [column ?? "createdAt"]: order ?? "desc",
    },
  });
  const count = 2;

  return {
    items,
    count,
  };
  }catch (error) {
      // Handle and/or log the error
      console.error("Error getting items:", error);
      throw error;
    }
}
