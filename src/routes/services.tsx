import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | North Star Construction and Development" },
      {
        name: "description",
        content:
          "Design-build, residential, commercial and industrial construction, interior renovation and project management by North Star Construction.",
      },
      { property: "og:title", content: "Construction Services | North Star" },
      {
        property: "og:description",
        content:
          "End-to-end construction services — design-build, residential, commercial, industrial, interiors and project management.",
      },
    ],
  }),
  component: ServicesPage,
});

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your requirement, site details and budget." },
  { n: "02", t: "Design & Estimate", d: "Drawings, 3D views and a transparent cost breakdown." },
  { n: "03", t: "Construction", d: "Grey structure to finishing, supervised at every stage." },
  { n: "04", t: "Handover", d: "Final quality checks and a home ready to move into." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete construction services under one roof"
        intro="Every discipline you need to take a project from an empty plot to a finished, handed-over building."
        image="/images/ns/project-8.webp"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={40}>
              <article
                className={cn(
                  "lit-panel grid gap-0 overflow-hidden bg-card/50 lg:grid-cols-2",
                  i % 2 === 1 && "lg:[&>figure]:order-2",
                )}
              >
                <figure className="relative h-56 overflow-hidden sm:h-72 lg:h-full lg:min-h-[20rem]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </figure>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                  >
                    Discuss this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="How your project moves forward" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <Reveal key={st.n} delay={i * 80}>
                <div className="lit-panel h-full bg-card/50 p-6">
                  <span className="font-display text-3xl font-bold text-primary/40">{st.n}</span>
                  <h3 className="mt-3 text-base font-bold">{st.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
