import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { PlaceFilters, type FilterState } from "@/components/filters/PlaceFilters";
import { AccessibleMap } from "@/components/map/AccessibleMap";
import { PlaceCard } from "@/components/place/PlaceCard";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { filterPlaces } from "@/services/placeService";

const initialFilters: FilterState = {
  query: "",
  categories: [],
  features: [],
};

export function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const places = useMemo(() => filterPlaces(filters), [filters]);

  return (
    <div className="bg-background">
      <section className="border-b bg-section-surface py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary">Explore map</p>
              <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
                Accessibility information across Chattogram
              </h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Search demo places and filter by category or accessibility feature. Missing information is shown as unknown, not inaccessible.
              </p>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full sm:w-auto lg:hidden">
                  <SlidersHorizontal className="size-4" aria-hidden="true" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filter places</SheetTitle>
                  <SheetDescription>Refine the demo map by place type and accessibility features.</SheetDescription>
                </SheetHeader>
                <div className="mt-8">
                  <PlaceFilters filters={filters} onChange={setFilters} resultCount={places.length} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[20rem_1fr] lg:px-8">
        <aside className="hidden rounded-lg border bg-card p-5 shadow-sm lg:block">
          <PlaceFilters filters={filters} onChange={setFilters} resultCount={places.length} />
        </aside>
        <div className="space-y-6">
          <AccessibleMap places={places} className="h-[32rem] lg:h-[42rem]" />
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-foreground">Matching places</h2>
              <p className="text-sm text-muted-foreground">{places.length} results</p>
            </div>
            {places.length > 0 ? (
              <div className="grid gap-4 xl:grid-cols-2">
                {places.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
                <h3 className="font-display text-xl font-semibold text-foreground">No demo places found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try removing one or more filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
