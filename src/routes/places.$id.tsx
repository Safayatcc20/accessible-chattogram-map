import { createFileRoute } from "@tanstack/react-router";

import { PlaceDetailsPage, getPlaceDetailsOrThrow } from "@/pages/PlaceDetailsPage";

export const Route = createFileRoute("/places/$id")({
  loader: ({ params }) => getPlaceDetailsOrThrow(params.id),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} — Accessible Chattogram` },
      {
        name: "description",
        content: `Demo accessibility details for ${loaderData.name} in ${loaderData.area}, Chattogram.`,
      },
      { property: "og:title", content: `${loaderData.name} — Accessible Chattogram` },
      {
        property: "og:description",
        content: `View demo accessibility status, source, and community verification details for ${loaderData.name}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlaceRoute,
});

function PlaceRoute() {
  const { id } = Route.useParams();
  return <PlaceDetailsPage placeId={id} />;
}
