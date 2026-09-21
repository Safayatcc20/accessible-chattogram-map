import { Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Database, MapPin, UsersRound } from "lucide-react";

import { FeatureStatus } from "@/components/place/FeatureStatus";
import { VerificationBadge } from "@/components/place/VerificationBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { accessibilityFeatures } from "@/data/accessibility-features";
import { getPlaceById } from "@/services/placeService";

export function getPlaceDetailsOrThrow(id: string) {
  const place = getPlaceById(id);

  if (!place) {
    throw notFound();
  }

  return place;
}

export function PlaceDetailsPage({ placeId }: { placeId: string }) {
  const place = getPlaceDetailsOrThrow(placeId);

  return (
    <div className="bg-background">
      <section className="border-b bg-section-surface py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 px-0 hover:bg-transparent">
            <Link to="/explore">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to explore
            </Link>
          </Button>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{place.category}</Badge>
              <VerificationBadge status={place.verificationStatus} />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">{place.name}</h1>
              <p className="mt-4 flex items-start gap-2 text-base leading-7 text-muted-foreground">
                <MapPin className="mt-1 size-5 shrink-0" aria-hidden="true" />
                {place.address}
              </p>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              This page uses realistic mock information for product demonstration. Unknown fields mean the community has not confirmed that detail yet.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_18rem] lg:px-8">
        <div className="space-y-6">
          <article className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Accessibility information</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {accessibilityFeatures.map((feature) => (
                <div key={feature.key} className="rounded-md border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold leading-6 text-foreground">{feature.shortLabel}</h3>
                    <FeatureStatus status={place.accessibility[feature.key]} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Community notes</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{place.notes}</p>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contribute">Report an update</Link>
              </Button>
            </div>
          </article>
        </div>

        <aside className="h-fit rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="font-display text-xl font-bold text-foreground">Verification summary</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex gap-3">
              <UsersRound className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-medium text-foreground">Community verification count</dt>
                <dd className="text-muted-foreground">{place.communityVerificationCount} demo reports</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <CalendarDays className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-medium text-foreground">Last verified date</dt>
                <dd className="text-muted-foreground">{place.lastVerified}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <CalendarDays className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-medium text-foreground">Last updated</dt>
                <dd className="text-muted-foreground">{place.lastUpdated}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Database className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-medium text-foreground">Data source</dt>
                <dd className="text-muted-foreground">{place.dataSource}</dd>
              </div>
            </div>
          </dl>
        </aside>
      </section>
    </div>
  );
}
