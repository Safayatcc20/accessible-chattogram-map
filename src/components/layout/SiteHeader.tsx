import { Link } from "@tanstack/react-router";
import { MapPin, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Contribute", to: "/contribute" },
  { label: "Guide", to: "/guide" },
  { label: "About", to: "/about" },
] as const;

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const activeClass = "bg-accent text-accent-foreground";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md font-display text-lg font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <MapPin className="size-5" aria-hidden="true" />
          </span>
          <span>Accessible Chattogram</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass} activeProps={{ className: activeClass }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/explore">Explore map</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="min-h-11 min-w-11 md:hidden" aria-label="Open navigation">
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle>Accessible Chattogram</SheetTitle>
              <SheetDescription>Navigate the accessibility mapping MVP.</SheetDescription>
            </SheetHeader>
            <nav className="mt-8 grid gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} className={linkClass} activeProps={{ className: activeClass }}>
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
