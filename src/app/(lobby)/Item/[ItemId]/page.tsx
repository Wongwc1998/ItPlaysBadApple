import { notFound } from "next/navigation";
import YouTubePlayer from "@/components/YouTubePlayer";
import { prismaDal } from "@/prismaDal";
const dal = prismaDal;
interface ItemPageProps {
  params: {
    ItemId: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const ItemId = Number(params.ItemId);
  console.log({ params });
  const result = await dal.getItem(ItemId);
  //log out the item in the response
  console.log(result);
  if (!result) {
    return notFound();
  }

  return (
    <div className="border flex flex-col md:flex-row m-4 p-4 dark:bg-slate-800 bg-gray-100 rounded items-center justify-center">
        <YouTubePlayer videoId={result.videoUrl} className="mb-4 md:mb-0"/>
      <div className="flex flex-col mx-4">
        <h1 className="text-xl font-bold">{result.title}</h1>
        <h2 className="text-lg mt-2">by {result.authorId}</h2>
        <p className="mt-4">{result.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {result.tags && result.tags.map(tag => (
            <div key={tag} className="border border-black px-4 py-2 my-2 rounded dark:bg-slate-950 bg-white">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



