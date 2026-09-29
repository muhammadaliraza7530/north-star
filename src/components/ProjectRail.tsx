import { MapPin } from "lucide-react";
import { AutoScroller } from "@/components/AutoScroller";

type Project = { title: string; block: string; location: string; image: string };

/**
 * Continuously moving, finger-draggable rail of project cards.
 */
export function ProjectRail({ items, speed = 0.24 }: { items: Project[]; speed?: number }) {
  const rail = [...items, ...items];

  return (
    <AutoScroller innerClassName="gap-5 px-4 sm:px-6 lg:px-8" speed={speed}>
      {rail.map((p, i) => (
        <article
          key={`${p.title}-${i}`}
          className="lit-panel group w-[80vw] shrink-0 overflow-hidden bg-card/50 sm:w-[22rem]"
        >
          <div className="relative h-52 overflow-hidden sm:h-60">
            <img
              src={p.image}
              alt={`${p.title} — ${p.location}`}
              loading="lazy"
              width={1200}
              height={800}
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
              {p.block}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-base font-bold sm:text-lg">{p.title}</h3>
            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {p.location}
            </p>
          </div>
        </article>
      ))}
    </AutoScroller>
  );
}
