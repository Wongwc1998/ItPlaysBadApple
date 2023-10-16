import { ItemsCombobox } from "@/components/items-combobox";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { dashboardConfig } from "@/config/dashboard";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ItemsCombobox />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
