import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const footerNavigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  {
    label: "GITHUB",
    short: "GH",
    href: "https://github.com/muzamilofficial1213-lgtm",
  },
  {
    label: "LINKEDIN",
    short: "IN",
    href: "https://www.linkedin.com/in/muzamil-hassan-69ab083b3",
  },
  {
    label: "EMAIL",
    short: "@",
    href: "mailto:muzamilofficial1213@gmail.com",
  },
];

export default function Home() {
  return (
    <main className="home-page relative min-h-screen overflow-x-hidden overflow-y-visible bg-[#020304] text-white">
      {/* FIXED CINEMATIC NAVBAR */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[1000]">
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative z-30 min-h-screen">
        <Hero />
      </section>

      {/* ABOUT */}
      <About />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#020304] text-white">
        {/* FOOTER ATMOSPHERE */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[18%] top-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.025] blur-[140px]" />

          <div className="absolute right-[-10%] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.02] blur-[140px]" />

          <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-16">
          {/* TOP FOOTER GRID */}
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-cyan-300/25 bg-cyan-400/[0.035] font-sans text-sm font-semibold tracking-[-0.05em] text-cyan-300">
                  M
                </span>

                <div>
                  <div className="font-sans text-[13px] font-semibold tracking-[-0.02em] text-white/80">
                    MUZAMIL.HASSAN
                  </div>

                  <div className="mt-1 font-mono text-[6px] font-bold tracking-[0.2em] text-white/20">
                    SOFTWARE ENGINEERING • WEB DEVELOPMENT
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-[430px] text-[11px] leading-6 text-white/30 sm:text-[12px] sm:leading-7">
                Building modern digital experiences with clean engineering,
                thoughtful interfaces and a continuous focus on learning.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />

                  <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                </span>

                <span className="font-mono text-[7px] font-bold tracking-[0.18em] text-cyan-300/45">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/20">
                NAVIGATION
              </p>

              <nav
                aria-label="Footer navigation"
                className="mt-5 flex flex-col items-start gap-3"
              >
                {footerNavigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 font-mono text-[8px] font-bold tracking-[0.15em] text-white/35 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />

                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* SOCIALS */}
            <div>
              <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/20">
                CONNECT
              </p>

              <div className="mt-5 flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between border border-white/[0.07] bg-white/[0.015] px-3 py-2.5 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-400/[0.035]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] font-bold text-cyan-300/45 transition-colors group-hover:text-cyan-300">
                        {social.short}
                      </span>

                      <span className="font-mono text-[7px] font-bold tracking-[0.14em] text-white/30 transition-colors group-hover:text-white/60">
                        {social.label}
                      </span>
                    </div>

                    <span className="text-xs text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300/70">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LARGE BRAND MARK */}
          <div className="relative mt-16 overflow-hidden border-t border-white/[0.06] pt-8 sm:mt-20 sm:pt-10">
            <div className="pointer-events-none absolute right-0 top-[-100px] hidden font-sans text-[16vw] font-bold uppercase leading-none tracking-[-0.1em] text-white/[0.018] lg:block">
              MH
            </div>

            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em] text-white/[0.08]">
                  BUILD.
                  <br />
                  LEARN.
                  <br />
                  CREATE.
                </p>
              </div>

              <a
                href="#home"
                className="group inline-flex h-11 w-fit items-center gap-4 border border-white/[0.09] bg-white/[0.02] px-4 font-mono text-[8px] font-bold tracking-[0.15em] text-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-400/[0.035] hover:text-cyan-300"
              >
                BACK TO TOP

                <span className="text-sm text-cyan-300/50 transition-transform duration-300 group-hover:-translate-y-1">
                  ↑
                </span>
              </a>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[7px] tracking-[0.14em] text-white/15">
              © 2026 MUZAMIL HASSAN. ALL RIGHTS RESERVED.
            </p>

            <div className="flex items-center gap-4">
              <span className="font-mono text-[7px] tracking-[0.14em] text-white/15">
                PAKISTAN
              </span>

              <span className="h-px w-5 bg-cyan-400/25" />

              <span className="font-mono text-[7px] font-bold tracking-[0.16em] text-cyan-300/35">
                01 / 04
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}