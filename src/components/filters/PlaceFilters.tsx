import { Search } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { accessibilityFeatures, placeCategories } from "@/data/accessibility-features";
import type { AccessibilityFeatureKey, PlaceCategory } from "@/types/place";

export type FilterState = {
  query: string;
  categories: PlaceCategory[];
  features: AccessibilityFeatureKey[];
};

export function PlaceFilters({
  filters,
  onChange,
  resultCount,
}: {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
}) {
  const toggleCategory = (category: PlaceCategory) => {
    const exists = filters.categories.includes(category);
    onChange({
      ...filters,
      categories: exists
        ? filters.categories.filter((item) => item !== category)
        : [...filters.categories, category],
    });
  };

  const toggleFeature = (feature: AccessibilityFeatureKey) => {
    const exists = filters.features.includes(feature);
    onChange({
      ...filters,
      features: exists ? filters.features.filter((item) => item !== feature) : [...filters.features, feature],
    });
  };

  return (
    <section className="space-y-6" aria-label="Place filters">
      <div>
        <Label htmlFor="place-search">Search places</Label>
        <div className="relative mt-2">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            id="place-search"
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            placeholder="Search by place, area, or address"
            className="min-h-11 pl-10"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{resultCount} demo places match your filters.</p>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-foreground">Place type</legend>
        <div className="grid gap-3">
          {placeCategories.map((category) => {
            const id = `category-${category.toLowerCase().replaceAll(" ", "-")}`;
            return (
              <div key={category} className="flex items-center gap-3">
                <Checkbox
                  id={id}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                  className="size-5"
                />
                <Label htmlFor={id} className="cursor-pointer text-sm font-normal leading-5">
                  {category}
                </Label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-foreground">Accessibility features</legend>
        <div className="grid gap-3">
          {accessibilityFeatures.map((feature) => {
            const id = `feature-${feature.key}`;
            return (
              <div key={feature.key} className="flex items-center gap-3">
                <Checkbox
                  id={id}
                  checked={filters.features.includes(feature.key)}
                  onCheckedChange={() => toggleFeature(feature.key)}
                  className="size-5"
                />
                <Label htmlFor={id} className="cursor-pointer text-sm font-normal leading-5">
                  {feature.shortLabel}
                </Label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}
