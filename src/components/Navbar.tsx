"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  const navRef = useRef<HTMLElement | null>(null);
  const pointerFrameRef = useRef<number | null>(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });
  const sectionFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      sectionFrameRef.current = null;

      const activationLine =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "HOME";

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;

        if (activationLine >= sectionTop) {
          currentSection = item.label;
        }
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    const handleScroll = () => {
      if (sectionFrameRef.current !== null) return;

      sectionFrameRef.current =
        window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (sectionFrameRef.current !== null) {
        window.cancelAnimationFrame(sectionFrameRef.current);
        sectionFrameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const updateTransform = () => {
      pointerFrameRef.current = null;

      const rect = nav.getBoundingClientRect();

      const x =
        (pointerPositionRef.current.x - rect.left) / rect.width - 0.5;

      const y =
        (pointerPositionRef.current.y - rect.top) / rect.height - 0.5;

      nav.style.setProperty("--nav-x", `${x}`);
      nav.style.setProperty("--nav-y", `${y}`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (window.innerWidth < 768) return;

      pointerPositionRef.current.x = event.clientX;
      pointerPositionRef.current.y = event.clientY;

      if (pointerFrameRef.current !== null) return;

      pointerFrameRef.current =
        window.requestAnimationFrame(updateTransform);
    };

    const resetTransform = () => {
      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }

      nav.style.setProperty("--nav-x", "0");
      nav.style.setProperty("--nav-y", "0");
    };

    nav.addEventListener("pointermove", handlePointerMove);
    nav.addEventListener("pointerleave", resetTransform);

    return () => {
      nav.removeEventListener("pointermove", handlePointerMove);
      nav.removeEventListener("pointerleave", resetTransform);

      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }
    };
  }, []);

  const handleNavigation = (href: string) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navStyle = {
    "--nav-x": "0",
    "--nav-y": "0",
    transform:
      "perspective(1200px) rotateX(calc(var(--nav-y) * -1.8deg)) rotateY(calc(var(--nav-x) * 2.4deg))",
  } as CSSProperties;

  return (
    <header className="pointer-events-none w-full px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8">
      <nav
        ref={navRef}
        aria-label="Primary navigation"
        className="pointer-events-auto relative mx-auto flex h-[66px] max-w-[1380px] items-center justify-between rounded-[18px] border border-white/[0.1] bg-[#070b0d]/65 px-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-transform duration-500 ease-out sm:h-[72px] sm:px-4 lg:px-5"
        style={navStyle}
      >
        {/* CINEMATIC TOP LIGHT */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

        {/* EDGE GLOW */}
        <div className="pointer-events-none absolute -inset-px -z-10 rounded-[18px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/[0.08] to-cyan-400/0 blur-xl" />

        {/* LEFT BRAND */}
        <button
          type="button"
          onClick={() => handleNavigation("#home")}
          className="group relative flex items-center gap-3 rounded-xl px-2 py-2 text-left"
          aria-label="Go to home"
        >
          {/* 3D MARK */}
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span className="absolute inset-[3px] rotate-45 border border-cyan-400/35 bg-cyan-400/[0.035] transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-cyan-300/70 group-hover:bg-cyan-400/[0.08]" />

            <span className="absolute inset-[8px] rotate-45 border border-white/[0.08]" />

            <span className="relative font-mono text-[10px] font-bold tracking-[-0.08em] text-cyan-300 transition-transform duration-500 group-hover:scale-110">
              M
            </span>

            <span className="absolute -right-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          </span>

          <span className="hidden sm:block">
            <span className="block font-sans text-[11px] font-semibold tracking-[0.16em] text-white">
              MUZAMIL<span className="text-cyan-400">.</span>HASSAN
            </span>

            <span className="mt-0.5 block font-mono text-[6px] font-bold tracking-[0.2em] text-white/25">
              SOFTWARE ENGINEERING
            </span>
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-white/[0.06] bg-black/20 p-1 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.label;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className={`group relative flex h-10 items-center px-4 font-mono text-[8px] font-bold tracking-[0.17em] transition-all duration-300 ${
                  active
                    ? "text-cyan-300"
                    : "text-white/35 hover:text-white/80"
                }`}
              >
                {active && (
                  <span className="absolute inset-1 rounded-lg border border-cyan-400/15 bg-cyan-400/[0.045]" />
                )}

                <span className="relative z-10">{item.label}</span>

                <span
                  className={`absolute bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-cyan-400 transition-all duration-300 ${
                    active
                      ? "w-4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* RIGHT CTA */}
        <button
          type="button"
          onClick={() => handleNavigation("#contact")}
          className="group hidden h-11 items-center gap-4 rounded-xl border border-cyan-400/40 bg-cyan-400/[0.055] px-4 font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-200 transition-all duration-300 hover:border-cyan-300/80 hover:bg-cyan-400/[0.12] md:flex"
        >
          <span>LET&apos;S TALK</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/[0.06] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-px w-full bg-white/70 transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-cyan-400/70 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-white/70 transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* MOBILE MENU */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[18px] border border-white/[0.1] bg-[#070b0d]/95 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-400 md:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div className="p-2">
            {navItems.map((item, index) => {
              const active = activeSection === item.label;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className={`relative flex w-full items-center justify-between rounded-xl px-4 py-4 font-mono text-[9px] font-bold tracking-[0.18em] transition-colors ${
                    active
                      ? "bg-cyan-400/[0.06] text-cyan-300"
                      : "text-white/40 hover:bg-white/[0.025] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[7px] text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.label}
                  </span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}

            <div className="my-2 h-px bg-white/[0.06]" />

            <button
              type="button"
              onClick={() => handleNavigation("#contact")}
              className="flex w-full items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/[0.045] px-4 py-4 font-mono text-[9px] font-bold tracking-[0.18em] text-cyan-300"
            >
              <span>LET&apos;S TALK</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}