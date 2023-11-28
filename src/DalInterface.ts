import { type Item, type Author } from "./types";

export interface DataAccessLayer {
  getItems: () => Promise<Item[]>;
  getItem: (id: number) => Promise<Item | null>;
  getItemsByAuthor: (authorId: number) => Promise<Item[]>;
  getOtherItems: (authorId: number, itemId: number) => Promise<Item[]>;
  getAuthor: (id: number) => Promise<Author | null>;
  deleteItem: (id: number) => Promise<void>;
  createItem: (data: Item) => Promise<void>;
  updateItem: (id: number, data: Item) => Promise<void>;
}
