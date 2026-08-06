import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        <div className="absolute inset-0 grid-backdrop opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="hero-rise flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
          <Link to="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          {eyebrow}
        </p>
        <h1 className="hero-rise mt-5 max-w-3xl text-3xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="hero-rise mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}