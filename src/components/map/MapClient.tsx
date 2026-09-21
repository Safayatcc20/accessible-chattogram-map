import { Link } from "@tanstack/react-router";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Place } from "@/types/place";

const categoryColors: Record<Place["category"], string> = {
  Hospital: "#d9480f",
  University: "#2f6f58",
  School: "#0b7285",
  Restaurant: "#8f5b10",
  "Shopping Mall": "#6f5e9c",
  "Government Office": "#42526e",
  Transport: "#1f6feb",
  Other: "#4f6f52",
};

function createMarkerIcon(place: Place) {
  const color = categoryColors[place.category];
  const initials = place.category
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return L.divIcon({
    className: "accessible-marker",
    html: `<span style="--marker-color:${color}">${initials}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

function FitPlaces({ places }: { places: Place[] }) {
  const map = useMap();

  if (places.length > 0) {
    const bounds = L.latLngBounds(places.map((place) => [place.coordinates.lat, place.coordinates.lng]));
    map.fitBounds(bounds.pad(0.16), { animate: false, maxZoom: 13 });
  }

  return null;
}

export function MapClient({ places, className = "" }: { places: Place[]; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border bg-card shadow-sm ${className}`}>
      <MapContainer
        center={[22.3569, 91.7832]}
        zoom={12}
        scrollWheelZoom
        className="h-full min-h-[24rem] w-full"
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitPlaces places={places} />
        {places.map((place) => (
          <Marker key={place.id} position={[place.coordinates.lat, place.coordinates.lng]} icon={createMarkerIcon(place)}>
            <Popup minWidth={240}>
              <div className="space-y-3">
                <div>
                  <p className="text-base font-semibold text-popover-foreground">{place.name}</p>
                  <p className="text-sm text-muted-foreground">{place.address}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{place.category}</Badge>
                  <Badge variant="outline">{place.area}</Badge>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to="/places/$id" params={{ id: place.id }}>
                    View accessibility details
                  </Link>
                </Button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
