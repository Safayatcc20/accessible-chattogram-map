import { lazy, Suspense, useEffect, useState } from "react";

import type { Place } from "@/types/place";

const MapClient = lazy(() => import("./MapClient").then((module) => ({ default: module.MapClient })));

export function AccessibleMap({ places, className }: { places: Place[]; className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`grid min-h-[24rem] place-items-center rounded-lg border bg-map-surface text-muted-foreground ${className ?? ""}`}>
        Loading accessible map…
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={`grid min-h-[24rem] place-items-center rounded-lg border bg-map-surface text-muted-foreground ${className ?? ""}`}>
          Loading accessible map…
        </div>
      }
    >
      <MapClient places={places} className={className} />
    </Suspense>
  );
}
