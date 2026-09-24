"use client";

import { useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  featured?: boolean;
  status: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "SMARTROUTE",
    category: "DELIVERY MANAGEMENT",
    description:
      "A delivery management and route intelligence system designed to organize delivery operations, manage routes and provide a structured workflow for modern logistics.",
    technologies: ["TypeScript", "Next.js", "Supabase"],
    github:
      "https://github.com/muzamilofficial1213-lgtm/SmartRoute",
    featured: true,
    status: "ACTIVE PROJECT",
  },
  {
    number: "02",
    title: "DEVDESK",
    category: "FULL-STACK API",
    description:
      "A full-stack IT support ticket system built around structured RESTful API routes, validation and modern Next.js architecture.",
    technologies: ["Next.js", "TypeScript", "Zod", "REST API"],
    github:
      "https://github.com/muzamilofficial1213-lgtm/devdesk",
    status: "COMPLETED",
  },
  {
    number: "03",
    title: "PERSONAL EXPENSE MANAGER",
    category: "FINTECH WEB APP",
    description:
      "A modern expense management experience with authentication, dashboard analytics, calendar views, settings, exports and responsive dark/light interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github:
      "https://github.com/muzamilofficial1213-lgtm/Personal-Expense-Manager",
    status: "COMPLETED",
  },
];

const filters = ["ALL", "FULL-STACK", "WEB APP", "SYSTEM"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;

    if (activeFilter === "FULL-STACK") {
      return project.title === "DEVDESK";
    }

    if (activeFilter === "WEB APP") {
      return project.title === "PERSONAL EXPENSE MANAGER";
    }

    if (activeFilter === "SYSTEM") {
      return project.title === "SMARTROUTE";
    }

    return true;
  });

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030506] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.025] blur-[130px]" />

        <div className="absolute right-[8%] bottom-[12%] h-[460px] w-[460px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.015] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:90px_90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.35)]" />

              <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-cyan-300/70">
                03 / SELECTED WORK
              </span>
            </div>

            <h2 className="font-sans text-[clamp(3rem,7vw,6.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]">
              <span className="block text-white">SELECTED</span>

              <span className="block bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                PROJECTS.
              </span>
            </h2>
          </div>

          <div className="max-w-[500px] lg:pb-2">
            <p className="text-[13px] leading-7 text-white/40 sm:text-[14px] sm:leading-7">
              A collection of systems and digital products I&apos;ve built
              while developing my skills across modern web technologies,
              full-stack architecture and interactive experiences.
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-white/[0.07] pb-5 sm:mt-14">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`group relative border px-3 py-2 font-mono text-[7px] font-bold tracking-[0.16em] transition-all duration-300 sm:px-4 sm:text-[8px] ${
                  active
                    ? "border-cyan-300/35 bg-cyan-400/[0.07] text-cyan-300"
                    : "border-white/[0.08] bg-white/[0.015] text-white/30 hover:border-white/[0.16] hover:bg-white/[0.03] hover:text-white/60"
                }`}
              >
                {filter}

                {active && (
                  <span className="absolute inset-x-0 bottom-0 h-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* PROJECT LIST */}
        <div className="mt-6 space-y-4">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden border transition-all duration-500 ${
                project.featured
                  ? "border-cyan-300/[0.14] bg-[#050a0c]"
                  : "border-white/[0.08] bg-[#05090b]/75"
              } hover:-translate-y-1 hover:border-cyan-300/[0.22] hover:shadow-[0_30px_90px_rgba(0,0,0,0.32)]`}
            >
              {/* PROJECT GLOW */}
              <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-cyan-400/[0.045] blur-[90px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* GRID DETAIL */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:45px_45px]" />

              <div className="relative z-10 grid lg:grid-cols-[90px_1fr_280px]">
                {/* NUMBER */}
                <div className="hidden border-r border-white/[0.06] p-6 lg:block">
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-cyan-300/50">
                    {project.number}
                  </span>
                </div>

                {/* MAIN CONTENT */}
                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="flex items-center justify-between gap-4 lg:hidden">
                    <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-300/50">
                      {project.number}
                    </span>

                    <span className="font-mono text-[7px] font-bold tracking-[0.14em] text-white/20">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-7 lg:mt-0">
                    <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-cyan-300/55 sm:text-[8px]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 font-sans text-[clamp(1.8rem,3.5vw,3.2rem)] font-semibold uppercase leading-none tracking-[-0.055em] text-white transition-colors duration-300 group-hover:text-cyan-50">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-[700px] text-[11px] leading-6 text-white/35 sm:text-[12px] sm:leading-7">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[6px] font-bold tracking-[0.1em] text-white/35 transition-colors duration-300 group-hover:border-white/[0.11] group-hover:text-white/45 sm:text-[7px]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PROJECT ACTION */}
                <div className="flex flex-col justify-between border-t border-white/[0.06] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                  <div className="hidden justify-between lg:flex">
                    <span className="font-mono text-[7px] font-bold tracking-[0.14em] text-white/20">
                      STATUS
                    </span>

                    <span className="font-mono text-[7px] font-bold tracking-[0.14em] text-cyan-300/45">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-5 lg:mt-auto">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-7 bg-white/[0.1] transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-400/50" />

                      <span className="font-mono text-[7px] font-bold tracking-[0.16em] text-white/20">
                        SOURCE CODE
                      </span>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="group/link flex h-11 items-center justify-between border border-white/[0.1] bg-white/[0.02] px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-white/55 transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                    >
                      <span>VIEW ON GITHUB</span>

                      <span className="text-sm text-cyan-300/50 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-cyan-300">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* BOTTOM ACCENT */}
              <div
                className={`absolute inset-x-0 bottom-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transition-transform duration-700 group-hover:translate-x-0 ${
                  project.featured ? "opacity-100" : "opacity-70"
                }`}
              />
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="mt-6 border border-white/[0.08] bg-white/[0.015] px-6 py-16 text-center">
            <p className="font-mono text-[8px] font-bold tracking-[0.18em] text-white/25">
              NO PROJECTS IN THIS CATEGORY
            </p>
          </div>
        )}

        {/* FOOTER CTA */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.07] pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/20">
              MORE ON GITHUB
            </p>

            <p className="mt-2 text-[11px] text-white/35">
              Explore the source, experiments and ongoing work.
            </p>
          </div>

          <a
            href="https://github.com/muzamilofficial1213-lgtm"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-11 items-center gap-5 border border-cyan-300/25 bg-cyan-400/[0.035] px-5 font-mono text-[8px] font-bold tracking-[0.15em] text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/[0.07]"
          >
            EXPLORE GITHUB

            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* PROJECT COUNT */}
        <div className="mt-16 flex items-center justify-between border-t border-white/[0.05] pt-5">
          <span className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/15">
            PROJECT ARCHIVE
          </span>

          <span className="font-mono text-[8px] font-bold tracking-[0.16em]">
            <span className="text-cyan-400">0{projects.length}</span>
            <span className="mx-1 text-white/10">/</span>
            <span className="text-white/20">PROJECTS</span>
          </span>

          <span className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/15">
            MUZAMIL.HASSAN
          </span>
        </div>

        {/* Prevent unused index warning in future rendering changes */}
        {indexPlaceholder(indexPlaceholderValue())}
      </div>
    </section>
  );
}

function indexPlaceholder(value: number) {
  return value < 0 ? null : null;
}

function indexPlaceholderValue() {
  return -1;
}