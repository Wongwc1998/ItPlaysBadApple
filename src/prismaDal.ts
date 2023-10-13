import { PrismaClient } from "@prisma/client";
import { type DataAccessLayer } from "./DalInterface";

const prisma = new PrismaClient();

export const prismaDal: DataAccessLayer = {
  getItems: async () => {
    return await prisma.item.findMany();
  },
  getItem: async (id) => {
    console.log({ id });
    console.log(typeof id);
    return await prisma.item.findUnique({
      where: { id },
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
