import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-primary backdrop-blur transition-all duration-300 hover:border-primary",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8 animate-wa-shake fill-white" aria-hidden="true">
          <path d="M16.04 3C8.87 3 3.05 8.82 3.05 15.99c0 2.28.6 4.5 1.74 6.46L3 29l6.72-1.76a12.9 12.9 0 0 0 6.32 1.63h.01c7.16 0 12.98-5.82 12.98-12.99C29.03 8.82 23.2 3 16.04 3Zm0 23.7h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-4 1.05 1.07-3.9-.26-.4a10.72 10.72 0 0 1-1.65-5.72c0-5.95 4.84-10.79 10.8-10.79 2.88 0 5.6 1.13 7.63 3.16a10.71 10.71 0 0 1 3.16 7.64c0 5.96-4.85 10.7-10.84 10.7Zm5.93-8.02c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.28-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.61-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.55-.73-.56l-.62-.01c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.7 0 1.58 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.62-.37Z" />
        </svg>
      </a>
    </div>
  );
}
