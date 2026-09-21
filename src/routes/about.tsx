import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Accessible Chattogram" },
      {
        name: "description",
        content: "Learn about the Accessible Chattogram civic-tech MVP, open data direction, community verification, and future expansion plans.",
      },
      { property: "og:title", content: "About — Accessible Chattogram" },
      {
        property: "og:description",
        content: "Accessible Chattogram is a frontend MVP for community-supported accessibility mapping in Chattogram.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
