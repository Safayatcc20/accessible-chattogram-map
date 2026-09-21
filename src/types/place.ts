export type PlaceCategory =
  | "Hospital"
  | "University"
  | "School"
  | "Restaurant"
  | "Shopping Mall"
  | "Government Office"
  | "Transport"
  | "Other";

export type AccessibilityFeatureKey =
  | "wheelchairEntrance"
  | "ramp"
  | "elevator"
  | "accessibleToilet"
  | "accessibleParking"
  | "tactilePaving"
  | "audioAssistance";

export type AccessibilityStatus = "available" | "unavailable" | "unknown";

export type VerificationStatus = "community-reviewed" | "needs-review" | "recently-updated";

export type Place = {
  id: string;
  name: string;
  category: PlaceCategory;
  address: string;
  area: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  verificationStatus: VerificationStatus;
  lastVerified: string;
  lastUpdated: string;
  dataSource: string;
  communityVerificationCount: number;
  accessibility: Record<AccessibilityFeatureKey, AccessibilityStatus>;
  notes: string;
};

export type FeatureDefinition = {
  key: AccessibilityFeatureKey;
  label: string;
  shortLabel: string;
  description: string;
};
