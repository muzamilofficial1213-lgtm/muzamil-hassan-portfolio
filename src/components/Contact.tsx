"use client";

import { FormEvent, useState } from "react";

const contactLinks = [
  {
    label: "EMAIL",
    value: "muzamilofficial1213@gmail.com",
    href: "mailto:muzamilofficial1213@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "Muzamil Hassan",
    href: "https://www.linkedin.com/in/muzamil-hassan-69ab083b3",
  },
  {
    label: "GITHUB",
    value: "muzamilofficial1213-lgtm",
    href: "https://github.com/muzamilofficial1213-lgtm",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#020304] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-[480px] w-[480px] rounded-full bg-cyan-400/[0.035] blur-[140px]" />

        <div className="absolute right-[-8%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.015] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030506] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.35)]" />

              <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-cyan-300/70">
                04 / CONTACT
              </span>
            </div>

            <h2 className="font-sans text-[clamp(3rem,7vw,7rem)] font-semibold uppercase leading-[0.84] tracking-[-0.075em]">
              <span className="block text-white">LET&apos;S BUILD</span>

              <span className="block bg-gradient-to-r from-white via-white to-white/25 bg-clip-text text-transparent">
                SOMETHING.
              </span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[13px] leading-7 text-white/40 lg:justify-self-end lg:pb-2 sm:text-[14px]">
            Have an idea, project or opportunity? Send me a message and
            let&apos;s start a conversation about what we can build together.
          </p>
        </div>

        {/* MAIN CONTACT GRID */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr]">
          {/* CONTACT INFORMATION */}
          <div className="relative overflow-hidden border border-white/[0.09] bg-[#05090b]/80 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 lg:p-9">
            <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full border border-cyan-300/[0.06]" />

            <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full border border-cyan-300/[0.07]" />

            <div className="absolute right-12 top-12 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
                  CONNECTION / 001
                </span>

                <span className="flex items-center gap-2 font-mono text-[7px] font-bold tracking-[0.15em] text-cyan-300/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  AVAILABLE
                </span>
              </div>

              <div className="mt-14">
                <p className="font-mono text-[8px] font-bold tracking-[0.18em] text-cyan-300/55">
                  START A CONVERSATION
                </p>

                <h3 className="mt-4 max-w-[430px] font-sans text-[clamp(2rem,4vw,3.3rem)] font-semibold uppercase leading-[0.92] tracking-[-0.06em]">
                  Let&apos;s turn an idea into something real.
                </h3>

                <p className="mt-6 max-w-[450px] text-[11px] leading-6 text-white/35 sm:text-[12px] sm:leading-7">
                  Whether you&apos;re looking for a web developer, have a
                  product idea or simply want to connect, you can reach me
                  through any of the channels below.
                </p>
              </div>

              <div className="mt-12 border-t border-white/[0.07]">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className={`group flex items-center justify-between gap-4 py-5 transition-all duration-300 hover:pl-2 ${
                      index < contactLinks.length - 1
                        ? "border-b border-white/[0.06]"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/20 transition-colors duration-300 group-hover:text-cyan-300/50">
                        {link.label}
                      </p>

                      <p className="mt-2 break-all text-[10px] text-white/45 transition-colors duration-300 group-hover:text-white/75 sm:text-[11px]">
                        {link.value}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm text-cyan-300/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto hidden pt-12 sm:block">
                <div className="flex items-end justify-between border-t border-white/[0.06] pt-5">
                  <div>
                    <p className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/20">
                      RESPONSE
                    </p>

                    <p className="mt-2 text-[10px] text-white/35">
                      Open to meaningful opportunities.
                    </p>
                  </div>

                  <span className="font-mono text-[7px] font-bold tracking-[0.16em] text-cyan-300/45">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="relative overflow-hidden border border-white/[0.09] bg-[#05090b]/80 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 lg:p-9">
            <div className="absolute right-0 top-0 h-40 w-40 bg-cyan-400/[0.035] blur-[70px]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/25">
                  MESSAGE / 002
                </span>

                <span className="font-mono text-[7px] font-bold tracking-[0.15em] text-white/20">
                  SECURE CHANNEL
                </span>
              </div>

              {submitted ? (
                <div className="flex min-h-[510px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center border border-cyan-300/25 bg-cyan-400/[0.05]">
                    <span className="text-xl text-cyan-300">✓</span>
                  </div>

                  <p className="mt-7 font-mono text-[8px] font-bold tracking-[0.2em] text-cyan-300/65">
                    MESSAGE READY
                  </p>

                  <h3 className="mt-4 font-sans text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                    Thanks for reaching out.
                  </h3>

                  <p className="mt-4 max-w-[420px] text-[11px] leading-6 text-white/35">
                    The contact interface is ready for backend email delivery.
                    You can connect your preferred email service when the
                    production backend is added.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-white/[0.1] bg-white/[0.02] px-5 py-3 font-mono text-[8px] font-bold tracking-[0.15em] text-white/45 transition-all duration-300 hover:border-cyan-300/30 hover:text-cyan-300"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/25"
                      >
                        YOUR NAME
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="John Doe"
                        className="mt-3 h-12 w-full border border-white/[0.09] bg-white/[0.02] px-4 text-[11px] text-white/75 outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-300/35 focus:bg-cyan-400/[0.025]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/25"
                      >
                        EMAIL ADDRESS
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-3 h-12 w-full border border-white/[0.09] bg-white/[0.02] px-4 text-[11px] text-white/75 outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-300/35 focus:bg-cyan-400/[0.025]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/25"
                    >
                      SUBJECT
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Project / Opportunity"
                      className="mt-3 h-12 w-full border border-white/[0.09] bg-white/[0.02] px-4 text-[11px] text-white/75 outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-300/35 focus:bg-cyan-400/[0.025]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="message"
                        className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/25"
                      >
                        MESSAGE
                      </label>

                      <span className="font-mono text-[6px] tracking-[0.14em] text-white/15">
                        REQUIRED
                      </span>
                    </div>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me a little about your project or idea..."
                      className="mt-3 w-full resize-none border border-white/[0.09] bg-white/[0.02] px-4 py-4 text-[11px] leading-6 text-white/75 outline-none transition-all duration-300 placeholder:text-white/15 focus:border-cyan-300/35 focus:bg-cyan-400/[0.025]"
                    />
                  </div>

                  <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[320px] text-[9px] leading-5 text-white/20">
                      Your message will be handled through the portfolio
                      contact channel.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex h-12 shrink-0 items-center justify-between gap-8 border border-cyan-300 bg-cyan-400 px-5 font-mono text-[8px] font-bold tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                    >
                      SEND MESSAGE

                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FINAL CONTACT STATEMENT */}
        <div className="mt-16 border-t border-white/[0.06] pt-6 sm:mt-20 sm:pt-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[7px] font-bold tracking-[0.18em] text-white/15">
              MUZAMIL.HASSAN / DIGITAL BUILDER
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400/30" />

              <span className="font-mono text-[7px] font-bold tracking-[0.18em] text-cyan-300/40">
                LET&apos;S CONNECT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}