import React from "react";
import { notFound } from "next/navigation";
import YouTubePlayer from "@/components/YouTubePlayer";
interface ItemPageProps {
  params: {
    ItemId: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const ItemId = Number(params.ItemId);
  const response = await fetch(`http://localhost:3001/api/items/${ItemId}`);
  //log out the item in the response
  console.log(response.json());

  return (
    <div>
        {ItemId}
      {/* <YouTubePlayer videoId={ItemId} /> */}
    </div>
  );
}
