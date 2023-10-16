import { notFound } from "next/navigation";
import VideoIframe from "@/components/YoutubeIframe";
import { prismaDal } from "@/prismaDal";
import { getTags } from "@/config/items";
import { ItemCard } from "@/components/cards/item-card";
import { Shell } from "@/components/shells/shell";
const dal = prismaDal;
interface ItemPageProps {
  params: {
    ItemId: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const ItemId = Number(params.ItemId);
  const result = await dal.getItem(ItemId);
  if (!result) {
    return notFound();
  }
  const author = await dal.getAuthor(result.authorId);
  const otherItems = await dal.getOtherItems(result.authorId, ItemId);
  const itemTags = getTags();
  const readableTags = result.tags
    ? result.tags.map((slug) => {
        const tagObj = itemTags.find((option) => option.value === slug);
        return tagObj ? tagObj.label : slug; // fallback to slug if title not found
      })
    : [];

  return (
    <Shell>
      <div className="m-4 p-4">
        <div className="border flex flex-col md:flex-row dark:bg-slate-800 bg-gray-100 rounded items-center justify-center">
          <VideoIframe videoId={result.videoUrl} title={result.title} />
          <div className="flex flex-col mx-4">
            <h1 className="text-xl font-bold">{result.title}</h1>

            <h2 className="text-lg mt-2">
              by{" "}
              <a href={author?.url} className="text-blue-500 hover:underline">
                {author?.name}
              </a>
            </h2>
            <p className="mt-4">{result.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {readableTags?.map((tagTitle) => (
                <div
                  key={tagTitle}
                  className="border border-black px-4 py-2 my-2 rounded dark:bg-slate-950 bg-white"
                >
                  {tagTitle}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* other items by the same author */}
        {author && otherItems.length > 0 ? (
          <div className="overflow-hidden md:pt-6">
            <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
              More items from{" "}
              <a href={author.url} className="text-blue-500 hover:underline">
                {author.name}
              </a>
            </h2>
            <div className="overflow-x-auto pb-2 pt-6">
              <div className="flex w-fit gap-4">
                {otherItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    Item={item}
                    className="min-w-[260px]"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Shell>
  );
}
