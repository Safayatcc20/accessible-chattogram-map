import { Accessibility, BadgeParking, Ear, Footprints, Landmark, SquareArrowOutUpRight, Toilet, Waypoints } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { accessibilityFeatures } from "@/data/accessibility-features";

const guideDetails = {
  wheelchairEntrance:
    "It helps wheelchair users, people using walkers, parents with strollers, and anyone who cannot safely use stairs enter a place with dignity.",
  ramp:
    "A useful ramp has a manageable slope, a non-slip surface, clear width, and safe landings so movement does not depend on being carried.",
  elevator:
    "Elevators make upper floors reachable for people with mobility disabilities and are essential in hospitals, malls, offices, and campuses.",
  accessibleToilet:
    "Accessible toilets reduce trip barriers by supporting privacy, turning space, grab bars, and safe transfers for disabled visitors.",
  accessibleParking:
    "Nearby wider parking reduces distance, avoids unsafe road crossings, and gives enough space for wheelchairs and mobility equipment.",
  tactilePaving:
    "Tactile surfaces support independent navigation by warning about crossings, steps, platform edges, and directional routes.",
  audioAssistance:
    "Audio cues and human assistance help blind, low-vision, and print-disabled people use services that otherwise depend on visual signs.",
};

const iconMap = {
  wheelchairEntrance: Accessibility,
  ramp: Waypoints,
  elevator: SquareArrowOutUpRight,
  accessibleToilet: Toilet,
  accessibleParking: BadgeParking,
  tactilePaving: Footprints,
  audioAssistance: Ear,
};

export function GuidePage() {
  return (
    <div className="bg-background">
      <section className="border-b bg-section-surface py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-primary">Accessibility guide</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Understand the features shown on the map
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            These cards explain common accessibility features so contributors can report observations consistently and visitors can interpret place details carefully.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {accessibilityFeatures.map((feature) => {
            const Icon = iconMap[feature.key];
            return (
              <Card key={feature.key} className="shadow-sm">
                <CardHeader>
                  <div className="mb-3 grid size-11 place-items-center rounded-md bg-primary-soft text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-display text-xl">{feature.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>{feature.description}</p>
                  <p>{guideDetails[feature.key]}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex gap-3">
            <Landmark className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">When information is unknown</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Unknown means no reliable community observation is available yet. It should never be read as confirmed inaccessible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
