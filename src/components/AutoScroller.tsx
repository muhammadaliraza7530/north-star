import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Continuously auto-scrolling horizontal rail.
 * Pauses on hover/touch, and can be dragged with mouse or finger.
 */
export function AutoScroller({
  children,
  speed = 0.05,
  className,
  innerClassName,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  innerClassName?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const state = useRef({ paused: false, dragging: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const s = state.current;
      if (!s.paused && !s.dragging && el.scrollWidth > 0) {
        el.scrollLeft += speed * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el || e.pointerType === "touch") return;
    state.current.dragging = true;
    state.current.startX = e.clientX;
    state.current.startScroll = el.scrollLeft;
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el || !state.current.dragging) return;
    el.scrollLeft = state.current.startScroll - (e.clientX - state.current.startX) * 1.4;
  };
  const endDrag = () => {
    state.current.dragging = false;
    setDragging(false);
  };

  return (
    <div
      ref={railRef}
      className={cn(
        "w-full overflow-x-auto scrollbar-none select-none",
        dragging ? "cursor-grabbing" : "cursor-grab",
        className,
      )}
      style={{ touchAction: "pan-x pan-y", WebkitOverflowScrolling: "touch" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={() => (state.current.paused = true)}
      onMouseLeave={() => {
        state.current.paused = false;
        endDrag();
      }}
      onTouchStart={() => (state.current.paused = true)}
      onTouchEnd={() => (state.current.paused = false)}
    >
      <div className={cn("flex w-max", innerClassName)}>{children}</div>
    </div>
  );
}