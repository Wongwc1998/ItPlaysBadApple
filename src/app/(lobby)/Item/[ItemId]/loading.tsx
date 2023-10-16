import { Shell } from "@/components/shells/shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icons } from "@/components/icons"

export default function ItemLoading() {
  return (
    <Shell>
      <div className="m-4 p-4">
        <div className="border flex flex-col md:flex-row dark:bg-slate-800 bg-gray-100 rounded items-center justify-center">
          <div className="flex flex-col gap-2 md:w-1/2">
            {/* Placeholder for VideoIframe */}
            <AspectRatio ratio={4 / 3}>
              <Skeleton className="rounded-md" />
            </AspectRatio>
          </div>

          <div className="flex flex-col gap-4 mx-4 md:w-1/2">
            {/* Placeholder for title */}
            <Skeleton className="h-9 w-3/4 rounded-md" />

            {/* Placeholder for author name */}
            <div className="flex gap-2 mt-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-1/4" />
            </div>

            {/* Placeholder for description */}
            <Skeleton className="h-24 w-full mt-4 rounded-md" />

            {/* Placeholders for tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-20 rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </div>
            <div className="overflow-hidden md:pt-6">
        <Skeleton className="h-9 w-14" />
        <div className="overflow-x-auto pb-2 pt-6">
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="min-w-[260px] rounded-sm">
                <CardHeader className="border-b p-0">
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex h-full items-center justify-center bg-secondary">
                      <Icons.placeholder
                        className="h-9 w-9 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  </AspectRatio>
                </CardHeader>
                <CardContent className="grid gap-2.5 p-4">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </CardContent>
                <CardFooter className="p-4">
                  <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
                    <Skeleton className="h-8 w-full rounded-sm" />
                    <Skeleton className="h-8 w-full rounded-sm" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
