import { createFileRoute } from "@tanstack/react-router";

import { ContributePage } from "@/pages/ContributePage";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: "Contribute — Accessible Chattogram" },
      {
        name: "description",
        content: "Submit a mock accessibility report for a Chattogram place and help improve the demo civic map.",
      },
      { property: "og:title", content: "Contribute — Accessible Chattogram" },
      {
        property: "og:description",
        content: "Help improve Accessible Chattogram by sharing observed accessibility information in the frontend MVP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContributePage,
});
