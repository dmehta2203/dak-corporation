"use client";

import Link from "next/link";

const bizAIUrl =
  process.env.NEXT_PUBLIC_BIZAI_URL || "http://localhost:3001";

const productFeatures = [
  "Customer management",
  "Lead management",
  "Sales tracking",
  "Appointments",
  "AI insights",
  "Follow-ups",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="relative min-h-screen">
        {/* Animated background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-260px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

          <div className="absolute left-[8%] top-[35%] h-[320px] w-[320px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

          <div className="absolute right-[5%] top-[25%] h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]" />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
            {/* LEFT */}
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-4 py-2 text-xs text-violet-200 shadow-lg shadow-violet-500/5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>

                DAK Corporation • Intelligent technology
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[86px]">
                We build
                <br />
                <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                  intelligent
                </span>
                <br />
                technology.
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
                DAK Corporation builds AI-powered software and digital
                products that help businesses work smarter, move faster, and
                operate with greater clarity.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={bizAIUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-xl shadow-white/5 transition duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Launch BizAI
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Explore our products
                </Link>
              </div>

              {/* Small trust line */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-600">
                <span>AI-powered products</span>
                <span className="h-1 w-1 rounded-full bg-gray-700" />
                <span>Business software</span>
                <span className="h-1 w-1 rounded-full bg-gray-700" />
                <span>Built for scale</span>
              </div>
            </div>

            {/* RIGHT — AI SYSTEM VISUAL */}
            <div className="relative mx-auto w-full max-w-xl">
              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-violet-500/20 blur-[100px]" />

              {/* Orbit rings */}
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

              <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/10" />

              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10" />

              {/* Floating nodes */}
              <div className="absolute left-[8%] top-[22%] hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl sm:block">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  AI
                </p>
                <p className="mt-1 text-sm font-medium text-gray-300">
                  Intelligence
                </p>
              </div>

              <div className="absolute right-[2%] top-[30%] hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl sm:block">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  Data
                </p>
                <p className="mt-1 text-sm font-medium text-gray-300">
                  Business context
                </p>
              </div>

              <div className="absolute bottom-[15%] left-[5%] hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl sm:block">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  Automation
                </p>
                <p className="mt-1 text-sm font-medium text-gray-300">
                  Smart workflows
                </p>
              </div>

              <div className="absolute bottom-[12%] right-[6%] hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl sm:block">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  Software
                </p>
                <p className="mt-1 text-sm font-medium text-gray-300">
                  Built to scale
                </p>
              </div>

              {/* Main product card */}
              <div className="relative z-10 mx-auto aspect-square w-full max-w-[480px]">
                <div className="absolute inset-[12%] rounded-[3rem] bg-violet-500/10 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-[#09090e]/90 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-5">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d13] p-5 sm:p-6">
                    {/* Card top */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-xl">
                          🤖
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            BizAI Employee
                          </p>

                          <p className="text-xs text-gray-600">
                            Built by DAK Corporation
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-emerald-300">
                          Online
                        </span>
                      </div>
                    </div>

                    {/* AI message */}
                    <div className="mt-5 rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.08] to-indigo-500/[0.04] p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-violet-300">
                          AI insight
                        </span>

                        <span className="h-px flex-1 bg-violet-400/10" />
                      </div>

                      <p className="mt-3 text-sm leading-6 text-gray-300">
                        You have 8 leads that need follow-up today. I
                        recommend prioritizing your highest-value leads first.
                      </p>
                    </div>

                    {/* Mini stats */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <MiniStat
                        label="Customers"
                        value="128"
                        note="Active records"
                      />

                      <MiniStat
                        label="Leads"
                        value="24"
                        note="In pipeline"
                      />

                      <MiniStat
                        label="Sales"
                        value="36"
                        note="Tracked"
                      />

                      <MiniStat
                        label="Tasks"
                        value="12"
                        note="Pending"
                      />
                    </div>

                    {/* Progress */}
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          Business activity
                        </p>

                        <span className="text-xs text-violet-300">
                          AI monitored
                        </span>
                      </div>

                      <div className="mt-4 h-2 rounded-full bg-white/5">
                        <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-indigo-400" />
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] text-gray-600">
                        <span>Workflows</span>
                        <span>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom floating label */}
              <div className="absolute bottom-[4%] left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-[#0b0b10]/90 px-4 py-2 text-xs text-gray-400 shadow-xl backdrop-blur-xl">
                Intelligence → Action
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-700 sm:flex">
          <span>Explore DAK</span>
          <span className="h-8 w-px bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* =====================================================
          COMPANY INTRO
          ===================================================== */}
      <section
        id="about"
        className="border-t border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                About DAK
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                We build technology with a purpose.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-gray-300">
                DAK Corporation is a technology company focused on building
                intelligent digital products that solve real-world business
                problems.
              </p>

              <p className="mt-7 leading-8 text-gray-500">
                We believe powerful technology should feel simple. Our
                products bring together artificial intelligence, software,
                automation, and business data to create useful experiences.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <ValueCard
                  title="AI First"
                  text="Intelligence at the core of our products."
                />

                <ValueCard
                  title="Business Focused"
                  text="Built around practical business needs."
                />

                <ValueCard
                  title="Built to Scale"
                  text="Designed for long-term growth."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT
          ===================================================== */}
      <section id="products" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Flagship product
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Meet BizAI Employee.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              An AI-powered business assistant designed to help businesses
              manage everyday operations more intelligently.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-violet-400/15 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-indigo-500/10">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl">
                  🤖
                </div>

                <h3 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Your digital business employee.
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                  BizAI brings business management, communication, insights,
                  and AI assistance together in one platform.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {productFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 text-xs text-violet-300">
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
                    href="/products"
                    className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    View product details
                  </Link>
                </div>
              </div>

              {/* Product visual */}
              <div className="flex items-center justify-center border-t border-white/10 p-8 lg:border-l lg:border-t-0 sm:p-12">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 rounded-[2rem] bg-violet-500/15 blur-3xl" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-[#0b0b10] p-5 shadow-2xl">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                        TODAY
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <MiniStat
                          label="New leads"
                          value="+7"
                          note="Today"
                        />

                        <MiniStat
                          label="Customers"
                          value="+12"
                          note="Today"
                        />

                        <MiniStat
                          label="Appointments"
                          value="5"
                          note="Upcoming"
                        />

                        <MiniStat
                          label="Follow-ups"
                          value="8"
                          note="Need attention"
                        />
                      </div>

                      <div className="mt-4 rounded-2xl border border-violet-400/10 bg-violet-500/[0.05] p-4">
                        <p className="text-xs text-violet-300">
                          BizAI recommendation
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-300">
                          Contact high-value leads first and complete overdue
                          follow-ups before the end of the day.
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <div>
                          <p className="text-xs text-gray-600">
                            Business health
                          </p>

                          <p className="mt-1 text-sm font-semibold text-gray-300">
                            AI monitored
                          </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-sm text-emerald-300">
                          ✓
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

      {/* =====================================================
          TECHNOLOGY
          ===================================================== */}
      <section
        id="technology"
        className="border-t border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Technology
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Intelligence meets software.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              DAK combines AI, automation, business data, and modern software
              engineering to build intelligent products.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <TechCard
              icon="🧠"
              title="Artificial Intelligence"
              text="Systems that understand context and generate useful intelligence."
            />

            <TechCard
              icon="⚡"
              title="Automation"
              text="Workflows that reduce repetitive tasks and improve productivity."
            />

            <TechCard
              icon="🔐"
              title="Secure software"
              text="Technology designed with user access and business data protection in mind."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-indigo-500/10 px-8 py-20 text-center sm:px-12">
            <div className="absolute left-1/2 top-[-80px] h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl">
                ✦
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.3em] text-violet-300">
                DAK Corporation
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
                The future of business is intelligent.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Explore BizAI Employee and discover how DAK is bringing
                intelligent software into everyday business operations.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={bizAIUrl}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Launch BizAI →
                </a>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Contact DAK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
   ========================================================= */

function MiniStat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-gray-600">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-gray-700">
        {note}
      </p>
    </div>
  );
}

function ValueCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function TechCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/10 hover:bg-white/[0.05]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl">
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