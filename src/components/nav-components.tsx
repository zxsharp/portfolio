"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Button } from "./ui/button";

// Shared helper: scroll the correct container with header offset and clamping.
function scrollToSection(id: string, opts?: { delayMs?: number }) {
  const delayMs = opts?.delayMs ?? 0;
  const run = () => {
    const el = document.getElementById(id);
    if (!el) return;

    // Prefer custom scroll container if present, else fallback to the document root.
    const container =
      (document.querySelector(".custom-scrollbar") as HTMLElement | null) ||
      (document.scrollingElement as HTMLElement | null) ||
      document.documentElement;

    // Fixed nav height (query the fixed nav this component renders)
    const nav = document.querySelector("nav.fixed") as HTMLElement | null;
    const headerOffset = (nav?.getBoundingClientRect().height ?? 0) + 8;

    // Current scroll position and geometry
    const topNow = container.scrollTop;
    const viewportH = container.clientHeight || window.innerHeight;
    const scrollH =
      container.scrollHeight || document.documentElement.scrollHeight;

    const elTop = el.getBoundingClientRect().top + topNow - headerOffset;
    const maxScroll = Math.max(0, scrollH - viewportH);
    const targetTop = Math.max(0, Math.min(elTop, maxScroll));

    // Smoothly scroll the container
    container.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  if (delayMs > 0) {
    setTimeout(run, delayMs);
  } else {
    run();
  }
}

function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollToId = (id: string) => {
    if (open) setOpen(false); 
    scrollToSection(id);
  };

  // Bind useScroll to the custom scroll container (do this after mount).
  const containerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    containerRef.current = document.querySelector(".custom-scrollbar") as HTMLElement | null;
  }, []);
  const { scrollY } = useScroll({ container: containerRef });

  // Track scroll direction
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");
  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    const diff = current - prev;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between text-slate-100">
        {/* Left: profile image with revolving beam on outline */}
        <button
          type="button"
          aria-label="Home"
          onClick={() => scrollToId("hero")}
          className="pointer-events-auto flex items-center gap-2"
        >
          <div className="relative rounded-full p-[4px]">
            {/* ring around pfp */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(148,163,184,0.28), rgba(161,161,170,0.28))",
                WebkitMaskImage:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                maskImage:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                filter: "blur(0.2px)",
              }}
            />
            {/* rotating beam*/}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: `
                  conic-gradient(
                    from 0deg,
                    rgba(148,163,184,0) 0deg,
                    rgba(148,163,184,0) 280deg,
                    rgba(148,163,184,0.00) 300deg,
                    rgba(148,163,184,0.55) 315deg,
                    rgba(161,161,170,0.95) 330deg,
                    rgba(148,163,184,0.55) 345deg,
                    rgba(148,163,184,0.00) 360deg
                  )
                `,
                WebkitMaskImage:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                maskImage:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                filter: "drop-shadow(0 0 12px rgba(148,163,184,0.45))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />
            <Image
              src="/nav-pfp.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full block"
              priority
            />
          </div>
        </button>

        {/* Right: hamburger */}
        <motion.button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto outline-1 relative inline-flex flex-col items-center justify-center gap-1 p-2 rounded-md hover:bg-white/10  cursor-pointer"
          animate={open || scrollDirection === "up" ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", pointerEvents: open || scrollDirection === "up" ? "auto" : "none" }}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </motion.button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-colors ${open ? "pointer-events-auto bg-black/40" : "pointer-events-none bg-transparent"}`}
      />

      {/* Right drawer */}
      <aside
        className={`pointer-events-auto fixed right-0 top-0 z-50 h-full w-64 bg-background text-slate-100 shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="text-sm font-semibold">Menu</div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span className="sr-only">Close</span>
            {/* X */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-4 flex flex-col gap-2">
          <button
            className="w-full text-left px-3 py-2 rounded hover:bg-white/10"
            onClick={() => scrollToId("hero")}
          >
            Home
          </button>

          <button
            className="w-full text-left px-3 py-2 rounded hover:bg-white/10"
            onClick={() => scrollToId("about")}
          >
            About me
          </button>
          
          <button
            className="w-full text-left px-3 py-2 rounded hover:bg-white/10"
            onClick={() => scrollToId("projects")}
          >
            Projects
          </button>

          <button
            className="w-full text-left px-3 py-2 rounded hover:bg-white/10"
            onClick={() => scrollToId("tech-stack")}
          >
            Tech Stack
          </button>

          <button
            className="w-full text-left px-3 py-2 rounded hover:bg-white/10"
            onClick={() => scrollToId("contact")}
          >
            Contact
          </button>
        </div>
      </aside>
    </nav>
  );
}

function NavButton(props: {name: string, navTo: string}) {
  return (
    <Button
      className="py-5 scale-95 text-lg cursor-pointer bg-gradient-to-br from-zinc-700 via-slate-600 to-cyan-800 transition-all duration-150 ease-in hover:scale-100 hover:from-cyan-800"
      onClick={() => {
        // Use the same robust scroll helper for consistency on mobile.
        scrollToSection(props.navTo);
      }}
    >
      {props.name}
    </Button>
  )
}


export {NavBar, NavButton}