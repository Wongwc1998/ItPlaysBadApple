import { Item } from "./types";

export interface DataAccessLayer {
  getItems: () => Promise<Item[]>;
  getItem: (id: number) => Promise<Item | null>;
  deleteItem: (id: number) => Promise<void>;
  createItem: (data: Item) => Promise<void>;
  updateItem: (id: number, data: Item) => Promise<void>;
}