import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Database, MapPinned, UsersRound } from "lucide-react";

import { AccessibleMap } from "@/components/map/AccessibleMap";
import { PlaceCard } from "@/components/place/PlaceCard";
import { Button } from "@/components/ui/button";
import { getFeaturedPlaces, getPlaceStats } from "@/services/placeService";

const stats = getPlaceStats();
const featuredPlaces = getFeaturedPlaces(4);

const statCards = [
  { label: "Places Mapped", value: stats.placesMapped, icon: MapPinned },
  { label: "Verified Places", value: stats.verifiedPlaces, icon: BadgeCheck },
  { label: "Community Reports", value: stats.communityReports, icon: UsersRound },
  { label: "Areas Covered", value: stats.areasCovered, icon: Database },
];

export function HomePage() {
  return (
    <div className="bg-background">
      <section className="border-b bg-hero-surface">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center rounded-md border bg-card px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm">
              Demo civic-tech MVP for Chattogram accessibility mapping
            </div>
            <div className="space-y-5">
              <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Making Chattogram More Accessible
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                Find, verify, and share accessibility information about places across Chattogram.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/explore">
                  Explore Accessible Places <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contribute">Help Improve the Map</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-foreground">Live map preview</h2>
              <span className="rounded-md bg-warning-soft px-2.5 py-1 text-xs font-medium text-warning-foreground">
                Demo data only
              </span>
            </div>
            <AccessibleMap places={featuredPlaces} className="h-[28rem] lg:h-[34rem]" />
          </div>
        </div>
      </section>

      <section className="border-b py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Mock platform snapshot</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">Demo accessibility coverage</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              These numbers are sample values for the MVP and should not be treated as official accessibility data.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="rounded-lg border bg-card p-5 shadow-sm">
                  <Icon className="mb-4 size-6 text-primary" aria-hidden="true" />
                  <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Community review</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">Recently updated demo places</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/explore">Browse all places</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
