import type { Icons } from "@/components/icons";

export type Item = {
  id: number;
  title: string;
  description: string;
  authorId: number;
  videoUrl: string;
  tags: string[];
  previewImgUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Author = {
  id: number;
  name: string;
  url: string;
};

export interface CuratedAuthor {
  id: Author["id"]
  name: Author["name"]
  description?: string
  productCount?: number
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Category {
  title: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: Subcategory[];
}

export interface Subcategory {
  title: string;
  description?: string;
  image?: string;
  slug: string;
}
