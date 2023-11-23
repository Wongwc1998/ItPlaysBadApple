import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"
import { Authors } from "@/components/authors"
import { getAuthorsAction } from "@/app/_actions/author"


interface AuthorsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function AuthorsPage({ searchParams }: AuthorsPageProps) {
  const { page, per_page, sort } = searchParams ?? {}

  // Authors transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 16
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  const authorsTransaction = await getAuthorsAction({
    limit: limit,
    offset: offset,
    sort: typeof sort === "string" ? sort : "itemCount.desc",
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
          Look at our authors
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
