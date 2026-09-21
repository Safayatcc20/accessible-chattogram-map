import { Database, Map, RefreshCw, ShieldCheck, Sprout, UsersRound } from "lucide-react";

const sections = [
  {
    title: "What Accessible Chattogram is",
    icon: Map,
    body: "Accessible Chattogram is a frontend MVP for exploring accessibility information about public places, services, transport points, and community destinations across the city.",
  },
  {
    title: "Why the project exists",
    icon: Sprout,
    body: "Reliable access information helps disabled residents, families, students, workers, and visitors plan daily movement with fewer surprises and more confidence.",
  },
  {
    title: "Open data",
    icon: Database,
    body: "The product direction is open-data friendly: structured reports can later be reviewed, exported, and reused for civic planning and public awareness.",
  },
  {
    title: "OpenStreetMap",
    icon: Map,
    body: "The map experience is designed around OpenStreetMap so future versions can align place information with a global, community-maintained map ecosystem.",
  },
  {
    title: "Community verification",
    icon: UsersRound,
    body: "Community review helps flag stale or incomplete information. This MVP labels data as demo content and avoids claiming official verification.",
  },
  {
    title: "Data freshness",
    icon: RefreshCw,
    body: "Accessibility conditions can change when buildings are renovated, entrances move, lifts stop working, or temporary obstacles appear, so dates matter.",
  },
  {
    title: "Future expansion",
    icon: ShieldCheck,
    body: "A later backend could add accounts, moderated submissions, PostGIS search, audit history, image evidence, and civic reporting workflows.",
  },
];

export function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b bg-section-surface py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-primary">About</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            A civic map for clearer accessibility information
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            The MVP shows how a community-supported accessibility platform for Chattogram could help people discover useful access details without overstating data certainty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="rounded-lg border bg-card p-5 shadow-sm">
                <Icon className="mb-4 size-6 text-primary" aria-hidden="true" />
                <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
