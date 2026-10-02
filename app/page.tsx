"use client";

import Link from "next/link";

const bizAIUrl =
  process.env.NEXT_PUBLIC_BIZAI_URL ||
  "https://bizai-ten.vercel.app";

const productFeatures = [
  {
    icon: "◎",
    title: "Customer intelligence",
  },
  {
    icon: "↗",
    title: "Lead management",
  },
  {
    icon: "◈",
    title: "AI business insights",
  },
  {
    icon: "⚡",
    title: "Smart automation",
  },
  {
    icon: "◷",
    title: "Follow-up management",
  },
  {
    icon: "▣",
    title: "Business analytics",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[8%] top-[-220px] h-[550px] w-[550px] rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="absolute right-[-180px] top-[15%] h-[650px] w-[650px] rounded-full bg-indigo-600/10 blur-[170px]" />

        <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-600/[0.07] blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]" />

      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 lg:px-8">

          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-4 py-2 text-xs font-medium text-violet-200 backdrop-blur-xl">

                <span className="relative flex h-2 w-2">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />

                </span>

                DAK Corporation

                <span className="text-white/20">
                  •
                </span>

                Intelligent technology

              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-[84px]">

                We build

                <span className="block bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                  intelligent
                </span>

                technology.

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">

                DAK Corporation creates AI-powered software and digital
                products that help businesses operate with more clarity,
                intelligence, and speed.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-2xl shadow-white/5 transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
                >
                  Discover BizAI

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </a>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Explore products
                </Link>

              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-600">

                <span>
                  AI-powered products
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-700" />

                <span>
                  Business software
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-700" />

                <span>
                  Built for scale
                </span>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative mx-auto w-full max-w-2xl">

              <div className="absolute inset-0 rounded-full bg-violet-500/15 blur-[110px]" />

              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.06]" />

              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/[0.06]" />

              {/* FLOATING CARD 1 */}

              <div className="absolute left-[2%] top-[15%] hidden rounded-2xl border border-white/10 bg-[#0a0a10]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">

                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  Intelligence
                </p>

                <p className="mt-1 text-sm font-medium text-gray-300">
                  AI-powered decisions
                </p>

              </div>

              {/* FLOATING CARD 2 */}

              <div className="absolute right-[1%] top-[20%] hidden rounded-2xl border border-white/10 bg-[#0a0a10]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">

                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  Automation
                </p>

                <p className="mt-1 text-sm font-medium text-gray-300">
                  Work gets handled
                </p>

              </div>

              {/* MAIN PRODUCT PREVIEW */}

              <div className="relative z-10 mx-auto max-w-[560px]">

                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.65)]">

                  <div className="rounded-[2rem] border border-white/5 bg-[#08080d]/95 p-4 backdrop-blur-2xl sm:p-6">

                    {/* TOP */}

                    <div className="flex items-center justify-between border-b border-white/10 pb-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-xl shadow-lg shadow-violet-500/10">
                          🤖
                        </div>

                        <div>

                          <p className="text-sm font-semibold">
                            BizAI Employee
                          </p>

                          <p className="text-xs text-gray-600">
                            AI business intelligence
                          </p>

                        </div>

                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <span className="text-[10px] font-medium text-emerald-300">
                          Online
                        </span>

                      </div>

                    </div>

                    {/* AI INSIGHT */}

                    <div className="mt-5 rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.10] via-violet-500/[0.04] to-indigo-500/[0.04] p-5">

                      <div className="flex items-center gap-3">

                        <span className="text-xs font-medium text-violet-300">
                          AI insight
                        </span>

                        <span className="h-px flex-1 bg-violet-400/10" />

                      </div>

                      <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-[15px]">

                        You have 8 leads that need follow-up today.
                        Prioritize your highest-value leads first.

                      </p>

                    </div>

                    {/* STATS */}

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

                      <DashboardStat
                        label="Customers"
                        value="128"
                        accent="blue"
                      />

                      <DashboardStat
                        label="Leads"
                        value="24"
                        accent="green"
                      />

                      <DashboardStat
                        label="Sales"
                        value="36"
                        accent="violet"
                      />

                      <DashboardStat
                        label="Tasks"
                        value="12"
                        accent="pink"
                      />

                    </div>

                    {/* BUSINESS ACTIVITY */}

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                            Business activity
                          </p>

                          <p className="mt-1 text-sm font-medium text-gray-300">
                            Intelligence → Action
                          </p>

                        </div>

                        <div className="flex items-center gap-2 text-xs text-violet-300">

                          <span className="h-2 w-2 rounded-full bg-violet-400" />

                          AI monitored

                        </div>

                      </div>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">

                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-400" />

                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] text-gray-600">

                        <span>
                          Automation
                        </span>

                        <span>
                          78%
                        </span>

                      </div>

                    </div>

                    {/* FEATURES */}

                    <div className="mt-4 grid grid-cols-3 gap-3">

                      <MiniFeature
                        icon="✦"
                        text="AI Insights"
                      />

                      <MiniFeature
                        icon="↗"
                        text="Lead Scoring"
                      />

                      <MiniFeature
                        icon="⚡"
                        text="Automation"
                      />

                    </div>

                  </div>

                </div>

                {/* CAPTION */}

                <div className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-[#0a0a10]/90 px-5 py-2.5 text-xs text-gray-400 shadow-xl backdrop-blur-xl">

                  <span className="text-violet-300">
                    Built by DAK Corporation
                  </span>

                  <span className="text-white/20">
                    •
                  </span>

                  <span>
                    Powered by AI
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT DAK
      ====================================================== */}

      <section
        id="about"
        className="border-t border-white/[0.07] bg-white/[0.012]"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                About DAK
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology with a purpose.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-gray-300">

                DAK Corporation is a technology company focused on
                creating intelligent digital products for real-world
                business problems.

              </p>

              <p className="mt-7 leading-8 text-gray-500">

                We combine artificial intelligence, software engineering,
                automation, and business data to create products that
                simplify complex work and help businesses move forward.

              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <ValueCard
                  icon="✦"
                  title="AI First"
                  text="Intelligence at the core of our products."
                />

                <ValueCard
                  icon="◈"
                  title="Business Focused"
                  text="Built around practical business problems."
                />

                <ValueCard
                  icon="↗"
                  title="Built to Scale"
                  text="Designed for long-term growth."
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BIZAI FLAGSHIP PRODUCT
      ====================================================== */}

      <section
        id="products"
        className="border-t border-white/[0.07]"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-violet-500/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-300">
              Flagship product
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">

              Meet{" "}

              <span className="bg-gradient-to-r from-violet-300 via-white to-indigo-300 bg-clip-text text-transparent">
                BizAI Employee.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">

              Your digital business employee for customers, leads,
              sales, follow-ups, appointments, analytics, and
              AI-powered business decisions.

            </p>

          </div>

          {/* PRODUCT SHOWCASE */}

          <div className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.02] to-indigo-500/[0.06]">

            <div className="absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="absolute bottom-[-150px] left-[-100px] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[120px]" />

            <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* LEFT */}

              <div className="p-8 sm:p-12 lg:p-16">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-2xl">
                  🤖
                </div>

                <p className="mt-7 text-sm font-medium text-violet-300">
                  AI BUSINESS EMPLOYEE
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">

                  Your business.
                  <br />
                  Understood.

                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

                  BizAI brings the everyday tools your business needs
                  into one intelligent workspace.

                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {productFeatures.map(
                    (feature) => (
                      <div
                        key={feature.title}
                        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 transition hover:border-violet-400/20 hover:bg-violet-500/[0.04]"
                      >

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-sm text-violet-300 transition group-hover:bg-violet-500/20">
                          {feature.icon}
                        </span>

                        <span className="text-sm text-gray-300">
                          {feature.title}
                        </span>

                      </div>
                    )
                  )}

                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                  <a
                    href={bizAIUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    Launch BizAI
                    <span>→</span>
                  </a>

                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    Product details
                  </Link>

                </div>

                <p className="mt-5 text-xs text-gray-600">
                  Built by DAK Corporation
                </p>

              </div>

              {/* RIGHT */}

              <div className="flex items-center border-t border-white/10 p-8 lg:border-l lg:border-t-0 sm:p-12">

                <div className="relative w-full">

                  <div className="absolute inset-8 rounded-[2rem] bg-violet-500/15 blur-3xl" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-[#08080d]/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:p-5">

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                            TODAY
                          </p>

                          <p className="mt-2 text-lg font-semibold">
                            Business overview
                          </p>

                        </div>

                        <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5 text-[10px] text-emerald-300">
                          AI ACTIVE
                        </span>

                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">

                        <DashboardStat
                          label="New leads"
                          value="+7"
                          accent="blue"
                        />

                        <DashboardStat
                          label="Customers"
                          value="+12"
                          accent="green"
                        />

                        <DashboardStat
                          label="Appointments"
                          value="5"
                          accent="violet"
                        />

                        <DashboardStat
                          label="Follow-ups"
                          value="8"
                          accent="pink"
                        />

                      </div>

                      <div className="mt-4 rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.08] to-indigo-500/[0.04] p-5">

                        <div className="flex items-center gap-2">

                          <span className="text-sm text-violet-300">
                            ✦
                          </span>

                          <p className="text-xs font-medium text-violet-300">
                            BizAI recommendation
                          </p>

                        </div>

                        <p className="mt-3 text-sm leading-6 text-gray-300">

                          Contact high-value leads first and complete
                          overdue follow-ups before the end of the day.

                        </p>

                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4">

                        <div>

                          <p className="text-xs text-gray-600">
                            Business health
                          </p>

                          <p className="mt-1 text-sm font-medium text-gray-300">
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
      ====================================================== */}

      <section
        id="technology"
        className="border-t border-white/[0.07] bg-white/[0.012]"
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

              DAK combines artificial intelligence, automation,
              business data, and modern software engineering.

            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <TechCard
              icon="🧠"
              title="Artificial Intelligence"
              text="Systems that understand business context and generate useful intelligence."
            />

            <TechCard
              icon="⚡"
              title="Automation"
              text="Workflows that reduce repetitive work and help teams move faster."
            />

            <TechCard
              icon="🔐"
              title="Secure software"
              text="Products designed with access control and business data protection in mind."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="contact"
        className="border-t border-white/[0.07]"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.02] to-indigo-500/[0.07] px-8 py-20 text-center sm:px-12">

            <div className="absolute left-1/2 top-[-120px] h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[110px]" />

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

                Explore BizAI Employee and discover how DAK is
                bringing intelligent software into everyday business.

              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href={bizAIUrl}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Launch BizAI →
                </a>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
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
   DASHBOARD STAT
