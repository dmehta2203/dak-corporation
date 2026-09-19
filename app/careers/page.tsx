"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />

        <div className="absolute left-[-180px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />

              Careers at DAK Corporation
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Build what
              <br />
              comes
              <br />

              <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
                next.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              We are building intelligent products for a future where
              technology helps people and businesses do more.
            </p>

            <div className="mt-10">
              <Link
                href="#opportunities"
                className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
              >
                Explore opportunities
              </Link>
            </div>
          </div>

          {/* Careers visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-violet-500/15 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0b10] p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  DAK culture
                </p>

                <div className="mt-7 space-y-3">
                  <CultureRow
                    icon="🧠"
                    title="Think deeply"
                    text="Understand the problem before building."
                  />

                  <CultureRow
                    icon="⚡"
                    title="Move quickly"
                    text="Build, learn, improve, repeat."
                  />

                  <CultureRow
                    icon="🧩"
                    title="Work together"
                    text="Great products come from great collaboration."
                  />

                  <CultureRow
                    icon="🚀"
                    title="Think long term"
                    text="Build products that can matter at scale."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DAK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Why DAK
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Work on problems that matter.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              At DAK Corporation, you will have the opportunity to work on
              products that combine software, AI, automation, and real
              business problems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <BenefitCard
              icon="🤖"
              title="AI-driven"
              text="Work with modern AI technologies and intelligent product systems."
            />

            <BenefitCard
              icon="🛠️"
              title="Build products"
              text="Turn ideas into real software that people can use."
            />

            <BenefitCard
              icon="📈"
              title="Grow with us"
              text="Learn, experiment, and grow alongside a developing technology company."
            />

            <BenefitCard
              icon="🌍"
              title="Think globally"
              text="Build technology with ambitions that go beyond a single market."
            />
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                Our culture
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Curious minds. Practical builders.
              </h2>
            </div>

            <div className="space-y-7">
              <CultureBlock
                title="Curiosity comes first"
                text="We ask questions, explore possibilities, and stay open to better ways of solving problems."
              />

              <CultureBlock
                title="Ownership matters"
                text="We believe people do their best work when they take responsibility for the outcome, not just the task."
              />

              <CultureBlock
                title="Keep improving"
                text="Products evolve, ideas change, and learning never stops. We value progress over perfection."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
              Opportunities
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              We are building the team.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              As DAK grows, we will open opportunities across engineering,
              AI, product, design, marketing, and business.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            <JobCard
              title="Software Engineering"
              description="Build modern web applications, APIs, product systems, and infrastructure."
              status="Future opening"
            />

            <JobCard
              title="Artificial Intelligence"
              description="Work on intelligent systems, AI workflows, and product experiences."
              status="Future opening"
            />

            <JobCard
              title="Product & Design"
              description="Design useful, intuitive experiences for DAK products."
              status="Future opening"
            />

            <JobCard
              title="Growth & Business"
              description="Help bring DAK products to businesses and users around the world."
              status="Future opening"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm leading-7 text-gray-500">
              DAK Corporation is currently growing its product ecosystem.
              Open roles will be published here as the company expands.
            </p>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-indigo-500/10 px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                The future
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Build something people will remember.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                DAK Corporation is at the beginning of its journey. There is
                a lot more to build, discover, and improve.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Explore DAK Products
                </Link>

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

function CultureRow({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-lg">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-200">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function BenefitCard({
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

function CultureBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function JobCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
            {status}
          </span>
        </div>

        <p className="mt-3 max-w-2xl leading-7 text-gray-500">
          {description}
        </p>
      </div>

      <Link
        href="/contact"
        className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
      >
        Get in touch →
      </Link>
    </div>
  );
}