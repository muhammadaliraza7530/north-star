import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";
import { Reveal } from "@/components/ui-bits";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="lit-panel relative overflow-hidden bg-card/60 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-50" />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
                Start your project
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-2xl leading-tight sm:text-4xl">
                Let&apos;s build something worth pointing at
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Share your plot details and requirements — our team will get back to you with a
                clear scope, timeline and estimate.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="sheen-on-hover w-full rounded-full bg-gradient-to-r from-copper to-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  Request a Quote
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/60 bg-[#25D366]/10 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#25D366] transition-colors hover:bg-[#25D366]/20 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