========================================================= */

function DashboardStat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent:
    | "blue"
    | "green"
    | "violet"
    | "pink";
}) {
  const accentStyles = {
    blue: {
      border: "border-blue-400/10",
      glow: "bg-blue-500/10",
      text: "text-blue-300",
    },

    green: {
      border: "border-emerald-400/10",
      glow: "bg-emerald-500/10",
      text: "text-emerald-300",
    },

    violet: {
      border: "border-violet-400/10",
      glow: "bg-violet-500/10",
      text: "text-violet-300",
    },

    pink: {
      border: "border-pink-400/10",
      glow: "bg-pink-500/10",
      text: "text-pink-300",
    },
  };

  const styles =
    accentStyles[accent];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${styles.border} bg-white/[0.025] p-4`}
    >

      <div
        className={`absolute right-[-10px] top-[-10px] h-16 w-16 rounded-full ${styles.glow} blur-2xl`}
      />

      <p className="relative text-[11px] text-gray-600">
        {label}
      </p>

      <p className="relative mt-2 text-2xl font-semibold">
        {value}
      </p>

      <p
        className={`relative mt-1 text-[10px] ${styles.text}`}
      >
        AI tracked
      </p>

    </div>
  );
}

/* =========================================================
   MINI FEATURE
========================================================= */

function MiniFeature({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3">

      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-xs text-violet-300">
        {icon}
      </span>

      <span className="text-[10px] text-gray-500">
        {text}
      </span>

    </div>
  );
}

/* =========================================================
   VALUE CARD
========================================================= */

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/15 hover:bg-white/[0.04]">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/[0.06] text-sm text-violet-300">
        {icon}
      </div>

      <p className="mt-5 text-sm font-semibold">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   TECH CARD
========================================================= */

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
    <div className="group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/15 hover:bg-white/[0.04]">

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