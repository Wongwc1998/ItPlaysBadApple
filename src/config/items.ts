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
    title: "Retro",
    description: "The video is displayed with retro hardware.",
    slug: "retro",
  },
  {
    title: "Modern",
    description: "The video is displayed with modern technology.",
    slug: "modern",
  },
  {
    title: "DIY",
    description: "The video is displayed with DIY components.",
    slug: "diy",
  },
  {
    title: "Low Frame Rate",
    description: "The video is displayed with a lower frame rate than 24FPS.",
    slug: "low-frame-rate",
  },
  {
    title: "Video Game",
    description: "The video is displayed in a video game.",
    slug: "video-game",
  },
  {
    title: "Software Application",
    description: "The video is displayed in a software application.",
    slug: "software-application",
  },
  {
    title: "Analogue",
    description: "The video is displayed with analogue technology.",
    slug: "analogue",
  },
  {
    title: "Digital",
    description: "The video is displayed with digital technology.",
    slug: "digital",
  }
] satisfies Subcategory[];

export function getTags(): Option[] {
  const tags = itemTags.map((tag) => ({
    label: tag.title,
    value: tag.slug,
  }));

  return tags;
}
