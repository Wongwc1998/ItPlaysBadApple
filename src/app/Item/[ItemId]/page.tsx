import React from "react";
import { notFound } from "next/navigation";
import YouTubePlayer from "@/components/YouTubePlayer";
import { DataAccessLayer } from "@/DalInterface";
import { prismaDal } from "@/prismaDal";
const dal = prismaDal;
interface ItemPageProps {
  params: {
    ItemId: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const ItemId = Number(params.ItemId);
  const result = await dal.getItem(ItemId);
  //log out the item in the response
  console.log(result);
  if (!result) {
    return notFound();
  }

  return (
    <div>
        {ItemId}
      <YouTubePlayer videoId={result.videoUrl} />
      <h1>{result.title}</h1>
      <h2>`by ${result.authorId}`</h2>
      <p>{result.description}</p>
    </div>
  );
}
