import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { Items } from "@/components/items";
import { prismaDal } from "@/prismaDal";
const dal = prismaDal;

interface ItemsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ItemsPage({ searchParams }: ItemsPageProps) {
  const { sort, tags } = searchParams ?? {};
  const db_items = await dal.getItems();

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
      <Items
        items={db_items}
        pageCount={1}
        authorId={1}
        tags={[]}
        />
    </Shell>
  );
}
