import { useEffect, useRef } from "react";

/**
 * Full-bleed showreel.
 * Plays with sound as soon as it enters the viewport, and stops
 * completely (video + audio) as soon as it leaves. No overlay UI.
 */
export function AutoVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let visible = false;

    const tryPlay = async (withSound: boolean) => {
      if (!visible) return;
      el.muted = !withSound;
      try {
        await el.play();
      } catch {
        if (withSound) {
          el.muted = true;
          try {
            await el.play();
          } catch {
            /* ignore */
          }
        }
      }
    };

    const onGesture = () => {
      if (visible && el.muted) void tryPlay(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visible = e.isIntersecting && e.intersectionRatio >= 0.55;
          if (visible) {
            void tryPlay(true);
          } else {
            el.pause();
            el.muted = true;
          }
        }
      },
      { threshold: [0, 0.55, 0.9] },
    );
    io.observe(el);

    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("scroll", onGesture, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("scroll", onGesture);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      preload="auto"
      loop
      playsInline
      muted
      width={608}
      height={1080}
      className="mx-auto block h-auto max-h-[88vh] w-auto max-w-full object-contain"
    />
  );
}
