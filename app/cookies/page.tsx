import Link from "next/link";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for DAK Corporation websites and digital services.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-40 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
          Legal
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
          Cookie Policy
        </h1>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: September 2026
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          This Cookie Policy explains how DAK Corporation may use cookies and
          similar technologies on its websites and digital services.
        </p>
      </section>

      {/* Content */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="space-y-14">
            <CookieSection title="1. What are cookies?">
              <p>
                Cookies are small text files that websites may place on your
                device when you visit them. They can help websites remember
                information, provide functionality, maintain sessions, and
                understand how services are being used.
              </p>

              <p>
                Similar technologies, such as local storage or other
                identifiers, may also be used for related purposes.
              </p>
            </CookieSection>

            <CookieSection title="2. How DAK may use cookies">
              <p>
                Depending on the website or product, DAK Corporation may use
                cookies or similar technologies to:
              </p>

              <ul>
                <li>Keep websites and services functioning correctly.</li>
                <li>Maintain login or session information.</li>
                <li>Remember user preferences and settings.</li>
                <li>Improve website performance and user experience.</li>
                <li>Understand website usage and product interaction.</li>
                <li>Support security and prevent misuse.</li>
              </ul>
            </CookieSection>

            <CookieSection title="3. Types of cookies">
              <div className="space-y-6">
                <CookieType
                  title="Essential cookies"
                  text="These may be necessary for core website or application functionality, security, authentication, or navigation."
                />

                <CookieType
                  title="Preference cookies"
                  text="These may remember settings or preferences to provide a more convenient experience."
                />

                <CookieType
                  title="Analytics cookies"
                  text="Where used, these may help us understand how visitors interact with our websites and identify areas for improvement."
                />

                <CookieType
                  title="Third-party cookies"
                  text="Some third-party services integrated into our websites may place their own cookies or use similar technologies."
                />
              </div>
            </CookieSection>

            <CookieSection title="4. Third-party services">
              <p>
                DAK websites or products may use services provided by external
                companies for functions such as hosting, analytics,
                authentication, payments, communication, or other technology
                services.
              </p>

              <p>
                These providers may use cookies or similar technologies
                according to their own policies and configurations.
              </p>
            </CookieSection>

            <CookieSection title="5. Managing cookies">
              <p>
                Most modern web browsers allow you to view, block, delete, or
                otherwise manage cookies through their settings.
              </p>

              <p>
                Disabling certain cookies may affect the functionality or
                availability of some parts of a website or service.
              </p>
            </CookieSection>

            <CookieSection title="6. Cookies on BizAI">
              <p>
                DAK Corporation's products, including BizAI Employee, may use
                cookies, browser storage, or related technologies where
                required for authentication, security, preferences, and
                application functionality.
              </p>

              <p>
                The specific technologies used can vary as the product
                develops.
              </p>
            </CookieSection>

            <CookieSection title="7. Changes to this policy">
              <p>
                We may update this Cookie Policy as our websites, products,
                technologies, or practices change.
              </p>

              <p>
                The updated version will be published on this page with a
                revised update date.
              </p>
            </CookieSection>

            <CookieSection title="8. Contact">
              <p>
                Questions about cookies or privacy can be directed to DAK
                Corporation through our contact page.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  DAK Corporation
                </p>

                <p className="mt-3 text-sm text-gray-300">
                  Email: hello@dakcorporation.com
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Replace this with your final official company contact
                  address before publishing.
                </p>
              </div>
            </CookieSection>

            <div className="rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-6">
              <p className="text-sm leading-7 text-gray-400">
                This Cookie Policy is a general website template. Before
                publishing the DAK Corporation website, we should update it
                to match the actual cookies, analytics tools, authentication
                systems, advertising technologies, and third-party services
                that the production website uses.
              </p>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              ← Back to DAK Corporation
            </Link>

            <Link
              href="/privacy"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Contact DAK
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CookieSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-base leading-8 text-gray-400">
        {children}
      </div>
    </section>
  );
}

function CookieType({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="text-lg font-semibold text-gray-200">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}