"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const contactEmail =
  process.env.NEXT_PUBLIC_DAK_CONTACT_EMAIL ||
  "hello@dakcorporation.com";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      reason: String(formData.get("reason") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message."
      );
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="absolute right-[-180px] top-[30%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />

        <div className="absolute left-[-180px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />

            Contact DAK Corporation
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Let's build
            <br />
            something
            <br />

            <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              intelligent.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
            Whether you are interested in our products, partnerships,
            opportunities, or simply want to connect, we'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left information */}
            <div className="space-y-5">
              <ContactCard
                icon="✉️"
                title="Email"
                description="For general enquiries and business conversations."
                value={contactEmail}
              />

              <ContactCard
                icon="🤝"
                title="Partnerships"
                description="Interested in working with DAK Corporation?"
                value="Let's talk about it."
              />

              <ContactCard
                icon="🚀"
                title="Products"
                description="Want to learn more about BizAI Employee?"
                value="Explore our products."
              />

              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                  DAK Corporation
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  Building intelligent technology for the businesses of
                  tomorrow.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  DAK Corporation is building an ecosystem of intelligent
                  products focused on real-world business problems.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Send a message
                </p>

                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Tell us what you're building.
                </h2>

                <p className="mt-4 max-w-2xl text-gray-500">
                  Fill in the form and our team can get back to you.
                </p>
              </div>

              {status === "success" ? (
                <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    Message sent successfully.
                  </h3>

                  <p className="mt-2 leading-7 text-gray-400">
                    Thanks for contacting DAK Corporation. Your message has
                    been sent to our team.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      name="name"
                      placeholder="Your name"
                    />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>

                  <Field
                    label="Company"
                    name="company"
                    placeholder="Your company"
                    required={false}
                  />

                  <div>
                    <label
                      htmlFor="reason"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Reason for contacting
                    </label>

                    <select
                      id="reason"
                      name="reason"
                      required
                      defaultValue=""
                      disabled={status === "sending"}
                      className="w-full rounded-2xl border border-white/10 bg-[#0b0b10] px-4 py-3.5 text-sm text-white outline-none transition focus:border-violet-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="" disabled className="bg-[#0b0b10]">
                        Select an option
                      </option>

                      <option
                        value="Product enquiry"
                        className="bg-[#0b0b10]"
                      >
                        Product enquiry
                      </option>

                      <option
                        value="Partnership"
                        className="bg-[#0b0b10]"
                      >
                        Partnership
                      </option>

                      <option
                        value="Careers"
                        className="bg-[#0b0b10]"
                      >
                        Careers
                      </option>

                      <option
                        value="Business enquiry"
                        className="bg-[#0b0b10]"
                      >
                        Business enquiry
                      </option>

                      <option
                        value="Other"
                        className="bg-[#0b0b10]"
                      >
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      disabled={status === "sending"}
                      placeholder="Tell us a little about what you want to discuss..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-[#0b0b10] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-violet-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending"
                      ? "Sending message..."
                      : "Send message →"}
                  </button>

                  <p className="text-center text-xs leading-5 text-gray-600">
                    We respect your information and will only use it to
                    respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BizAI CTA */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-indigo-500/10 px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl">
                🤖
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.3em] text-violet-300">
                DAK's flagship product
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Need an AI employee for your business?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Discover BizAI Employee, our intelligent business assistant
                built by DAK Corporation.
              </p>

              <div className="mt-9">
                <Link
                  href="/products"
                  className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Explore BizAI →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  description,
  value,
}: {
  icon: string;
  title: string;
  description: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:bg-white/[0.05]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>

      <p className="mt-4 break-all text-sm text-gray-300">
        {value}
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-[#0b0b10] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-violet-400/40"
      />
    </div>
  );
}