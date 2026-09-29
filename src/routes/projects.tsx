import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AutoVideo } from "@/components/AutoVideo";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { ProjectRail } from "@/components/ProjectRail";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | North Star Construction and Development" },
      {
        name: "description",
        content:
          "Designer villas, farm houses, Spanish houses and commercial projects delivered by North Star Construction in Bahria Town, Islamabad and Rawalpindi.",
      },
      { property: "og:title", content: "Our Projects | North Star Construction" },
      {
        property: "og:description",
        content:
          "Explore completed designer villas, farm houses and commercial builds by North Star Construction and Development.",
      },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Villas", "Farm House", "Spanish", "Commercial"] as const;

function matches(title: string, f: (typeof filters)[number]) {
  if (f === "All") return true;
  if (f === "Villas") return title.includes("Villa");
  if (f === "Farm House") return title.includes("Form House") || title.includes("Farm House");
  if (f === "Spanish") return title.includes("Spanish");
  return title.includes("Commercial");
}

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(() => projects.filter((p) => matches(p.title, active)), [active]);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our completed and ongoing projects"
        intro="From 7 marla designer villas to 4 kanal farm houses and commercial developments."
        image="/images/ns/project-11.webp"
      />

      <section className="relative overflow-hidden bg-card/20 py-10 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto flex w-full max-w-xs items-center justify-center overflow-hidden rounded-3xl border border-primary/30 bg-black shadow-2xl shadow-primary/15 sm:max-w-sm">
            <div className="aspect-[9/16] h-[520px] w-full sm:h-[600px]">
              <AutoVideo
                src="/video/showreel.mp4"
                poster="/video/showreel.webp"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "reg-chip rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em]",
                  active === f
                    ? "is-on border-primary text-primary"
                    : "border-border text-muted-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={`${p.title}-${p.image}-${i}`} delay={(i % 3) * 70}>
                <article className="lit-panel group h-full overflow-hidden bg-card/50">
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
                      {p.block}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-base font-bold sm:text-lg">{p.title}</h2>
                    <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {p.location}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/20 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Swipe through our recent work"
            align="center"
          />
        </div>
        <div className="mt-10">
          <ProjectRail items={projects} speed={0.24} />
        </div>
      </section>



      <CtaBand />
    </>
  );
}