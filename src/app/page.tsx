import Experience from "@/components/3d/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
      >
        {/* 3D SCENE */}
        <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[68%]">
          <Experience />
        </div>

        {/* LEFT BACKGROUND */}
        <div className="absolute inset-y-0 left-0 z-10 hidden w-[34%] bg-[#050505] lg:block" />

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <nav className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
          <a
            href="#home"
            className="font-mono text-sm tracking-[0.18em] text-cyan-100"
          >
            MUZAMIL<span className="text-cyan-400">.</span>HASSAN
          </a>

          <div className="hidden items-center gap-8 font-mono text-xs text-white/60 md:flex">
            <a
              href="#home"
              className="transition-colors hover:text-cyan-300"
            >
              HOME
            </a>

            <a
              href="#work"
              className="transition-colors hover:text-cyan-300"
            >
              WORK
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-cyan-300"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-cyan-300"
            >
              CONTACT
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 font-mono text-xs text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            LET&apos;S TALK
          </a>
        </nav>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div className="relative z-30 flex min-h-screen items-center px-6 pt-20 md:px-12 lg:w-[34%] lg:px-10">
          <div className="w-full max-w-[420px]">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1 className="font-mono text-[clamp(2.7rem,5vw,4.8rem)] font-bold leading-[0.9] tracking-[-0.05em]">
              SOFTWARE
              <br />
              <span className="text-cyan-100">ENGINEER</span>
            </h1>

            <div className="mt-4 font-mono text-xl font-bold tracking-[-0.03em] text-white/30 md:text-2xl">
              BUILDING THE WEB.
            </div>

            <p className="mt-7 max-w-[390px] text-sm leading-6 text-white/55">
              Software Engineering student focused on building modern,
              high-performance digital products with React, Next.js,
              TypeScript and 3D web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-cyan-400 px-6 py-3 font-mono text-xs font-bold text-black transition hover:bg-cyan-300"
              >
                VIEW MY WORK
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs text-white/80 transition hover:border-cyan-400/40 hover:text-white"
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>

        {/* STATUS */}
        <div className="absolute bottom-8 right-8 z-40 hidden font-mono text-[10px] text-white/30 md:block">
          <div>PORTFOLIO.OS</div>
          <div className="mt-1">BUILD_2026</div>
        </div>

        {/* SCROLL */}
        <a
          href="#work"
          className="absolute bottom-8 left-[52%] z-40 hidden -translate-x-1/2 font-mono text-[10px] tracking-[0.25em] text-white/30 transition hover:text-cyan-300 lg:block"
        >
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <Projects />

      {/* =====================================================
          ABOUT + SKILLS
      ===================================================== */}
      <About />

      {/* =====================================================
          CONTACT PLACEHOLDER
          Real contact section next.
      ===================================================== */}
      <section
        id="contact"
        className="min-h-[40vh] border-t border-white/5 bg-[#050607] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400">
            // CONTACT
          </div>

          <h2 className="mt-4 font-mono text-4xl font-bold md:text-6xl">
            LET&apos;S BUILD.
          </h2>

          <a
            href="mailto:muzamilofficial1213@gmail.com"
            className="mt-8 inline-block font-mono text-sm text-white/50 transition hover:text-cyan-300"
          >
            muzamilofficial1213@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}