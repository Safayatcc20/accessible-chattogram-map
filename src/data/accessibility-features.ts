import type { FeatureDefinition, PlaceCategory } from "@/types/place";

export const placeCategories: PlaceCategory[] = [
  "Hospital",
  "University",
  "School",
  "Restaurant",
  "Shopping Mall",
  "Government Office",
  "Transport",
  "Other",
];

export const accessibilityFeatures: FeatureDefinition[] = [
  {
    key: "wheelchairEntrance",
    label: "Wheelchair Accessible Entrance",
    shortLabel: "Wheelchair Entrance",
    description:
      "A step-free entry point that wheelchair users and people with mobility aids can use independently or with minimal support.",
  },
  {
    key: "ramp",
    label: "Ramp",
    shortLabel: "Ramp",
    description:
      "A stable sloped path that provides an alternative to stairs for wheelchair users, older adults, and people carrying children or goods.",
  },
  {
    key: "elevator",
    label: "Elevator",
    shortLabel: "Elevator",
    description:
      "A working lift that connects floors and helps people avoid stairs in multi-level buildings.",
  },
  {
    key: "accessibleToilet",
    label: "Accessible Toilet",
    shortLabel: "Accessible Toilet",
    description:
      "A toilet with enough turning space, grab bars, reachable fixtures, and a layout that supports independent use.",
  },
  {
    key: "accessibleParking",
    label: "Accessible Parking",
    shortLabel: "Accessible Parking",
    description:
      "A clearly marked parking space close to the entrance with extra room for ramps, wheelchairs, and safe transfers.",
  },
  {
    key: "tactilePaving",
    label: "Tactile Paving",
    shortLabel: "Tactile Paving",
    description:
      "Textured ground indicators that help blind and low-vision pedestrians identify paths, crossings, edges, and hazards.",
  },
  {
    key: "audioAssistance",
    label: "Audio Assistance",
    shortLabel: "Audio Assistance",
    description:
      "Audible announcements, staff support, or assistive audio cues that make services easier to use without relying only on sight.",
  },
];

export const featureStatusLabels = {
  available: "Available",
  unavailable: "Confirmed unavailable",
  unknown: "Information unavailable",
} as const;
