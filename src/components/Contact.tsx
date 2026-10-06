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

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data: {
        success?: boolean;
        message?: string;
      } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your message right now.",
        );
      }

      setForm(initialForm);
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSendAnother() {
    setSubmitted(false);
    setErrorMessage("");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/8 bg-[#050608] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-14rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[11px] font-medium tracking-[0.28em] text-cyan-300/90">
              CONTACT
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            LET&apos;S BUILD
            <span className="block text-white/35">SOMETHING GREAT.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Have a project, opportunity, or idea in mind? Send me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact information */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-white/35">
                GET IN TOUCH
              </p>

              <div className="mt-7 space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block border-b border-white/8 pb-4 transition-colors duration-300 hover:border-cyan-400/35"
                  >
                    <span className="block text-[10px] tracking-[0.2em] text-white/30">
                      {link.label}
                    </span>

                    <span className="mt-2 block break-all text-sm text-white/70 transition-colors duration-300 group-hover:text-cyan-300 sm:text-base">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 hidden lg:block">
              <p className="text-[10px] tracking-[0.2em] text-white/25">
                AVAILABLE FOR
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                Freelance projects, collaborations, software engineering
                opportunities, and interesting digital products.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8">
            {submitted ? (
              <div className="flex min-h-[510px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/8">
                  <svg
                    aria-hidden="true"
                    className="h-7 w-7 text-cyan-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5 12 4 4L19 6"
                    />
                  </svg>
                </div>

                <p className="mt-7 text-[10px] font-medium tracking-[0.25em] text-cyan-300">
                  MESSAGE SENT
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  Thanks for reaching out.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                  Your message has been delivered successfully. I&apos;ll
                  review it and get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="mt-8 border border-white/12 bg-white/[0.03] px-6 py-3 text-[10px] font-medium tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] font-medium tracking-[0.18em] text-white/35"
                    >
                      NAME
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      className="h-12 w-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-medium tracking-[0.18em] text-white/35"
                    >
                      EMAIL
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                      className="h-12 w-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[10px] font-medium tracking-[0.18em] text-white/35"
                  >
                    SUBJECT
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project / Opportunity"
                    disabled={isSubmitting}
                    className="h-12 w-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-medium tracking-[0.18em] text-white/35"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your project or idea..."
                    disabled={isSubmitting}
                    className="w-full resize-none border border-white/10 bg-white/[0.025] px-4 py-4 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="border border-red-400/15 bg-red-400/5 px-4 py-3 text-xs leading-5 text-red-300/90"
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-13 w-full items-center justify-center gap-3 bg-cyan-300 px-6 text-[10px] font-semibold tracking-[0.2em] text-[#041014] transition-all duration-300 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#041014]/25 border-t-[#041014]"
                      />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <span
                        aria-hidden="true"
                        className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] leading-5 text-white/25">
                  Your information is only used to respond to your message.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}