import { useEffect } from "react";

/**
 * Site-wide premium light layer.
 * 1. Pointer-following corner glow on every `.lit-panel`.
 * 2. As the visitor scrolls, panels near the viewport centre light up
 *    section by section (so the effect also works on touch).
 */
export function GlowLayer() {
  useEffect(() => {
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(".lit-panel") as HTMLElement | null;
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - r.left}px`);
      target.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    const sweep = () => {
      raf = 0;
      const mid = window.innerHeight * 0.52;
      const band = window.innerHeight * 0.3;
      document.querySelectorAll<HTMLElement>(".lit-panel").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) {
          el.classList.remove("is-lit");
          return;
        }
        const center = r.top + r.height / 2;
        const lit = Math.abs(center - mid) < band;
        el.classList.toggle("is-lit", lit);
        if (lit) {
          el.style.setProperty("--mx", "50%");
          el.style.setProperty("--my", "0%");
        }
      });
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}