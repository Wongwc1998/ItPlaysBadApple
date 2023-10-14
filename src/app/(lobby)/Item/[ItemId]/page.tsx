import { notFound } from "next/navigation";
import VideoIframe from "@/components/YoutubeIframe";
import { prismaDal } from "@/prismaDal";
import { getTags } from "@/config/items";
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
  const itemTags = await getTags();
  console.log({ itemTags });
  const readableTags = result.tags
    ? result.tags.map((slug) => {
        const tagObj = itemTags.find((option) => option.value === slug);
        return tagObj ? tagObj.label : slug; // fallback to slug if title not found
      })
    : [];
  console.log({ readableTags });

  return (
    <div className="border flex flex-col md:flex-row m-4 p-4 dark:bg-slate-800 bg-gray-100 rounded items-center justify-center">
      <VideoIframe videoId={result.videoUrl} title={result.title} />
      <div className="flex flex-col mx-4">
        <h1 className="text-xl font-bold">{result.title}</h1>
        <h2 className="text-lg mt-2">by {result.authorId}</h2>
        <p className="mt-4">{result.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {readableTags &&
            readableTags.map((tagTitle, idx) => (
              <div
                key={idx}
                className="border border-black px-4 py-2 my-2 rounded dark:bg-slate-950 bg-white"
              >
                {tagTitle}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
