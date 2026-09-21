import { createFileRoute } from "@tanstack/react-router";

import { ExplorePage } from "@/pages/ExplorePage";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Map — Accessible Chattogram" },
      {
        name: "description",
        content: "Search and filter demo accessibility information for hospitals, schools, transport, offices, malls, and public places in Chattogram.",
      },
      { property: "og:title", content: "Explore Map — Accessible Chattogram" },
      {
        property: "og:description",
        content: "Use the interactive OpenStreetMap view to explore demo accessibility information across Chattogram.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExplorePage,
});
