"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type Item } from "@/types";
import {  MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { cn, isMacOs } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import { filterItemsAction } from "@/app/_actions/item";

interface ItemGroup {
  vars: Pick<Item, "id" | "title" | "previewImgUrl">[];
}

export function ItemsCombobox() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = React.useState<ItemGroup[] | null>(null);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null);
      return;
    }

    let mounted = true;
    function fetchData() {
      startTransition(async () => {
        const data = await filterItemsAction(debouncedQuery);
        if (mounted) {
          setData(data);
        }
      });
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [debouncedQuery]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = React.useCallback((callback: () => unknown) => {
    setIsOpen(false);
    callback();
  }, []);

  React.useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setIsOpen(true)}
      >
        <MagnifyingGlassIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search items...</span>
        <span className="sr-only">Search items</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <abbr title={isMacOs() ? "Command" : "Control"}>
            {isMacOs() ? "⌘" : "Ctrl+"}
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Search items..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            No items found.
          </CommandEmpty>
          {isPending ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            data?.map((group, groupIndex) =>
              group.vars.map((item) => {

                return (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() =>
                      handleSelect(() => router.push(`/item/${item.id}`))
                    }
                  >
                    <Image
                      src={item.previewImgUrl}
                      alt={item.title}
                      className="mr-2 object-cover text-muted-foreground border border-muted rounded-sm"
                      width={64}
                      height={64}
                    />
                    <span className="flex-1">{item.title}</span>
                  </CommandItem>
                );
              })
            )
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
