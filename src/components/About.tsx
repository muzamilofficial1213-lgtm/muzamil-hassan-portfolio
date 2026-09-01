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

export default function About() {
  return (
    <section
      id="about"
      className="relative z-30 border-t border-white/5 bg-[#050607] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* ABOUT */}
        <div>
          <div className="mb-4 font-mono text-xs tracking-[0.25em] text-cyan-400">
            // ABOUT ME
          </div>

          <h2 className="font-mono text-4xl font-bold md:text-6xl">
            WHO I AM
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/50">
            I&apos;m Muzamil Hassan, a Software Engineering student focused on
            turning ideas into practical digital products.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
            My current focus is modern web development, full-stack
            applications, APIs, and interactive web experiences. I enjoy
            learning by building real projects and continuously improving
            my engineering skills.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <div className="font-mono text-2xl font-bold text-cyan-300">
                10+
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-wider text-white/40">
                TECHNOLOGIES
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <div className="font-mono text-2xl font-bold text-cyan-300">
                3+
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-wider text-white/40">
                FEATURED PROJECTS
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <div className="mb-4 font-mono text-xs tracking-[0.25em] text-cyan-400">
            // TECH STACK
          </div>

          <h3 className="font-mono text-2xl font-bold text-white md:text-3xl">
            TOOLS I BUILD WITH
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="font-mono text-[10px] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mt-5 font-mono text-sm font-bold text-white/75 transition group-hover:text-cyan-200">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}