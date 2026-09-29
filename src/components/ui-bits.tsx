import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("lit-panel", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={cn(
          "flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs",
          align === "center" && "justify-center",
        )}
      >
        {align === "left" && <span className="h-px w-8 shrink-0 bg-primary" />}
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      )}
    </Reveal>
  );
}

export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = Number(numStr.replace(/,/g, ""));
  const valid = !!match && !Number.isNaN(target);
  const [display, setDisplay] = useState(() => (valid ? "0" : value));

  useEffect(() => {
    if (!valid) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const run = () => {
      started = true;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / 1600, 1);
        const eased = 1 - (1 - p) ** 3;
        setDisplay(Math.round(target * eased).toString());
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, valid]);

  if (!valid) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function SkillBar({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="text-foreground">{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-copper to-primary transition-[width] duration-[1400ms] ease-out"
          style={{ width: inView ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}
