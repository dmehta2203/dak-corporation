"use client";

import Link from "next/link";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-240px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />

        <div className="absolute left-[-180px] bottom-[8%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />

              Technology at DAK
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Intelligence
              <br />
              built into
              <br />

              <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
                every layer.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              DAK Corporation combines artificial intelligence, modern
              software engineering, automation, and data-driven systems to
              build useful digital products.
            </p>
          </div>

          {/* Technology visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-violet-500/15 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0b10] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      DAK TECHNOLOGY
                    </p>

                    <p className="mt-2 text-sm text-gray-300">
                      Intelligent product stack
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10">
                    ✦
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <TechnologyBar
                    label="Artificial Intelligence"
                    value="Core intelligence"
                    width="w-[92%]"
                  />

                  <TechnologyBar
                    label="Automation"
                    value="Smart workflows"
                    width="w-[82%]"
                  />

                  <TechnologyBar
                    label="Data"
                    value="Business context"
                    width="w-[88%]"
                  />

                  <TechnologyBar
                    label="Software"
                    value="Product foundation"
                    width="w-[95%]"
                  />

                  <TechnologyBar
                    label="Security"
                    value="Trust layer"
                    width="w-[78%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology pillars */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Our technology pillars
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              The foundation behind our products.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              We focus on combining different technologies rather than
              treating AI as a standalone feature.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <TechCard
              icon="🧠"
              title="Artificial Intelligence"
              text="AI systems that understand information, generate useful outputs, and support better business decisions."
            />

            <TechCard
              icon="⚡"
              title="Automation"
              text="Automated workflows that reduce repetitive tasks and help businesses operate more efficiently."
            />

            <TechCard
              icon="🗄️"
              title="Data & Intelligence"
              text="Structured business data transformed into meaningful insights, patterns, and actionable information."
            />

            <TechCard
              icon="💻"
              title="Modern Software"
              text="Fast, responsive, maintainable software experiences built for real-world use."
            />

            <TechCard
              icon="🔐"
              title="Security"
              text="Security-conscious architecture designed to protect business information and user access."
            />

            <TechCard
              icon="📈"
              title="Scalability"
              text="Systems designed with future growth in mind so products can evolve alongside their users."
            />
          </div>
        </div>
      </section>

      {/* AI section */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                AI-first thinking
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                AI should do more than talk.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                At DAK, we think useful AI should understand context, work
                with data, identify what matters, and help people take action.
              </p>

              <p className="mt-5 leading-7 text-gray-500">
                That philosophy is reflected in BizAI Employee, where AI is
                connected to business information and workflows rather than
                existing as an isolated chatbot.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-[#0b0b10] p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-xl">
                    🤖
                  </div>

                  <div>
                    <p className="font-semibold">
                      Intelligence workflow
                    </p>

                    <p className="text-sm text-gray-500">
                      From information to action
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <FlowStep
                    number="01"
                    title="Understand"
                    text="Read business context and available information."
                  />

                  <div className="ml-6 h-5 w-px bg-white/10" />

                  <FlowStep
                    number="02"
                    title="Analyze"
                    text="Identify patterns, priorities, and opportunities."
                  />

                  <div className="ml-6 h-5 w-px bg-white/10" />

                  <FlowStep
                    number="03"
                    title="Recommend"
                    text="Provide a practical next step for the business."
                  />

                  <div className="ml-6 h-5 w-px bg-white/10" />

                  <FlowStep
                    number="04"
                    title="Act"
                    text="Turn intelligence into useful workflows and actions."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product technology */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
            <div className="grid lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Technology in action
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  BizAI Employee
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                  Our flagship product brings together AI, business data,
                  workflow management, communication, and automation into one
                  intelligent platform.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "AI-powered business assistance",
                    "Customer and lead data",
                    "Sales and appointment workflows",
                    "AI-generated insights",
                    "Email and communication tools",
                    "Future automation capabilities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs text-violet-300">
                        ✓
                      </span>

                      <span className="text-sm text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/products"
                    className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                  >
                    Explore BizAI →
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 bg-black/20 p-8 lg:border-l lg:border-t-0 sm:p-12">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 rounded-[2rem] bg-violet-500/15 blur-3xl" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-[#0b0b10] p-5 shadow-2xl">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        BUSINESS INTELLIGENCE
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <MetricCard
                          label="Customers"
                          value="128"
                        />

                        <MetricCard
                          label="Leads"
                          value="24"
                        />

                        <MetricCard
                          label="Sales"
                          value="36"
                        />

                        <MetricCard
                          label="Tasks"
                          value="12"
                        />
                      </div>

                      <div className="mt-4 rounded-2xl border border-violet-400/10 bg-violet-500/[0.05] p-4">
                        <p className="text-xs text-violet-300">
                          AI recommendation
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-300">
                          Prioritize high-value leads and complete overdue
                          follow-ups before the end of the day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Looking ahead
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Building for what comes next.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              DAK Corporation is continuously exploring new ways to combine
              AI, software, automation, and data to create better products.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            <FutureCard
              number="01"
              title="Smarter AI"
              text="More capable systems that understand deeper business context."
            />

            <FutureCard
              number="02"
              title="Deeper automation"
              text="More workflows that can move from recommendation to execution."
            />

            <FutureCard
              number="03"
              title="New products"
              text="An expanding DAK ecosystem built around meaningful problems."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-indigo-500/10 px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                DAK Corporation
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Technology is only powerful when it is useful.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Explore the products we are building to turn intelligence
                into real-world value.
              </p>

              <div className="mt-9">
                <Link
                  href="/products"
                  className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Explore Products →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TechnologyBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-gray-300">
          {label}
        </span>

        <span className="text-xs text-gray-600">
          {value}
        </span>
      </div>

      <div className="mt-3 h-1.5 rounded-full bg-white/5">
        <div
          className={`h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 ${width}`}
        />
      </div>
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
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
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

function FlowStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[10px] font-semibold text-violet-300">
        {number}
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-200">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold">
        {value}
      </p>
    </div>
  );
}

function FutureCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
      <p className="text-xs tracking-[0.2em] text-violet-300">
        {number}
      </p>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}