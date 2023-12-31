import type { FooterItem, MainNavItem } from "@/types"

export type SiteConfig = typeof siteConfig

const links = {
  github: "https://github.com/Wongwc1998/ItPlaysBadApple",
  githubAccount: "https://github.com/Wongwc1998",
  discord: "https://discord.com/users/sadmann7",
}

export const siteConfig = {
  name: "It Plays Bad Apple",
  description:
    "A WIP catalog of all things that play Bad Apple!! on the internet, built with Next.js 13.",
  url: "https://google.com",
  ogImage: "https://picsum.photos/1200/630",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Items",
          href: "/items",
          description: "Everything that plays Bad Apple.",
          items: [],
        },
        {
          title: "Authors",
          href: "/authors",
          description: "The people who made these Bad Apple!! videos.",
          items: [],
        }
      ],
    },
    {
      title: "Contact & Information",
      items: [
        {
          title: "What is \"Bad Apple!!\" ?",
          href: "/about",
          description: "What this website is about",
          items: [],
        },
        {
          title: "About me",
          href: "/about-me",
          description: "Everything about me",
          items: [],
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Contact me",
          items: [],
        },
        {
          title: "Credits",
          href: "/credits",
          description: "How this website is made",
          items: [],
        },
        {
          title: "To-Do List",
          href: "/todos",
          description: "The list of extra features that need to be implemented.",
          items: [],
        }
      ],
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "Skateshop",
          href: "https://skateshop.sadmn.com/",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}
