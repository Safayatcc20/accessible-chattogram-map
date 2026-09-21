import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, UsersRound } from "lucide-react";

import { FeatureStatus } from "@/components/place/FeatureStatus";
import { VerificationBadge } from "@/components/place/VerificationBadge";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { accessibilityFeatures } from "@/data/accessibility-features";
import type { Place } from "@/types/place";

export function PlaceCard({ place }: { place: Place }) {
  const availableFeature = accessibilityFeatures.find(
    (feature) => place.accessibility[feature.key] === "available",
  );

  return (
    <Card className="shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{place.category}</Badge>
          <VerificationBadge status={place.verificationStatus} />
        </div>
        <CardTitle className="text-xl leading-snug">
          <Link
            to="/places/$id"
            params={{ id: place.id }}
            className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {place.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{place.address}</span>
        </p>
        {availableFeature ? (
          <div className="flex flex-wrap gap-2">
            <FeatureStatus status="available" />
            <span className="self-center text-sm text-muted-foreground">{availableFeature.shortLabel}</span>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Accessibility information needs community confirmation.</p>
        )}
        <div className="flex items-center justify-between gap-4 border-t pt-4 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <UsersRound className="size-4" aria-hidden="true" />
            {place.communityVerificationCount} reports
          </span>
          <Link
            to="/places/$id"
            params={{ id: place.id }}
            className="inline-flex items-center gap-1 rounded-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Details <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
