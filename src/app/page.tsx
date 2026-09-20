import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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
      <footer className="border-t border-white/[0.08] bg-[#020304] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-5 text-center">
          <div className="font-mono text-[9px] font-bold tracking-[0.18em] text-white/30">
            MUZAMIL HASSAN
          </div>

          <div className="h-px w-16 bg-cyan-400/30" />

          <div className="font-mono text-[8px] tracking-[0.16em] text-white/20">
            SOFTWARE ENGINEERING • WEB DEVELOPMENT
          </div>

          <a
            href="#home"
            className="mt-2 font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-400 transition-colors hover:text-cyan-300"
          >
            BACK TO TOP ↑
          </a>

          <div className="mt-2 font-mono text-[7px] tracking-[0.12em] text-white/15">
            © 2026 ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </main>
  );
}