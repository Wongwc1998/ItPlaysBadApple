import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { Items } from "@/components/items";
import { prismaDal } from "@/prismaDal";
import { getItemsAction } from "@/app/_actions/item";
const dal = prismaDal;

interface ItemsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ItemsPage({ searchParams }: ItemsPageProps) {
  const { page, per_page, sort, tags } = searchParams ?? {};
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8;
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;

  const itemsTransaction = await getItemsAction({
    limit,
    offset,
    sort: typeof sort === "string" ? sort : null,
    tags: typeof tags === "string" ? tags : null,
  });

  const pageCount = Math.ceil(itemsTransaction.count / limit)
  console.log(itemsTransaction.count);
  console.log(pageCount);
  console.log(limit);

  return (
    <Shell>
      <PageHeader
        id="products-page-header"
        aria-labelledby="products-page-header-heading"
      >
        <PageHeaderHeading size="sm">Items</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Everything that plays &quot;Bad Apple!!&quot;.
        </PageHeaderDescription>
      </PageHeader>
      <Items items={itemsTransaction.items} pageCount={pageCount} authorId={1} tags={[]} />
    </Shell>
  );
}
