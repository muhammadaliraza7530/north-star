import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | North Star Construction and Development" },
      {
        name: "description",
        content:
          "Contact North Star Construction — Alpha Tower, Business District, Bahria Town Rawalpindi Phase 8. Call 0300 0134606 or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact North Star Construction" },
      {
        property: "og:description",
        content: "Get in touch for a construction quote, site visit or consultation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const waHref = `https://wa.me/923000134606?text=${encodeURIComponent(
    `Hello North Star Construction,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`,
  )}`;

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Project enquiry from ${form.name || "website"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`,
  )}`;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const field =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        intro="Call, WhatsApp or send us your requirement — our team responds the same working day."
        image="/images/ns/project-6.webp"
      />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <a
                href={`tel:${site.phoneTel}`}
                className="lit-panel flex h-full flex-col bg-card/50 p-6 transition-colors"
              >
                <Phone className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.16em]">Call Us</h2>
                <p className="mt-2 text-sm text-muted-foreground">{site.phone}</p>
                <p className="text-sm text-muted-foreground">{site.phone2}</p>
              </a>
            </Reveal>
            <Reveal delay={70}>
              <a
                href={`mailto:${site.email}`}
                className="lit-panel flex h-full flex-col bg-card/50 p-6"
              >
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.16em]">Email Us</h2>
                <p className="mt-2 break-all text-sm text-muted-foreground">{site.email}</p>
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="lit-panel flex h-full flex-col bg-card/50 p-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.16em]">Visit Us</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{site.address}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Enquiry" title="Send us your requirement" />
              <Reveal delay={60}>
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(waHref, "_blank", "noopener,noreferrer");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className={field}
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      aria-label="Your name"
                    />
                    <input
                      className={field}
                      placeholder="Phone number"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      aria-label="Phone number"
                    />
                  </div>
                  <input
                    className={field}
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={set("email")}
                    aria-label="Email address"
                  />
                  <textarea
                    className={`${field} min-h-36 resize-y`}
                    placeholder="Tell us about your project — plot size, location and scope"
                    required
                    value={form.message}
                    onChange={set("message")}
                    aria-label="Project details"
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="sheen-on-hover inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.02]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send on WhatsApp
                    </button>
                    <a
                      href={mailHref}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                    >
                      <Send className="h-4 w-4" />
                      Send by Email
                    </a>
                  </div>
                </form>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="lit-panel h-full min-h-[24rem] overflow-hidden">
                <iframe
                  title="North Star Construction office location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[24rem] w-full border-0 grayscale-[0.35] contrast-[1.1]"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}