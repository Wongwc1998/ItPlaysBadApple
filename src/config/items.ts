import type { Category, Option } from "@/types";

import { Icons } from "@/components/icons";

export const sortOptions = [
  { label: "Date: Old to new", value: "createdAt.asc" },
  {
    label: "Date: New to old",
    value: "createdAt.desc",
  },
  {
    label: "Alphabetical: A to Z",
    value: "name.asc",
  },
  {
    label: "Alphabetical: Z to A",
    value: "name.desc",
  },
];

export const itemCategories = [
  {
    title: "skateboards",
    image: "/images/skateboard-one.webp",
    icon: Icons.logo,
    subcategories: [
      {
        title: "Decks",
        description: "The board itself.",
        image: "/images/deck-one.webp",
        slug: "decks",
      },
      {
        title: "Wheels",
        description: "The wheels that go on the board.",
        image: "/images/wheel-one.webp",
        slug: "wheels",
      },
      {
        title: "Trucks",
        description: "The trucks that go on the board.",
        image: "/images/truck-one.webp",
        slug: "trucks",
      },
      {
        title: "Bearings",
        description: "The bearings that go in the wheels.",
        image: "/images/bearing-one.webp",
        slug: "bearings",
      },
      {
        title: "Griptape",
        description: "The griptape that goes on the board.",
        image: "/images/griptape-one.webp",
        slug: "griptape",
      },
      {
        title: "Hardware",
        description: "The hardware that goes on the board.",
        image: "/images/hardware-one.webp",
        slug: "hardware",
      },
      {
        title: "Tools",
        description: "The tools that go with the board.",
        image: "/images/tool-one.webp",
        slug: "tools",
      },
    ],
  },
] satisfies Category[];

export const itemTags = [
  "new",
  "sale",
  "bestseller",
  "featured",
  "popular",
  "trending",
  "limited",
  "exclusive",
];

export function getSubcategories(category?: string): Option[] {
  if (!category) return [];

  const subcategories =
    itemCategories
      .find((c) => c.title === category)
      ?.subcategories.map((s) => ({
        label: s.title,
        value: s.slug,
      })) ?? [];

  return subcategories;
}
