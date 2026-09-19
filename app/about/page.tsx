"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute right-[-180px] top-[45%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute left-[-180px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
            About DAK Corporation
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            We build
            <br />
            <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              intelligent technology.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
            DAK Corporation is a technology company focused on creating
            intelligent software, AI-powered products, and digital systems
            designed to solve meaningful business problems.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                Our story
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built with a simple idea.
              </h2>
            </div>

            <div className="max-w-3xl space-y-7 text-lg leading-8 text-gray-400">
              <p>
                Technology should make business easier, not more complicated.
                That belief is at the heart of DAK Corporation.
              </p>

              <p>
                We are building a technology ecosystem where artificial
                intelligence and modern software work together to help people
                and businesses operate more efficiently.
              </p>

              <p>
                Our approach is product-first. We focus on identifying real
                problems, designing practical solutions, and turning those
                solutions into software people can actually use every day.
              </p>

              <p className="text-gray-300">
                Our first flagship product,{" "}
                <span className="font-semibold text-white">
                  BizAI Employee
                </span>
                , represents this vision by bringing AI-powered business
                assistance into everyday operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-xl">
                🎯
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-violet-300">
                Our mission
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Make intelligent technology accessible and useful.
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                We aim to build technology that reduces complexity, improves
                productivity, and helps businesses make better decisions.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-xl">
                🚀
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-violet-300">
                Our vision
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Build products that shape the next generation of business.
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                DAK Corporation is being built with a long-term vision:
                creating an ecosystem of intelligent products that can serve
                businesses across industries and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              What we believe
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Principles behind our products.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              These ideas guide how we think about technology, products, and
              the people who use them.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <PrincipleCard
              icon="🧠"
              title="Intelligence"
              text="We use AI to create useful experiences and meaningful automation."
            />

            <PrincipleCard
              icon="✨"
              title="Simplicity"
              text="Powerful technology should feel simple and intuitive to use."
            />

            <PrincipleCard
              icon="⚙️"
              title="Practicality"
              text="We build around real problems and measurable improvements."
            />

            <PrincipleCard
              icon="🌎"
              title="Scale"
              text="We design products with the ambition to serve a global audience."
            />
          </div>
        </div>
      </section>

      {/* BizAI */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-indigo-500/10">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Flagship product
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Meet BizAI Employee.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                  Our first major product brings artificial intelligence into
                  everyday business operations. BizAI helps businesses manage
                  customers, leads, sales, appointments, communication,
                  follow-ups, and more.
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                  BizAI is designed around one simple idea: businesses should
                  have access to an intelligent digital employee that can help
                  them work smarter.
                </p>

                <div className="mt-9">
                  <Link
                    href="/products"
                    className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                  >
                    Explore BizAI →
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 p-8 lg:border-l lg:border-t-0 sm:p-12">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 rounded-[2rem] bg-violet-500/20 blur-3xl" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-[#0b0b10] p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-2xl">
                        🤖
                      </div>

                      <div>
                        <p className="text-lg font-semibold">
                          BizAI Employee
                        </p>

                        <p className="text-sm text-gray-500">
                          Built by DAK Corporation
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 space-y-3">
                      <InfoCard
                        title="Customers"
                        text="Manage your customer relationships"
                      />

                      <InfoCard
                        title="AI Insights"
                        text="Turn business data into useful insights"
                      />

                      <InfoCard
                        title="Communication"
                        text="Stay connected with customers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              The journey ahead
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              We are just getting started.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              DAK Corporation is building an ecosystem of intelligent
              technology products for the future.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Contact DAK
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrincipleCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-gray-500">
        {title}
      </p>

      <p className="mt-1 text-sm text-gray-300">
        {text}
      </p>
    </div>
  );
}