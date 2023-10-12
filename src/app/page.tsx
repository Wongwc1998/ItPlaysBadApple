import { ItemCard } from '@/components/cards/item-card';
import { prismaDal } from "@/prismaDal";
const dal = prismaDal;

export default async function Home() {
  const items = await dal.getItems();

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      {items?.map((item) => (
        <ItemCard Item={item} key={item.id} />
      ))}
    </main>
  );
}
