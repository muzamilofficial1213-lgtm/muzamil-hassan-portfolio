const projects = [
  {
    number: "01",
    title: "SmartRoute",
    type: "DELIVERY MANAGEMENT SYSTEM",
    description:
      "Delivery management and route intelligence platform built with Next.js and TypeScript.",
    tech: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
    github: "https://github.com/muzamilofficial1213-lgtm/SmartRoute",
  },
  {
    number: "02",
    title: "DevDesk",
    type: "IT SUPPORT PLATFORM",
    description:
      "Full-stack IT support ticket API with validation, RESTful API routes and modern TypeScript architecture.",
    tech: ["NEXT.JS", "TYPESCRIPT", "ZOD", "REST API"],
    github: "https://github.com/muzamilofficial1213-lgtm/devdesk",
  },
  {
    number: "03",
    title: "Personal Expense Manager",
    type: "WEB APPLICATION",
    description:
      "Modern personal expense tracker for recording, categorizing and managing daily expenses.",
    tech: ["JAVASCRIPT", "HTML", "CSS"],
    github:
      "https://github.com/muzamilofficial1213-lgtm/Personal-Expense-Manager",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-30 min-h-screen bg-[#07090a] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16">
          <div className="mb-4 font-mono text-xs tracking-[0.25em] text-cyan-400">
            // SELECTED WORK
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-mono text-4xl font-bold tracking-tight text-white md:text-6xl">
              PROJECTS
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Real applications and systems built while developing my
              software engineering and full-stack development skills.
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              {/* NUMBER */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400">
                  {project.number}
                </span>

                <span className="font-mono text-[10px] text-emerald-400">
                  ● LIVE CODE
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-12 font-mono text-2xl font-bold text-white">
                {project.title}
              </h3>

              <div className="mt-2 font-mono text-[10px] tracking-[0.18em] text-cyan-300/60">
                {project.type}
              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 min-h-[72px] text-sm leading-6 text-white/45">
                {project.description}
              </p>

              {/* TECH */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[9px] text-white/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GITHUB */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-cyan-300 transition group-hover:text-cyan-200"
              >
                VIEW ON GITHUB
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* ACCENT */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}