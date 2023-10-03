"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Item } from "@/types";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  Item: Item;
}

export function ItemCard({ Item, className, ...props }: ItemCardProps) {

  return (
    <Card
      className={cn("h-full overflow-hidden rounded-sm", className)}
      {...props}
    >
      <Link href={`/Item/${Item.id}`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {
              <Image
                src={Item.previewImgUrl ?? "/images/Item-placeholder.webp"}
                alt={Item.title}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            }
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{Item.title}</span>
      </Link>
      <Link href={`/Item/${Item.id}`} tabIndex={-1}>
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">{Item.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {Item.description}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
}
