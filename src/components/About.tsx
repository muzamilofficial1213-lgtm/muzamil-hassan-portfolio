"use client";

import { useEffect, useRef } from "react";

const skills = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "THREE.JS",
  "HTML",
  "CSS",
  "C++",
  "SUPABASE",
  "GIT",
  "GITHUB",
  "REST API",
];

const capabilities = [
  {
    number: "01",
    title: "BUILD",
    description:
      "Modern web applications with React, Next.js, TypeScript and scalable frontend architecture.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "Clean, responsive interfaces focused on usability, visual hierarchy and polished interaction.",
  },
  {
    number: "03",
    title: "ENGINEER",
    description:
      "Structured APIs, reusable components and practical solutions built around real project requirements.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      section.style.setProperty("--about-mouse-x", `${x}`);
      section.style.setProperty("--about-mouse-y", `${y}`);
    };

    const handlePointerLeave = () => {
      section.style.setProperty("--about-mouse-x", "0");
      section.style.setProperty("--about-mouse-y", "0");
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050708] text-white"
      style={
        {
          "--about-mouse-x": "0",
          "--about-mouse-y": "0",
        } as React.CSSProperties
      }
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* cyan atmosphere */}
        <div
          className="absolute right-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]"
          style={{
            transform:
              "translate(calc(var(--about-mouse-x) * -18px), calc(var(--about-mouse-y) * -18px))",
          }}
        />

        {/* blue atmosphere */}
        <div
          className="absolute bottom-[10%] left-[5%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.025] blur-[110px]"
        />

        {/* side lines */}
        <div className="absolute bottom-0 left-[8%] top-0 w-px bg-white/[0.035]" />
        <div className="absolute bottom-0 right-[8%] top-0 w-px bg-white/[0.035]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-36">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div className="mb-16 flex items-end justify-between gap-8 lg:mb-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-cyan-400">
                02
              </span>

              <span className="h-px w-8 bg-cyan-400/50" />

              <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-white/30">
                ABOUT ME
              </span>
            </div>

            <h2 className="max-w-[900px] font-sans text-[clamp(3.2rem,8vw,7.8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]">
              <span className="block text-white">
                WHO I
              </span>

              <span className="block bg-gradient-to-r from-white via-white to-white/35 bg-clip-text text-transparent">
                AM.
              </span>
            </h2>
          </div>

          <div className="hidden max-w-[210px] pb-2 lg:block">
            <p className="font-mono text-[8px] leading-5 tracking-[0.08em] text-white/25">
              A SOFTWARE ENGINEERING STUDENT BUILDING, LEARNING AND
              DEVELOPING WITH PURPOSE.
            </p>
          </div>
        </div>

        {/* =======================================================
            INTRO / PROFILE
        ======================================================= */}

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Profile identity card */}

          <div className="group relative min-h-[390px] overflow-hidden border border-white/[0.09] bg-[#080b0d]/80 p-7 backdrop-blur-xl sm:p-9 lg:min-h-[500px]">
            {/* card glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.055] blur-[70px] transition-transform duration-700 group-hover:scale-125" />

            {/* technical coordinates */}
            <div className="absolute right-6 top-6 font-mono text-[7px] tracking-[0.16em] text-white/15">
              33.6844° N
              <br />
              73.0479° E
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-12 font-mono text-[8px] font-bold tracking-[0.18em] text-cyan-400/70">
                  PROFILE / 01
                </div>

                <div className="font-sans text-[clamp(2.6rem,5vw,4.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.065em]">
                  MUZAMIL
                  <br />
                  <span className="text-white/35">
                    HASSAN
                  </span>
                </div>

                <div className="mt-7 h-px w-16 bg-cyan-400/60" />

                <p className="mt-6 max-w-[400px] text-[13px] leading-7 text-white/45">
                  Software Engineering student focused on modern web
                  development, full-stack applications and interactive
                  digital experiences.
                </p>
              </div>

              <div className="mt-12 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[7px] tracking-[0.18em] text-white/20">
                    CURRENT FOCUS
                  </div>

                  <div className="mt-2 font-mono text-[9px] font-bold tracking-[0.12em] text-white/65">
                    WEB • QUALITY • SECURITY
                  </div>
                </div>

                <div className="relative h-14 w-14">
                  <div className="absolute inset-0 rotate-45 border border-cyan-400/20" />
                  <div className="absolute inset-2 rotate-45 border border-white/[0.08]" />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-cyan-400">
                    M
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}

          <div className="relative overflow-hidden border border-white/[0.09] bg-white/[0.018] p-7 backdrop-blur-xl sm:p-9 lg:p-11">
            <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-400/[0.025] blur-[55px]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-white/25">
                  // INTRODUCTION
                </span>

                <span className="font-mono text-[8px] tracking-[0.15em] text-cyan-400/50">
                  01 — 04
                </span>
              </div>

              <h3 className="max-w-[700px] font-sans text-[clamp(2rem,4vw,4rem)] font-medium uppercase leading-[0.95] tracking-[-0.055em] text-white/90">
                I BUILD DIGITAL
                <br />
                EXPERIENCES THAT
                <br />
                <span className="text-cyan-300">
                  MOVE IDEAS FORWARD.
                </span>
              </h3>

              <div className="mt-10 grid gap-7 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
                <p className="text-[13px] leading-7 text-white/40">
                  I&apos;m Muzamil Hassan, a Software Engineering student
                  who enjoys turning ideas into practical digital products.
                  My approach combines development, design thinking and
                  continuous experimentation.
                </p>

                <p className="text-[13px] leading-7 text-white/40">
                  My current focus is modern web development, full-stack
                  applications, APIs and interactive experiences. I learn
                  primarily by building real projects and improving the
                  engineering decisions behind them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            CAPABILITIES
        ======================================================= */}

        <div className="mt-5 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="group relative bg-[#080b0d]/95 p-7 transition-colors duration-300 hover:bg-[#0b1012] sm:p-9"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-cyan-400/70">
                  {item.number}
                </span>

                <span className="font-mono text-[7px] tracking-[0.16em] text-white/15">
                  CAPABILITY
                </span>
              </div>

              <h3 className="font-sans text-3xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-[330px] text-[12px] leading-6 text-white/35">
                {item.description}
              </p>

              <div className="mt-8 h-px w-8 bg-cyan-400/40 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>

        {/* =======================================================
            NUMBERS
        ======================================================= */}

        <div className="mt-20 grid border-y border-white/[0.07] sm:grid-cols-3">
          <div className="border-b border-white/[0.07] px-5 py-8 sm:border-b-0 sm:border-r">
            <div className="font-sans text-5xl font-semibold tracking-[-0.06em] text-white">
              10+
            </div>

            <div className="mt-2 font-mono text-[7px] font-bold tracking-[0.18em] text-white/25">
              TECHNOLOGIES
            </div>
          </div>

          <div className="border-b border-white/[0.07] px-5 py-8 sm:border-b-0 sm:border-r sm:px-8">
            <div className="font-sans text-5xl font-semibold tracking-[-0.06em] text-white">
              3+
            </div>

            <div className="mt-2 font-mono text-[7px] font-bold tracking-[0.18em] text-white/25">
              FEATURED PROJECTS
            </div>
          </div>

          <div className="px-5 py-8 sm:px-8">
            <div className="font-sans text-5xl font-semibold tracking-[-0.06em] text-cyan-300">
              ∞
            </div>

            <div className="mt-2 font-mono text-[7px] font-bold tracking-[0.18em] text-white/25">
              ROOM TO LEARN
            </div>
          </div>
        </div>

        {/* =======================================================
            TECH STACK
        ======================================================= */}

        <div className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-cyan-400/60" />

                <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-cyan-400/70">
                  TECH STACK
                </span>
              </div>

              <h3 className="font-sans text-[clamp(2.4rem,5vw,5rem)] font-semibold uppercase leading-none tracking-[-0.06em]">
                TOOLS I BUILD
                <span className="text-white/25"> WITH.</span>
              </h3>
            </div>

            <p className="max-w-[270px] font-mono text-[8px] leading-5 tracking-[0.08em] text-white/20">
              TECHNOLOGIES CURRENTLY PART OF MY DEVELOPMENT WORKFLOW.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-white/[0.07] sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative border-b border-r border-white/[0.07] bg-white/[0.01] p-5 transition-all duration-300 hover:bg-cyan-400/[0.035] sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[7px] tracking-[0.16em] text-white/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] text-white/10 transition-colors group-hover:text-cyan-400/60">
                    ↗
                  </span>
                </div>

                <div className="mt-8 font-mono text-[9px] font-bold tracking-[0.14em] text-white/55 transition-colors group-hover:text-cyan-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            FOOT NOTE
        ======================================================= */}

        <div className="mt-16 flex items-center justify-between border-t border-white/[0.06] pt-6">
          <span className="font-mono text-[7px] tracking-[0.18em] text-white/15">
            MUZAMIL HASSAN / SOFTWARE ENGINEERING
          </span>

          <span className="font-mono text-[7px] tracking-[0.18em] text-cyan-400/40">
            02 / 04
          </span>
        </div>
      </div>
    </section>
  );
}