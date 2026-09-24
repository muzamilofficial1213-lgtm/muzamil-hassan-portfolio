"use client";

import HeroScene from "@/components/3d/HeroScene";
import PhotoFrame from "@/components/3d/PhotoFrame";

const stack = ["JavaScript", "TypeScript", "React", "Next.js", "Three.js"];

const stats = [
  { value: "15+", label: "PROJECTS" },
  { value: "1+", label: "YEARS LEARNING" },
  { value: "10+", label: "TECHNOLOGIES" },
  { value: "∞", label: "COFFEE" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#030506] text-white"
    >
      <HeroScene />

      <div className="relative z-40 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-7 pt-[105px] sm:px-8 sm:pt-[112px] md:px-10 lg:px-12">
        {/* MAIN HERO CONTENT */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-[760px]">
            {/* AVAILABILITY */}
            <div className="mb-6 inline-flex items-center gap-3 border border-cyan-400/20 bg-cyan-400/[0.035] px-3 py-2 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/[0.06]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.75)]" />
              </span>

              <span className="font-mono text-[8px] font-bold tracking-[0.18em] text-cyan-300 sm:text-[9px]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* CATEGORY */}
            <p className="mb-5 font-mono text-[8px] font-bold tracking-[0.22em] text-white/40 sm:text-[10px]">
              SOFTWARE ENGINEERING
              <span className="mx-2 text-cyan-400/80">•</span>
              WEB DEVELOPMENT
            </p>

            {/* HERO TITLE */}
            <h1 className="font-sans text-[clamp(3.7rem,9.8vw,9rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em]">
              <span className="block text-white">BUILDING</span>

              <span className="block bg-gradient-to-r from-white via-white to-white/35 bg-clip-text text-transparent">
                THE WEB.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[560px] text-[12px] leading-6 text-white/45 sm:mt-8 sm:text-[14px] sm:leading-7">
              I design and build modern digital experiences focused on
              performance, usability and clean engineering — turning ideas
              into real products for the web.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <a
                href="#work"
                className="group relative inline-flex h-11 items-center gap-5 overflow-hidden border border-cyan-300 bg-cyan-400 px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-black shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)] active:translate-y-0 sm:h-12 sm:px-5 sm:text-[9px]"
              >
                <span className="relative z-10">VIEW MY WORK</span>

                <span className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              <a
                href="#contact"
                className="group inline-flex h-11 items-center gap-4 border border-white/15 bg-white/[0.025] px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-400/[0.045] hover:text-white active:translate-y-0 sm:h-12 sm:gap-5 sm:px-5 sm:text-[9px]"
              >
                LET&apos;S TALK

                <span className="text-sm text-cyan-300/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* MOBILE / TABLET PHOTO */}
          <div className="relative mt-8 flex w-full justify-center md:mt-10 lg:hidden">
            <div className="relative h-[310px] w-[280px] sm:h-[360px] sm:w-[320px] md:h-[390px] md:w-[350px]">
              <PhotoFrame />
            </div>
          </div>

          {/* CURRENT STACK */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.25)]" />

              <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25 sm:text-[8px]">
                CURRENT STACK
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((item, index) => (
                <div
                  key={item}
                  className="group relative overflow-hidden border border-white/[0.09] bg-white/[0.025] px-3 py-2 font-mono text-[7px] font-bold tracking-[0.11em] text-white/45 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.045] hover:text-cyan-300 hover:shadow-[0_8px_24px_rgba(34,211,238,0.06)] sm:text-[8px]"
                >
                  <span className="mr-2 text-cyan-400/25 transition-colors group-hover:text-cyan-400/70">
                    0{index + 1}
                  </span>

                  {item}

                  <span className="absolute inset-x-0 bottom-0 h-px -translate-x-full bg-cyan-400/50 transition-transform duration-500 group-hover:translate-x-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP STATS */}
        <div className="absolute right-5 top-[108px] z-[100] hidden sm:block md:right-10 lg:right-12">
          <div className="border border-white/[0.12] bg-[#06090b]/80 px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:bg-[#071014]/90 md:px-5">
            <div className="grid grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group min-w-[70px] px-4 md:min-w-[82px] ${
                    index > 0 ? "border-l border-white/[0.08]" : ""
                  } ${index === 0 ? "pl-0" : ""} ${
                    index === stats.length - 1 ? "pr-0" : ""
                  }`}
                >
                  <div className="font-sans text-[23px] font-semibold tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {stat.value}
                  </div>

                  <div className="mt-1 font-mono text-[6px] font-bold tracking-[0.14em] text-white/25 transition-colors duration-300 group-hover:text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP PHOTO */}
        <div className="pointer-events-none absolute right-[1%] top-[20%] z-30 hidden h-[66%] w-[42%] lg:block xl:right-[3%] xl:top-[18%] xl:h-[70%] xl:w-[47%]">
          <PhotoFrame />
        </div>

        {/* MOBILE STATS */}
        <div className="relative z-[100] mt-8 sm:hidden">
          <div className="border border-white/[0.1] bg-[#06090b]/80 px-3 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="grid grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group px-2 text-center ${
                    index > 0 ? "border-l border-white/[0.08]" : ""
                  }`}
                >
                  <div className="font-sans text-xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {stat.value}
                  </div>

                  <div className="mt-1 font-mono text-[5px] tracking-[0.1em] text-white/25">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative z-[100] mt-8 flex items-end justify-between border-t border-white/[0.06] pt-5 sm:mt-10">
          {/* SOCIALS */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/muzamilofficial1213-lgtm"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex h-7 min-w-7 items-center justify-center border border-white/[0.07] bg-white/[0.015] px-2 font-mono text-[8px] font-bold tracking-[0.14em] text-white/30 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/muzamil-hassan-69ab083b3"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-7 min-w-7 items-center justify-center border border-white/[0.07] bg-white/[0.015] px-2 font-mono text-[8px] font-bold tracking-[0.14em] text-white/30 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
            >
              IN
            </a>

            <a
              href="mailto:muzamilofficial1213@gmail.com"
              aria-label="Email"
              className="group flex h-7 min-w-7 items-center justify-center border border-white/[0.07] bg-white/[0.015] px-2 font-mono text-[8px] font-bold tracking-[0.14em] text-white/30 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
            >
              @
            </a>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/20" />

            <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
              SCROLL TO EXPLORE
            </span>

            <span className="flex h-6 w-5 items-center justify-center border border-cyan-400/15 bg-cyan-400/[0.025] text-cyan-400/65 animate-bounce">
              ↓
            </span>
          </div>

          {/* PAGE INDICATOR */}
          <div className="flex items-center font-mono text-[8px] font-bold tracking-[0.16em]">
            <span className="text-cyan-400">01</span>

            <span className="mx-1 text-white/15">/</span>

            <span className="text-white/20">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}