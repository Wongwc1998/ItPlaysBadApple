import Link from "next/link"
import { type Author } from "@/types"

import { getRandomPatternStyle } from "@/lib/generate-pattern"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AuthorCardProps {
  author: Author
  href: string
}

export function AuthorCard({ author, href }: AuthorCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full overflow-hidden">
        <AspectRatio ratio={21 / 9}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-zinc-950/50" />
          <Badge
          >
          </Badge>
          <div
            className="h-full rounded-t-md border-b"
            style={getRandomPatternStyle(String(author.id))}
          />
        </AspectRatio>
        <CardHeader>
          <CardTitle className="line-clamp-1 text-lg">{author.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {author.description?.length
              ? author.description
              : `${author.name}`}
          </CardDescription>
        </CardHeader>
      </Card>
      <span className="sr-only">{author.name}</span>
    </Link>
  )
}
