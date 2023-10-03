import { PrismaClient } from "@prisma/client";
import { DataAccessLayer } from "./DalInterface";

const prisma = new PrismaClient();

export const prismaDal: DataAccessLayer = {
  getItems: async () => {
    return await prisma.item.findMany();
  },
  deleteItem: async (id) => {
    await prisma.item.delete({
      where: { id },
    });
  },
  createItem: async (data: Item) => {
    await prisma.item.create({
      data,
    });
  },
  updateItem: async (id: number, data: Item) => {
    await prisma.item.update({
      where: { id },
      data,
    });
  },
};
