import { type Metadata } from "next"
import { env } from "@/env.mjs"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"
import { Authors } from "@/components/authors"
import { getAuthorsAction } from "@/app/_actions/author"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Authors",
  description: "Buy authors from our authors",
}

interface AuthorsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function AuthorsPage({ searchParams }: AuthorsPageProps) {
  const { page, per_page, sort, statuses } = searchParams ?? {}

  // Authors transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  const authorsTransaction = await getAuthorsAction({
    limit: limit,
    offset: offset,
    sort: typeof sort === "string" ? sort : "productCount.desc",
    statuses: typeof statuses === "string" ? statuses : null,
  })

  const pageCount = Math.ceil(authorsTransaction.count / limit)

  return (
    <Shell>
      <PageHeader
        id="authors-page-header"
        aria-labelledby="authors-page-header-heading"
      >
        <PageHeaderHeading size="sm">Authors</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Buy products from our authors
        </PageHeaderDescription>
      </PageHeader>
      <Authors
        id="authors-page-authors"
        aria-labelledby="authors-page-authors-heading"
        authors={authorsTransaction.items}
        pageCount={pageCount}
      />
    </Shell>
  )
}
