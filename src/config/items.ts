import type { Category, Option, Subcategory } from "@/types";

import { Icons } from "@/components/icons";

export const sortOptions = [
  { label: "Date: Old to new", value: "createdAt.asc" },
  {
    label: "Date: New to old",
    value: "createdAt.desc",
  },
  {
    label: "Alphabetical: A to Z",
    value: "title.asc",
  },
  {
    label: "Alphabetical: Z to A",
    value: "title.desc",
  },
];

export const itemTags = [
  {
    title: "Software",
    description: "The video is displayed in software.",
    slug: "software",
  },
  {
    title: "Hardware",
    description: "The video is displayed in a hardware monitor.",
    slug: "hardware",
  },
  {
    title: "Bezier Curves",
    description: "The video is displayed in a hardware monitor.",
    slug: "bezier-curves",
  },
] satisfies Subcategory[];

export function getTags(): Option[] {
  const tags = itemTags.map((tag) => ({
    label: tag.title,
    value: tag.slug,
  }));

  return tags;
}
