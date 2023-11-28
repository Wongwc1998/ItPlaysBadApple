import Link from "next/link";
import { type Author } from "@/types";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Link href={`author/${author.id}`} tabIndex={-1}>
      <Card className="h-full overflow-hidden">
        <AspectRatio ratio={9 / 9}>
          <Image
            src={author.thumbnail}
            alt={author.name}
            className="absolute inset-0 object-cover w-full h-full"
            layout="fill"
          />
        </AspectRatio>
        <CardHeader>
          <CardTitle className="line-clamp-8 text-md">{author.name}</CardTitle>
        </CardHeader>
      </Card>
      <span className="sr-only">{author.name}</span>
    </Link>
  )
}
