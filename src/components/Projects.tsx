"use client";

const projects = [
  {
    number: "01",
    title: "SMARTROUTE",
    category: "DELIVERY MANAGEMENT",
    description:
      "A delivery management and route intelligence system designed to organize delivery operations and provide a practical foundation for intelligent route decisions.",
    technologies: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
    github: "https://github.com/muzamilofficial1213-lgtm/SmartRoute",
  },
  {
    number: "02",
    title: "DEVDESK",
    category: "FULL-STACK / REST API",
    description:
      "A full-stack IT support ticket application focused on structured ticket management, validation, and clean RESTful API architecture.",
    technologies: ["NEXT.JS", "TYPESCRIPT", "ZOD"],
    github: "https://github.com/muzamilofficial1213-lgtm/devdesk",
  },
  {
    number: "03",
    title: "PERSONAL EXPENSE MANAGER",
    category: "WEB APPLICATION",
    description:
      "A modern personal finance application with expense tracking, dashboard statistics, calendar views, and responsive interface design.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    github:
      "https://github.com/muzamilofficial1213-lgtm/Personal-Expense-Manager",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-30 border-t border-white/[0.08] bg-[#030506] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[9px] font-bold tracking-[0.22em] text-cyan-400">
                // SELECTED WORK
              </span>

              <span className="h-px w-16 bg-cyan-400/30" />
            </div>

            <h2 className="font-mono text-[clamp(3.5rem,7vw,6.8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              WHAT I&apos;VE
              <br />
              <span className="text-white/25">BUILT.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              A selection of real projects built while developing my skills in
              modern web development, full-stack applications, APIs, and
              interactive digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-4 lg:pb-2">
            <span className="font-mono text-5xl font-bold tracking-[-0.06em] text-cyan-400">
              03
            </span>

            <span className="font-mono text-[8px] font-bold leading-4 tracking-[0.16em] text-white/25">
              FEATURED
              <br />
              PROJECTS
            </span>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#070a0c] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.035] blur-[80px] transition group-hover:bg-cyan-400/[0.08]" />

              {/* Project preview */}
              <div className="relative m-4 overflow-hidden rounded-xl border border-white/[0.07] bg-[#030506]">
                <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

                  <div className="ml-3 h-3 flex-1 rounded bg-white/[0.025]" />
                </div>

                <div className="relative flex h-40 items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,235,0.13),transparent_62%)]" />

                  <div className="relative px-4 text-center">
                    <div className="font-mono text-lg font-bold tracking-[-0.04em] text-white/80">
                      {project.title}
                    </div>

                    <div className="mt-2 font-mono text-[7px] tracking-[0.2em] text-cyan-400/55">
                      MUZAMIL / PROJECT {project.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-400">
                    {project.number}
                  </span>

                  <span className="font-mono text-[7px] font-bold tracking-[0.13em] text-white/25">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-5 font-mono text-xl font-bold tracking-[-0.04em] text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/35">
                  {project.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] px-2.5 py-1.5 font-mono text-[7px] font-bold tracking-[0.08em] text-white/35"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex h-11 items-center justify-between rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 font-mono text-[8px] font-bold tracking-[0.13em] text-white/50 transition-all hover:border-cyan-400/35 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
                  >
                    VIEW PROJECT
                    <span className="text-base">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GITHUB STRIP */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] px-6 py-5 text-center sm:flex-row sm:text-left">
          <div>
            <div className="font-mono text-[8px] font-bold tracking-[0.16em] text-white/25">
              MORE PROJECTS
            </div>

            <div className="mt-1 text-xs text-white/35">
              More experiments and repositories are available on GitHub.
            </div>
          </div>

          <a
            href="https://github.com/muzamilofficial1213-lgtm"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/20 px-5 py-3 font-mono text-[8px] font-bold tracking-[0.13em] text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.04]"
          >
            OPEN GITHUB ↗
          </a>
        </div>
      </div>
    </section>
  );
}