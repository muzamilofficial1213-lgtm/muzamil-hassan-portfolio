"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    setStatus("sending");

    window.location.href =
      `mailto:muzamilofficial1213@gmail.com?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 800);
  }

  return (
    <section
      id="contact"
      className="relative z-30 overflow-hidden border-t border-white/[0.08] bg-[#050708] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-200px] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[150px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* HEADER */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[9px] font-bold tracking-[0.22em] text-cyan-400">
                // CONTACT
              </span>

              <span className="h-px w-16 bg-cyan-400/30" />
            </div>

            <h2 className="font-mono text-[clamp(3.5rem,7vw,6.8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              LET&apos;S BUILD
              <br />
              <span className="text-white/25">SOMETHING.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Have a project, idea, opportunity, or simply want to connect?
              Let&apos;s start a conversation.
            </p>
          </div>

          <div className="flex items-center gap-4 lg:pb-2">
            <span className="font-mono text-5xl font-bold tracking-[-0.06em] text-cyan-400">
              04
            </span>

            <span className="font-mono text-[8px] font-bold leading-4 tracking-[0.16em] text-white/25">
              FINAL
              <br />
              SECTION
            </span>
          </div>
        </div>

        {/* CONTACT GRID */}
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          {/* DIRECT CONTACT */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080b0d]/90 p-6 backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.035] blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/[0.07]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[8px] font-bold tracking-[0.18em] text-white/25">
                  DIRECT CONTACT
                </div>

                <span className="font-mono text-[7px] tracking-[0.15em] text-cyan-400/40">
                  01
                </span>
              </div>

              <div className="mt-8">
                {/* EMAIL */}
                <a
                  href="mailto:muzamilofficial1213@gmail.com"
                  className="group/link block border-b border-white/[0.07] py-6 first:pt-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-400">
                      EMAIL
                    </span>

                    <span className="text-white/15 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 break-all text-sm text-white/55 transition-colors duration-300 group-hover/link:text-cyan-300">
                    muzamilofficial1213@gmail.com
                  </div>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/muzamil-hassan-69ab083b3"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link block border-b border-white/[0.07] py-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-400">
                      LINKEDIN
                    </span>

                    <span className="text-white/15 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-white/55 transition-colors duration-300 group-hover/link:text-cyan-300">
                    /in/muzamil-hassan
                  </div>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/muzamilofficial1213-lgtm"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link block py-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-cyan-400">
                      GITHUB
                    </span>

                    <span className="text-white/15 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-white/55 transition-colors duration-300 group-hover/link:text-cyan-300">
                    /muzamilofficial1213-lgtm
                  </div>
                </a>
              </div>

              {/* AVAILABILITY */}
              <div className="mt-8 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.025] p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />

                    <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.7)]" />
                  </span>

                  <span className="font-mono text-[8px] font-bold tracking-[0.15em] text-emerald-400">
                    AVAILABLE FOR OPPORTUNITIES
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-white/30">
                  Open to collaborations, freelance projects, internships and
                  interesting opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080b0d]/90 p-6 backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.025] blur-[60px]" />

            <div className="relative">
              {/* FORM HEADER */}
              <div className="flex items-end justify-between border-b border-white/[0.07] pb-6">
                <div>
                  <div className="font-mono text-[8px] font-bold tracking-[0.18em] text-white/25">
                    SEND A MESSAGE
                  </div>

                  <h3 className="mt-2 font-mono text-xl font-bold tracking-[-0.03em] text-white">
                    START A CONVERSATION
                  </h3>
                </div>

                <span className="font-mono text-[8px] tracking-[0.15em] text-cyan-400/50">
                  04 / 04
                </span>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* NAME */}
                  <label>
                    <span className="mb-2 block font-mono text-[8px] font-bold tracking-[0.14em] text-white/25">
                      YOUR NAME
                    </span>

                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="h-13 w-full rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 font-mono text-xs text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_30px_rgba(34,211,238,0.035)]"
                    />
                  </label>

                  {/* EMAIL */}
                  <label>
                    <span className="mb-2 block font-mono text-[8px] font-bold tracking-[0.14em] text-white/25">
                      EMAIL
                    </span>

                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="h-13 w-full rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 font-mono text-xs text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_30px_rgba(34,211,238,0.035)]"
                    />
                  </label>
                </div>

                {/* MESSAGE */}
                <label className="mt-5 block">
                  <span className="mb-2 block font-mono text-[8px] font-bold tracking-[0.14em] text-white/25">
                    MESSAGE
                  </span>

                  <textarea
                    name="message"
                    rows={8}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/[0.09] bg-white/[0.02] p-4 font-mono text-xs leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_30px_rgba(34,211,238,0.035)]"
                  />
                </label>

                {/* STATUS */}
                {status === "error" && (
                  <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[0.035] px-4 py-3 font-mono text-[8px] text-red-300">
                    Please complete all fields.
                  </div>
                )}

                {status === "success" && (
                  <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.035] px-4 py-3 font-mono text-[8px] text-emerald-300">
                    Your email client should now be ready.
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-5 flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 font-mono text-[9px] font-bold tracking-[0.14em] text-[#020304] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_15px_45px_rgba(0,200,230,0.16)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "OPENING EMAIL..."
                    : "SEND MESSAGE"}

                  {status !== "sending" && (
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTACT STRIP */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.012] px-6 py-5 text-center sm:flex-row sm:text-left">
          <div>
            <div className="font-mono text-[8px] font-bold tracking-[0.16em] text-white/20">
              MUZAMIL HASSAN
            </div>

            <div className="mt-1 font-mono text-[7px] tracking-[0.14em] text-white/15">
              SOFTWARE ENGINEERING • WEB DEVELOPMENT
            </div>
          </div>

          <a
            href="mailto:muzamilofficial1213@gmail.com"
            className="font-mono text-[8px] font-bold tracking-[0.15em] text-cyan-400 transition-colors hover:text-cyan-300"
          >
            MUZAMILOFFICIAL1213@GMAIL.COM ↗
          </a>
        </div>
      </div>
    </section>
  ); 
}