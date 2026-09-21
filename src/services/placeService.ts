import { mockPlaces } from "@/data/places";
import type { AccessibilityFeatureKey, Place, PlaceCategory } from "@/types/place";

export type PlaceFilters = {
  query?: string;
  categories?: PlaceCategory[];
  features?: AccessibilityFeatureKey[];
};

export function getPlaces(): Place[] {
  return mockPlaces;
}

export function getPlaceById(id: string): Place | undefined {
  return mockPlaces.find((place) => place.id === id);
}

export function getFeaturedPlaces(limit = 6): Place[] {
  return mockPlaces
    .filter((place) => place.verificationStatus !== "needs-review")
    .slice(0, limit);
}

export function getPlaceStats() {
  const areas = new Set(mockPlaces.map((place) => place.area));
  const verified = mockPlaces.filter((place) => place.verificationStatus !== "needs-review");
  const reports = mockPlaces.reduce((sum, place) => sum + place.communityVerificationCount, 0);

  return {
    placesMapped: mockPlaces.length,
    verifiedPlaces: verified.length,
    communityReports: reports,
    areasCovered: areas.size,
  };
}

export function filterPlaces(filters: PlaceFilters): Place[] {
  const normalizedQuery = filters.query?.trim().toLowerCase() ?? "";
  const categories = filters.categories ?? [];
  const features = filters.features ?? [];

  return mockPlaces.filter((place) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [place.name, place.category, place.address, place.area]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    const matchesCategory = categories.length === 0 || categories.includes(place.category);
    const matchesFeatures = features.every((feature) => place.accessibility[feature] === "available");

    return matchesQuery && matchesCategory && matchesFeatures;
  });
}
