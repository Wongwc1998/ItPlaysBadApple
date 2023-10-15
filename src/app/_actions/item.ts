"use server";

import { revalidatePath } from "next/cache";
import { type Item } from "@/types";
import { type z } from "zod";
import { prisma } from "@/app/db";
import { getItemsSchema } from "@/lib/validations/item";

export async function filterItemsAction(query: string) {
  if (query.length === 0) return null;

  //prisma search and filter results
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

  let itemgroup = {
    vars: results,
  };
  return [itemgroup];
}

export async function getItemsAction(input: z.infer<typeof getItemsSchema>) {
  console.log({ input });
  const [column, order] =
    (input.sort?.split(".") as [
      keyof Item | undefined,
      "asc" | "desc" | undefined
    ]) ?? [];
  const tags = input.tags?.split(".") ?? [];

  const items = await prisma.item.findMany({
    take: input.limit,
    skip: input.offset,
    //tags is an array of strings
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
}
