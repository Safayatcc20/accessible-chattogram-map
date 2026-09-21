import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/pages/GuidePage";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Accessibility Guide — Accessible Chattogram" },
      {
        name: "description",
        content: "Learn what common accessibility features mean, including ramps, accessible toilets, tactile paving, and audio assistance.",
      },
      { property: "og:title", content: "Accessibility Guide — Accessible Chattogram" },
      {
        property: "og:description",
        content: "Understand the accessibility features used in the Accessible Chattogram demo map.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuidePage,
});
