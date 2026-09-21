import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accessible Chattogram — Civic Accessibility Map" },
      {
        name: "description",
        content: "Explore demo accessibility information for places across Chattogram and help improve the civic map.",
      },
      { property: "og:title", content: "Accessible Chattogram — Civic Accessibility Map" },
      {
        property: "og:description",
        content: "Find, verify, and share accessibility information about places across Chattogram.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
