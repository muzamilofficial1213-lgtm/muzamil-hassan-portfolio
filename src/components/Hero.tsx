"use client";

import HeroScene from "@/components/3d/HeroScene";
import PhotoFrame from "@/components/3d/PhotoFrame";

const stack = ["JavaScript", "TypeScript", "React", "Next.js", "Three.js"];

const stats = [
  { value: "15+", label: "PROJECTS" },
  { value: "1+", label: "YEARS LEARNING" },
  { value: "5+", label: "TECHNOLOGIES" },
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
            <div className="mb-6 inline-flex items-center gap-3 border border-cyan-400/20 bg-cyan-400/[0.035] px-3 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="font-mono text-[8px] font-bold tracking-[0.18em] text-cyan-300 sm:text-[9px]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* CATEGORY */}
            <p className="mb-5 font-mono text-[8px] font-bold tracking-[0.22em] text-white/40 sm:text-[10px]">
              SOFTWARE ENGINEERING
              <span className="mx-2 text-cyan-400">•</span>
              WEB DEVELOPMENT
            </p>

            {/* HERO TITLE */}
            <h1 className="font-sans text-[clamp(3.7rem,9.8vw,9rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em]">
              <span className="block text-white">BUILDING</span>

              <span className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
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
                className="group inline-flex h-11 items-center gap-5 border border-cyan-400 bg-cyan-400 px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-black transition-all duration-300 hover:bg-cyan-300 sm:h-12 sm:px-5 sm:text-[9px]"
              >
                VIEW MY WORK

                <span className="text-sm transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex h-11 items-center gap-4 border border-white/15 bg-white/[0.025] px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white sm:h-12 sm:gap-5 sm:px-5 sm:text-[9px]"
              >
                LET&apos;S TALK

                <span className="text-sm transition-transform group-hover:translate-x-1">
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
              <span className="h-px w-7 bg-cyan-400/60" />

              <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25 sm:text-[8px]">
                CURRENT STACK
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <div
                  key={item}
                  className="border border-white/[0.09] bg-white/[0.025] px-3 py-2 font-mono text-[7px] font-bold tracking-[0.11em] text-white/45 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:text-cyan-300 sm:text-[8px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP STATS */}
        <div className="absolute right-5 top-[108px] z-[100] hidden sm:block md:right-10 lg:right-12">
          <div className="border border-white/[0.12] bg-[#06090b]/85 px-4 py-4 shadow-2xl backdrop-blur-xl md:px-5">
            <div className="grid grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-[70px] px-4 first:pl-0 last:pr-0 md:min-w-[82px] ${
                    index > 0 ? "border-l border-white/[0.08]" : ""
                  }`}
                >
                  <div className="font-sans text-[23px] font-semibold tracking-[-0.05em] text-white">
                    {stat.value}
                  </div>

                  <div className="mt-1 font-mono text-[6px] font-bold tracking-[0.14em] text-white/25">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP PHOTO */}
        <div className="pointer-events-none absolute right-[3%] top-[18%] z-30 hidden h-[70%] w-[47%] lg:block">
          <PhotoFrame />
        </div>

        {/* MOBILE STATS */}
        <div className="relative z-[100] mt-8 sm:hidden">
          <div className="border border-white/[0.1] bg-[#06090b]/80 px-3 py-4 backdrop-blur-xl">
            <div className="grid grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-2 text-center ${
                    index > 0 ? "border-l border-white/[0.08]" : ""
                  }`}
                >
                  <div className="font-sans text-xl font-semibold text-white">
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
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/muzamilofficial1213-lgtm"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[8px] font-bold tracking-[0.14em] text-white/30 transition-colors hover:text-cyan-300"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/muzamil-hassan-69ab083b3"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[8px] font-bold tracking-[0.14em] text-white/30 transition-colors hover:text-cyan-300"
            >
              IN
            </a>

            <a
              href="mailto:muzamilofficial1213@gmail.com"
              className="font-mono text-[8px] font-bold tracking-[0.14em] text-white/30 transition-colors hover:text-cyan-300"
            >
              @
            </a>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-px w-10 bg-white/15" />

            <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
              SCROLL TO EXPLORE
            </span>

            <span className="animate-bounce text-cyan-400/60">↓</span>
          </div>

          <div className="font-mono text-[8px] font-bold tracking-[0.16em]">
            <span className="text-cyan-400">01</span>

            <span className="mx-1 text-white/15">/</span>

            <span className="text-white/20">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}