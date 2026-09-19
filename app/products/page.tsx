"use client";

import Link from "next/link";

const bizAIUrl =
  process.env.NEXT_PUBLIC_BIZAI_URL || "http://localhost:3001";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px]" />
        <div className="absolute right-[-180px] top-[30%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute left-[-180px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
            Products by DAK Corporation
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Products built
            <br />
            for a
            <br />
            <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              smarter future.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
            DAK Corporation creates intelligent software and AI-powered
            products designed to solve real problems and improve the way
            businesses work.
          </p>
        </div>
      </section>

      {/* Flagship Product */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Flagship product
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Meet BizAI Employee.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
              An AI-powered business assistant built by DAK Corporation to
              help businesses manage everyday operations intelligently.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-indigo-500/10">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left content */}
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl">
                  🤖
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.25em] text-violet-300">
                  DAK Corporation product
                </p>

                <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                  BizAI Employee
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                  Your intelligent digital business employee for customers,
                  leads, appointments, sales, follow-ups, communication, and
                  everyday business tasks.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "AI Business Assistant",
                    "Customer Management",
                    "Lead Management",
                    "Sales Tracking",
                    "Appointments",
                    "Follow-ups",
                    "AI Insights",
                    "Email & Communication",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-violet-300">
                        ✓
                      </span>

                      <span className="text-sm text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={bizAIUrl}
                    className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-gray-100"
                  >
                    Launch BizAI →
                  </a>

                  <Link
                    href="/contact"
                    className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.08]"
                  >
                    Contact us
                  </Link>
                </div>

                <p className="mt-4 text-xs text-gray-600">
                  BizAI is the flagship product of DAK Corporation.
                </p>
              </div>

              {/* Product preview */}
              <div className="flex items-center justify-center border-t border-white/10 p-8 lg:border-l lg:border-t-0 sm:p-12">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 rounded-[2rem] bg-violet-500/20 blur-3xl" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-5 shadow-2xl shadow-black/50">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-xl">
                            🤖
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              BizAI Employee
                            </p>

                            <p className="text-xs text-gray-500">
                              AI Business Assistant
                            </p>
                          </div>
                        </div>

                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                      </div>

                      <div className="mt-7 rounded-2xl border border-violet-400/10 bg-violet-500/[0.06] p-4">
                        <p className="text-xs text-violet-300">
                          AI insight
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-300">
                          You have 8 leads that need follow-up today. I
                          recommend contacting the highest-value leads first.
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <p className="text-xs text-gray-500">
                            Customers
                          </p>

                          <p className="mt-2 text-2xl font-semibold">
                            128
                          </p>

                          <p className="mt-1 text-xs text-gray-600">
                            Managed by BizAI
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <p className="text-xs text-gray-500">
                            Follow-ups
                          </p>

                          <p className="mt-2 text-2xl font-semibold">
                            8
                          </p>

                          <p className="mt-1 text-xs text-gray-600">
                            Need attention
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-xs text-gray-500">
                          Today's activity
                        </p>

                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">
                              New customer
                            </span>

                            <span className="text-gray-300">
                              +12
                            </span>
                          </div>

                          <div className="h-px bg-white/5" />

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">
                              New leads
                            </span>

                            <span className="text-gray-300">
                              +7
                            </span>
                          </div>

                          <div className="h-px bg-white/5" />

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">
                              Appointments
                            </span>

                            <span className="text-gray-300">
                              5
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                Product philosophy
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology should work for you.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <ProductCard
                icon="🧩"
                title="Solve real problems"
                text="Every product starts with a practical problem worth solving."
              />

              <ProductCard
                icon="⚡"
                title="Reduce complexity"
                text="We turn complicated workflows into simple digital experiences."
              />

              <ProductCard
                icon="🧠"
                title="Add intelligence"
                text="AI should provide useful decisions and actions, not just generate text."
              />

              <ProductCard
                icon="📈"
                title="Grow with users"
                text="Our products are designed to become more valuable as businesses grow."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Products */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              What's next
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              One product is only the beginning.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              BizAI is the beginning of the DAK ecosystem. Over time, we aim
              to build more intelligent products that solve problems across
              industries.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <FutureCard
              label="Future product"
              title="Coming soon"
              text="New intelligent software products are being explored by DAK Corporation."
            />

            <FutureCard
              label="Future product"
              title="More AI"
              text="Intelligent systems designed to make work faster and more efficient."
            />

            <FutureCard
              label="Future product"
              title="More innovation"
              text="The DAK ecosystem will continue growing with new ideas and technologies."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-indigo-500/10 px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                Start with BizAI
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Give your business an intelligent employee.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Explore BizAI Employee, our intelligent business assistant
                built by DAK Corporation.
              </p>

              <div className="mt-9">
                <a
                  href={bizAIUrl}
                  className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Launch BizAI →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function FutureCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-white/[0.02] p-7">
      <div className="text-xs uppercase tracking-[0.25em] text-gray-600">
        {label}
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-gray-400">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {text}
      </p>
    </div>
  );
}