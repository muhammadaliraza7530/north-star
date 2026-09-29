import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-background/80 to-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={site.fullName}>
          <img
            src={site.logo}
            alt={`${site.fullName} logo`}
            width={48}
            height={48}
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-[0.16em] text-primary sm:text-base">
              NORTHSTAR
            </span>
            <span className="mt-1 whitespace-nowrap text-[8px] uppercase tracking-[0.20em] text-muted-foreground sm:text-[9px]">
              Construction &amp; Development
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="sheen-on-hover hidden rounded-full bg-gradient-to-r from-copper to-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:scale-[1.03] md:inline-block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                pathname === l.to
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
          >
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
