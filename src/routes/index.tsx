import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  HardHat,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { AutoScroller } from "@/components/AutoScroller";
import { CtaBand } from "@/components/CtaBand";
import { Counter, Reveal, SectionHeading, SkillBar } from "@/components/ui-bits";
import { ProjectRail } from "@/components/ProjectRail";

import {
  aboutBody,
  aboutPoints,
  ceo,
  faqs,
  heroSlides,
  highlights,
  projects,
  services,
  signatureLogos,
  site,
  skills,
  stats,
  testimonials,
  whyChooseBody,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North Star Construction | Where Visions Meets Construction" },
      {
        name: "description",
        content:
          "North Star Construction and Development builds designer villas, commercial and industrial projects across Islamabad and Rawalpindi with premium craftsmanship.",
      },
      { property: "og:title", content: "North Star Construction and Development" },
      {
        property: "og:description",
        content:
          "Premium construction and development — designer villas, commercial plazas and industrial projects delivered on time.",
      },
    ],
  }),
  component: HomePage,
});

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12">
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            aria-hidden="true"
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-[2200ms] ease-out",
              i === index ? "scale-105 opacity-100" : "scale-100 opacity-0",
            )}
          />
        ))}
        {/* keeps the text ~95% legible while the photography stays faintly visible */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/45 to-background" />
        <div className="absolute inset-0 grid-backdrop opacity-25" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
        <div className="soft-up inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
          {site.tagline}
        </div>

        <h1 className="mt-7 flex flex-col items-center">
          <span
            className="soft-up block text-[11px] font-semibold uppercase tracking-[0.42em] text-muted-foreground sm:text-sm"
            style={{ animationDelay: "0.05s" }}
          >
            Welcome to
          </span>

          <span className="name-mask mt-3">
            <span
              className="name-reveal bg-[linear-gradient(90deg,var(--copper),var(--accent),var(--primary),var(--copper))] bg-[length:200%_auto] bg-clip-text font-display text-[13vw] leading-[0.95] text-transparent animate-text-shine sm:text-7xl lg:text-8xl"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              North Star
            </span>
          </span>

          <span
            className="soft-up mt-3 block whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/90 sm:text-lg md:text-xl lg:text-2xl sm:tracking-[0.18em] lg:tracking-[0.22em]"
            style={{ animationDelay: "0.7s" }}
          >
            Construction &amp; Development
          </span>
        </h1>

        <p
          className="soft-up mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.85s" }}
        >
          Exceptional craftsmanship, attention to detail and unwavering dedication — the
          cornerstones of every successful North Star project across Islamabad and Rawalpindi.
        </p>

        <div
          className="soft-up mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "1s" }}
        >
          <Link
            to="/projects"
            className="sheen-on-hover btn-shake inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-copper to-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View Our Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Talk to Our Team
          </Link>
        </div>

        <div
          className="soft-up mt-14 grid w-full max-w-3xl grid-cols-3 gap-3 sm:gap-6"
          style={{ animationDelay: "1.15s" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="lit-panel bg-card/50 px-3 py-5 text-center sm:px-6">
              <Counter
                value={s.value}
                className="font-display text-2xl font-bold text-primary sm:text-4xl"
              />
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CeoSection() {
  return (
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
            <Quote className="mt-6 h-8 w-8 text-primary" />
            <blockquote className="mt-4 font-display text-lg leading-relaxed text-foreground sm:text-2xl">
              “{ceo.quote}”
            </blockquote>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {ceo.body}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-14 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="lit-panel group relative flex min-h-[18rem] flex-col justify-end overflow-hidden bg-card/60 sm:min-h-[23rem]">
              <img
                src="/images/ns/gen-8.webp"
                alt="2 Kanal Signature Designer Villa — Bahria Town Rawalpindi Phase 8"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur sm:left-4 sm:top-4 sm:text-[10px]">
                Bahria Hamlet
              </span>
              <div className="relative p-4 sm:p-5">
                <p className="font-display text-sm font-bold leading-snug text-foreground sm:text-base">
                  2 Kanal Signature Designer Villa
                </p>
                <p className="mt-1 text-[11px] text-primary sm:text-xs">Bahria Town Phase 8</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-8">
              <div className="lit-panel group relative h-44 overflow-hidden bg-card/60 sm:h-52">
                <img
                  src="/images/ns/project-7.webp"
                  alt="1 Kanal Spanish Villa — Overseas V Block, Bahria Town"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                  <p className="font-display text-xs font-bold leading-snug text-foreground sm:text-sm">
                    1 Kanal Spanish Villa
                  </p>
                  <p className="mt-0.5 text-[10px] text-primary sm:text-xs">Overseas V Block</p>
                </div>
              </div>
              <div className="lit-panel flex flex-1 flex-col items-center justify-center bg-card/60 p-4 text-center">
                <HardHat className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 font-display text-lg font-bold text-primary">Since day one</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Built on trust
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="About North Star" title="Building Dreams, Crafting Reality" />
          <Reveal delay={80}>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {aboutBody}
            </p>
            <ul className="mt-7 space-y-3">
              {aboutPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium sm:text-base">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-5">
              {skills.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
            >
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around your project"
          intro="From the first concept drawing to the final coat of paint, every discipline you need sits under one roof."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link to="/services" className="group block h-full">
                <article className="lit-panel flex h-full flex-col overflow-hidden bg-card/50">
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-bold sm:text-lg">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const items = [
    {
      icon: Award,
      title: "Expertise & Experience",
      text: "Senior engineers and craftsmen who have delivered hundreds of residential and commercial builds.",
    },
    {
      icon: Building2,
      title: "Exceptional Project Management",
      text: "Clear schedules, controlled budgets and one point of contact from groundbreaking to handover.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      text: "Premium materials and strict quality control checks at every stage of construction.",
    },
    {
      icon: HardHat,
      title: "Innovative Techniques",
      text: "Modern construction methods that improve strength, speed and long-term durability.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why North Star is the right partner"
          intro={whyChooseBody}
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="lit-panel h-full bg-card/50 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {highlights.map((h) => (
              <span
                key={h}
                className="reg-chip rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
              >
                {h}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Projects"
            title="Recently delivered by North Star"
            intro="A selection of designer villas, farm houses and commercial builds across Islamabad and Rawalpindi."
          />
          <Reveal delay={80}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
            >
              All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <ProjectRail items={projects} speed={0.24} />
      </div>
    </section>
  );
}

function SignatureSection() {
  const rail = [...signatureLogos, ...signatureLogos];
  return (
    <section className="relative border-y border-border bg-card/30 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Partners"
          title="Brands & partners we build with"
          align="center"
        />
      </div>
      <div className="my-6 flex w-full items-center justify-center">
        <AutoScroller
          className="py-4"
          innerClassName="gap-4 px-4 items-center justify-center"
          speed={0.08}
        >
          {rail.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="lit-panel flex h-24 w-40 shrink-0 items-center justify-center bg-card/60 p-4 sm:h-28 sm:w-52"
            >
              <img
                src={logo}
                alt="Signature project partner"
                loading="lazy"
                className="max-h-12 max-w-[80%] shrink-0 object-contain opacity-80 transition-opacity hover:opacity-100 sm:max-h-14"
              />
            </div>
          ))}
        </AutoScroller>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="lit-panel flex h-full flex-col bg-card/50 p-6 sm:p-7">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold text-primary">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-14 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className="lit-panel bg-card/50">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold sm:text-base">{f.q}</span>
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/40 text-primary transition-transform duration-300",
                      open === i && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-500",
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still have a question?{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-primary">
              Call {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <CeoSection />
      <ServicesSection />
      <WhyUsSection />
      <SignatureSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
