import { createFileRoute } from "@tanstack/react-router";
import { Compass, Gem, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Counter, Reveal, SectionHeading, SkillBar } from "@/components/ui-bits";
import { ceo, skills, stats } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | North Star Construction and Development" },
      {
        name: "description",
        content:
          "Learn about North Star Construction and Development — craftsmanship, project management and quality assurance behind every build.",
      },
      { property: "og:title", content: "About North Star Construction" },
      {
        property: "og:description",
        content:
          "Exceptional craftsmanship, attention to detail and unwavering dedication on every construction project.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Gem,
    title: "Quality Assurance",
    text: "Premium materials, strict checks and a finish that holds up for decades.",
  },
  {
    icon: Compass,
    title: "Efficient Project Management",
    text: "Detailed planning, transparent scheduling and disciplined execution on site.",
  },
  {
    icon: Users,
    title: "Expertise & Experience",
    text: "300+ skilled professionals across engineering, design and finishing trades.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building Dreams, Crafting Reality"
        intro="A leading construction and development company built on craftsmanship, detail and dedication."
        image="/images/ns/project-5.webp"
      />

      <section className="relative overflow-hidden border-y border-border bg-card/20 py-14 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-20" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)]" />
              <div className="lit-panel relative overflow-hidden bg-black">
                <img
                  src={ceo.image}
                  alt={`${ceo.name} — ${ceo.role}, North Star Construction`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  width={1024}
                  height={1408}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pt-16">
                  <p className="font-display text-lg font-bold text-primary">{ceo.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {ceo.role}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Leadership" title="A word from our CEO" />
            <Reveal delay={80}>
              <blockquote className="mt-6 font-display text-lg leading-relaxed text-foreground sm:text-2xl">
                “{ceo.quote}”
              </blockquote>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {ceo.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="lit-panel bg-card/50 px-3 py-6 text-center sm:px-6">
                <Counter
                  value={s.value}
                  className="font-display text-2xl font-bold text-primary sm:text-4xl"
                />
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="How we work on every project"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="lit-panel h-full bg-card/50 p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold sm:text-lg">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-2xl space-y-5">
              {skills.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
