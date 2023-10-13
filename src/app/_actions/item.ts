"use server";

import { revalidatePath } from "next/cache";
import { type Item } from "@/types";
import { type z } from "zod";
import { prisma } from "@/app/db";

export async function filterItemsAction(query: string) {
  if (query.length === 0) return null;

  //prisma search and filter results
  const results = await prisma.item.findMany({
    where: {
      title: {
        contains: query,
        mode: 'insensitive', // This makes the filter case-insensitive,
      },
    },
    take: 10,
    select: {
      id: true,
      title: true,
    },
  });

  let itemgroup = {
    vars: results,
  };
  return [itemgroup];
}
