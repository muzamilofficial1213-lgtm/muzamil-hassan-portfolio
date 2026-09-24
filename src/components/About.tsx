"use client";

const technologies = [
  "C++",
  "OOP",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Three.js",
];

const principles = [
  {
    number: "01",
    title: "BUILD WITH PURPOSE",
    description:
      "Every interface should solve a real problem, communicate clearly and create a useful experience.",
  },
  {
    number: "02",
    title: "ENGINEER FOR SCALE",
    description:
      "I focus on clean structure, reusable components and maintainable systems instead of short-term solutions.",
  },
  {
    number: "03",
    title: "KEEP LEARNING",
    description:
      "Software evolves constantly, so I continuously explore modern technologies and improve my engineering skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#020304] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[18%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />

        <div className="absolute right-[-12%] bottom-[8%] h-[520px] w-[520px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030506] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12">
        {/* SECTION HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.35)]" />

              <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-cyan-300/70">
                02 / ABOUT
              </span>
            </div>

            <h2 className="font-sans text-[clamp(3rem,7vw,6.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]">
              <span className="block text-white">BEYOND</span>

              <span className="block bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                THE CODE.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="font-mono text-[9px] font-bold tracking-[0.18em] text-cyan-300/55">
              SOFTWARE ENGINEERING • WEB DEVELOPMENT
            </p>

            <p className="mt-5 text-[14px] leading-7 text-white/45 sm:text-[15px] sm:leading-8">
              I&apos;m Muzamil Hassan — a Software Engineering student and web
              developer focused on turning ideas into modern, useful and
              well-engineered digital experiences.
            </p>
          </div>
        </div>

        {/* MAIN 2.5D AREA */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* IDENTITY CARD */}
          <div className="group relative min-h-[430px] overflow-hidden border border-white/[0.09] bg-[#05090b]/80 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 lg:min-h-[500px] lg:p-10">
            {/* Layered depth */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/[0.06]" />

            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-cyan-300/[0.07]" />

            <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            {/* Vertical technical line */}
            <div className="absolute bottom-0 right-10 top-0 w-px bg-gradient-to-b from-transparent via-cyan-300/[0.08] to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
                    PROFILE / 001
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[7px] font-bold tracking-[0.15em] text-cyan-300/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                    ACTIVE
                  </span>
                </div>

                <div className="mt-14">
                  <p className="font-mono text-[8px] font-bold tracking-[0.2em] text-cyan-300/55">
                    MUZAMIL HASSAN
                  </p>

                  <h3 className="mt-4 max-w-[460px] font-sans text-[clamp(2rem,4vw,3.4rem)] font-semibold uppercase leading-[0.95] tracking-[-0.055em]">
                    Building skills.
                    <br />
                    <span className="text-white/35">Building systems.</span>
                  </h3>

                  <p className="mt-7 max-w-[500px] text-[12px] leading-6 text-white/38 sm:text-[13px] sm:leading-7">
                    My journey combines academic foundations in Software
                    Engineering with practical web development experience. I
                    enjoy understanding how systems work, building interfaces
                    that feel intentional and exploring the engineering behind
                    reliable digital products.
                  </p>
                </div>
              </div>

              {/* EDUCATION STRIP */}
              <div className="mt-12 border-t border-white/[0.07] pt-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/25">
                      CURRENT EDUCATION
                    </p>

                    <p className="mt-2 text-[12px] font-medium text-white/65">
                      BS Software Engineering
                    </p>

                    <p className="mt-1 text-[10px] text-white/30">
                      Pak-Austria Fachhochschule • PAF-IAST
                    </p>
                  </div>

                  <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-300/50">
                    2025 — PRESENT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE + TECHNOLOGY STACK */}
          <div className="grid gap-5">
            {/* EXPERIENCE */}
            <div className="group relative overflow-hidden border border-white/[0.09] bg-[#05090b]/75 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-400/[0.035] blur-[55px]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
                    EXPERIENCE / 002
                  </span>

                  <span className="font-mono text-[7px] font-bold tracking-[0.15em] text-cyan-300/45">
                    240 HOURS
                  </span>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="font-mono text-[8px] font-bold tracking-[0.18em] text-cyan-300/60">
                      ADVANCED WEB DEVELOPMENT
                    </p>

                    <h3 className="mt-3 font-sans text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
                      TECHNIK NEST
                    </h3>

                    <p className="mt-2 max-w-[560px] text-[11px] leading-6 text-white/35 sm:text-[12px]">
                      Practical experience across modern JavaScript,
                      TypeScript, React, Next.js and API development, with a
                      focus on architecture, reusable systems and real-world
                      web development workflows.
                    </p>
                  </div>

                  <div className="border border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:min-w-[125px]">
                    <p className="font-mono text-[7px] font-bold tracking-[0.16em] text-white/25">
                      COMPLETED
                    </p>

                    <p className="mt-2 text-[10px] text-white/55">
                      Advanced Web
                      <br />
                      Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="relative overflow-hidden border border-white/[0.09] bg-[#05090b]/75 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
              <div className="absolute bottom-[-80px] right-[-60px] h-52 w-52 rounded-full bg-blue-500/[0.035] blur-[70px]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
                    TECHNOLOGIES / 003
                  </span>

                  <span className="font-mono text-[7px] font-bold tracking-[0.15em] text-white/20">
                    09 ACTIVE
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((technology, index) => (
                    <div
                      key={technology}
                      className="group/tech relative overflow-hidden border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-400/[0.04]"
                    >
                      <span className="mr-2 font-mono text-[6px] text-cyan-400/30 transition-colors group-hover/tech:text-cyan-300/65">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/45 transition-colors group-hover/tech:text-cyan-300">
                        {technology}
                      </span>

                      <span className="absolute inset-x-0 bottom-0 h-px -translate-x-full bg-cyan-400/45 transition-transform duration-500 group-hover/tech:translate-x-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-20 border-t border-white/[0.07] pt-8 sm:mt-24 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-cyan-400/60" />

                <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
                  HOW I WORK
                </span>
              </div>

              <h3 className="mt-5 max-w-[320px] font-sans text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] text-white/80 sm:text-3xl">
                Engineering with intention.
              </h3>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="group relative bg-[#05090b] p-6 transition-colors duration-300 hover:bg-[#071014] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-300/45">
                      {principle.number}
                    </span>

                    <span className="h-px w-7 bg-white/[0.08] transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-400/40" />
                  </div>

                  <h4 className="mt-10 font-mono text-[9px] font-bold tracking-[0.15em] text-white/65">
                    {principle.title}
                  </h4>

                  <p className="mt-4 text-[10px] leading-5 text-white/30 sm:text-[11px] sm:leading-6">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="relative mt-16 overflow-hidden border border-cyan-300/[0.1] bg-cyan-400/[0.018] px-6 py-7 sm:mt-20 sm:px-8 sm:py-9 lg:px-10">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300/70 via-cyan-400/30 to-transparent" />

          <div className="absolute right-8 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-cyan-300/[0.06] sm:block" />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-cyan-300/55">
                NEXT CHAPTER
              </p>

              <p className="mt-3 max-w-[680px] font-sans text-[18px] font-medium leading-7 tracking-[-0.02em] text-white/70 sm:text-[21px]">
                Learning, building and turning ideas into real digital
                products.
              </p>
            </div>

            <a
              href="#work"
              className="group inline-flex h-11 shrink-0 items-center gap-4 border border-cyan-300/25 bg-cyan-400/[0.035] px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/[0.07] sm:px-5"
            >
              EXPLORE MY WORK

              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}