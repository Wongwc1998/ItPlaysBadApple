import { PrismaClient } from "@prisma/client";
import { type DataAccessLayer } from "./DalInterface";

const prisma = new PrismaClient();

export const prismaDal: DataAccessLayer = {
  getItems: async () => {
    return await prisma.item.findMany();
  },
  getItem: async (id) => {
    return await prisma.item.findUnique({
      where: { id },
    });
  },
  getAuthor: async (id) => {
    return await prisma.author.findUnique({
      where: { id },
    });
  },
  //just get the other newest 4 items by author for display on the author page
  getOtherItems: async (authorId, itemId) => {
    return await prisma.item.findMany({
      where: { authorId, id: { not: itemId } },
      take: 4,
      orderBy: { createdAt: "desc" },
    });
  },
  deleteItem: async (id) => {
    await prisma.item.delete({
      where: { id },
    });
  },
  createItem: async (data) => {
    await prisma.item.create({
      data,
    });
  },
  updateItem: async (id, data) => {
    await prisma.item.update({
      where: { id },
      data,
    });
  },
};
