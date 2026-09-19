import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for DAK Corporation and its websites and digital products.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* Page header */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-40 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
          Legal
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: September 2026
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          DAK Corporation respects your privacy and is committed to handling
          personal information responsibly. This Privacy Policy explains how
          information may be collected, used, stored, and protected when you
          interact with DAK Corporation websites, products, and services.
        </p>
      </section>

      {/* Policy content */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="space-y-14">
            <PolicySection title="1. Information we may collect">
              <p>
                Depending on how you interact with DAK Corporation, we may
                collect information that you provide directly, such as your
                name, email address, company information, and messages
                submitted through contact forms.
              </p>

              <p>
                When you use one of our digital products, additional
                information may be collected as necessary to provide and
                secure the service.
              </p>

              <p>
                We may also collect technical information such as browser
                type, device information, approximate usage information, and
                website interaction data where appropriate.
              </p>
            </PolicySection>

            <PolicySection title="2. How we use information">
              <p>
                Information may be used to:
              </p>

              <ul>
                <li>Respond to enquiries and communication requests.</li>
                <li>Provide, operate, and improve our products and services.</li>
                <li>Maintain security and prevent misuse.</li>
                <li>Understand how our websites and products are used.</li>
                <li>Communicate important service or business information.</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Information sharing">
              <p>
                DAK Corporation does not sell personal information as part of
                its ordinary business operations.
              </p>

              <p>
                Information may be shared with service providers or technology
                partners when reasonably necessary to operate our websites,
                communication systems, infrastructure, analytics, or other
                services.
              </p>

              <p>
                We may also disclose information when required by applicable
                law, legal process, or to protect the rights, security, and
                integrity of our services.
              </p>
            </PolicySection>

            <PolicySection title="4. Data security">
              <p>
                We take reasonable technical and organizational measures to
                protect information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <p>
                However, no internet transmission or electronic storage system
                can be guaranteed to be completely secure.
              </p>
            </PolicySection>

            <PolicySection title="5. Data retention">
              <p>
                We retain information for as long as reasonably necessary for
                the purpose for which it was collected, to provide services,
                resolve disputes, maintain records, or meet applicable legal
                obligations.
              </p>
            </PolicySection>

            <PolicySection title="6. Cookies and similar technologies">
              <p>
                Our websites may use cookies or similar technologies to
                support functionality, improve user experience, understand
                website usage, and maintain security.
              </p>

              <p>
                The specific cookies or technologies used may vary depending
                on the website and services involved.
              </p>
            </PolicySection>

            <PolicySection title="7. Third-party services">
              <p>
                Our websites and products may rely on third-party services for
                functions such as hosting, authentication, payments,
                communication, analytics, or AI functionality.
              </p>

              <p>
                Those third parties may process information according to
                their own privacy policies and applicable agreements.
              </p>
            </PolicySection>

            <PolicySection title="8. Your choices and rights">
              <p>
                Depending on your location and applicable law, you may have
                rights relating to your personal information, including the
                ability to request access, correction, deletion, or other
                forms of privacy-related assistance.
              </p>

              <p>
                You can contact DAK Corporation using the contact information
                provided on our website to make a privacy-related request.
              </p>
            </PolicySection>

            <PolicySection title="9. Children's privacy">
              <p>
                Our services are not intentionally designed to collect
                personal information from children who are not legally
                permitted to use those services.
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our services, practices, or legal requirements.
              </p>

              <p>
                When changes are made, the updated version will be published
                on this page with a revised update date.
              </p>
            </PolicySection>

            <PolicySection title="11. Contact">
              <p>
                For privacy questions or requests, contact DAK Corporation
                through our website.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  DAK Corporation
                </p>

                <p className="mt-3 text-sm text-gray-300">
                  Email: hello@dakcorporation.com
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Please replace the email above with your final official
                  company contact address before publishing this policy.
                </p>
              </div>
            </PolicySection>
          </div>

          {/* Bottom navigation */}
          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              ← Back to DAK Corporation
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

function PolicySection({
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