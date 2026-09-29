import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={site.logo}
                alt={`${site.fullName} logo`}
                width={56}
                height={56}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-[0.16em] text-primary">
                  NORTHSTAR
                </span>
                <span className="mt-1 whitespace-nowrap text-[9px] uppercase tracking-[0.20em] text-muted-foreground">
                  Construction &amp; Development
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Exceptional craftsmanship, attention to detail and unwavering dedication — the
              cornerstones of every project we deliver.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="flex flex-col">
                  <a href={`tel:${site.phoneTel}`} className="transition-colors hover:text-primary">
                    {site.phone}
                  </a>
                  <a
                    href={`tel:${site.phone2Tel}`}
                    className="transition-colors hover:text-primary"
                  >
                    {site.phone2}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>
            Design and develop by <span className="font-semibold text-primary">BrandUp</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
