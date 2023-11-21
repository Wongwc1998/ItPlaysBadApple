"use server"

import { type z } from "zod"
import { type Author } from "@/types"
import { prisma } from "../db"
import { getAuthorsSchema } from "@/lib/validations/author"


export async function getAuthorsAction(input: z.infer<typeof getAuthorsSchema>) {
  const limit = input.limit ?? 10
  const offset = input.offset ?? 0
  const [column, order] =
    (input.sort?.split(".") as [
      keyof Author,
      "asc" | "desc",
    ]) ?? ["createdAt", "desc"]

const transaction = await prisma.$transaction([
    prisma.author.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        [column]: order,
      },
      include: {
        items: true,
      },
    }),
    prisma.author.count({
    }),
  ]);

  const [items, count] = transaction;

  return {
    items,
    count,
  };
}

