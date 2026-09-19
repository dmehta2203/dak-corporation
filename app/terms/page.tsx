import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for DAK Corporation websites and digital products.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: September 2026
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          These Terms of Service describe the general terms that apply when
          you access or use websites, software, products, and services
          provided by DAK Corporation.
        </p>
      </section>

      {/* Content */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="space-y-14">
            <TermsSection title="1. Acceptance of these terms">
              <p>
                By accessing or using a DAK Corporation website or service,
                you acknowledge that you have read and understood these Terms
                of Service and agree to comply with them.
              </p>

              <p>
                If you do not agree with these terms, please do not use the
                relevant service.
              </p>
            </TermsSection>

            <TermsSection title="2. Our services">
              <p>
                DAK Corporation develops and provides software, AI-powered
                products, websites, and related digital services.
              </p>

              <p>
                Individual products may have additional terms, pricing,
                feature limitations, usage requirements, or documentation that
                apply specifically to those products.
              </p>
            </TermsSection>

            <TermsSection title="3. Accounts">
              <p>
                Some DAK products may require you to create an account. You
                are responsible for providing accurate information and keeping
                your account credentials secure.
              </p>

              <p>
                You are responsible for activity performed through your
                account unless applicable law provides otherwise.
              </p>
            </TermsSection>

            <TermsSection title="4. Acceptable use">
              <p>
                You agree not to use our services in ways that:
              </p>

              <ul>
                <li>
                  Violate applicable laws or regulations.
                </li>

                <li>
                  Attempt to gain unauthorized access to systems,
                  accounts, or data.
                </li>

                <li>
                  Interfere with or disrupt the operation of our services.
                </li>

                <li>
                  Abuse, exploit, or intentionally overload our systems.
                </li>

                <li>
                  Misuse our services to infringe the rights of others.
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="5. AI-generated information">
              <p>
                Some DAK products may use artificial intelligence to generate
                text, recommendations, insights, or other outputs.
              </p>

              <p>
                AI-generated output may contain errors, omissions, or
                information that requires verification. You are responsible
                for reviewing outputs and determining whether they are
                appropriate for your specific situation.
              </p>

              <p>
                AI features should not be treated as a replacement for
                professional legal, financial, medical, security, or other
                specialized advice where such advice is required.
              </p>
            </TermsSection>

            <TermsSection title="6. User content and business data">
              <p>
                You remain responsible for information, files, messages,
                customer information, and other content that you submit to a
                DAK service.
              </p>

              <p>
                You should only provide information that you are authorized to
                provide and use.
              </p>
            </TermsSection>

            <TermsSection title="7. Third-party services">
              <p>
                Our websites and products may integrate with third-party
                services such as payment providers, communication platforms,
                hosting providers, analytics services, or AI infrastructure.
              </p>

              <p>
                Your use of a third-party service may also be subject to that
                provider's own terms and policies.
              </p>
            </TermsSection>

            <TermsSection title="8. Payments and subscriptions">
              <p>
                Some DAK products may be offered through paid subscriptions or
                other paid plans.
              </p>

              <p>
                Pricing, billing cycles, taxes, payment processing,
                cancellation terms, renewal conditions, and available
                features may vary by product or plan and will be presented
                through the applicable service.
              </p>

              <p>
                Payment processing may be handled by third-party payment
                providers.
              </p>
            </TermsSection>

            <TermsSection title="9. Intellectual property">
              <p>
                Unless otherwise stated, DAK Corporation and its licensors
                retain rights in the websites, software, branding, visual
                designs, documentation, logos, and other materials provided by
                DAK.
              </p>

              <p>
                You may not copy, reproduce, modify, distribute, or exploit
                protected DAK materials except as permitted by applicable law
                or written permission.
              </p>
            </TermsSection>

            <TermsSection title="10. Service availability">
              <p>
                We aim to keep our services reliable and available, but we do
                not guarantee that every service will always be uninterrupted,
                error-free, or available at all times.
              </p>

              <p>
                Maintenance, updates, technical issues, security events, or
                circumstances outside our reasonable control may temporarily
                affect availability.
              </p>
            </TermsSection>

            <TermsSection title="11. Account suspension or termination">
              <p>
                DAK Corporation may restrict, suspend, or terminate access to a
                service where reasonably necessary to protect the service,
                users, or systems, or where there is a violation of applicable
                terms.
              </p>

              <p>
                Where appropriate, additional product-specific termination
                terms may apply.
              </p>
            </TermsSection>

            <TermsSection title="12. Disclaimers">
              <p>
                Our services are provided on an "as available" basis to the
                extent permitted by applicable law.
              </p>

              <p>
                We do not guarantee that information or AI-generated outputs
                will always be complete, accurate, current, or suitable for
                every particular purpose.
              </p>
            </TermsSection>

            <TermsSection title="13. Limitation of liability">
              <p>
                To the maximum extent permitted by applicable law, DAK
                Corporation will not be responsible for losses or damages
                arising from use of a service beyond the liability that cannot
                legally be excluded or limited.
              </p>

              <p>
                Product-specific agreements may contain additional or
                different liability terms.
              </p>
            </TermsSection>

            <TermsSection title="14. Changes to the service or terms">
              <p>
                We may update, modify, suspend, or discontinue portions of a
                service as our products evolve.
              </p>

              <p>
                We may also update these Terms of Service. Updated terms will
                be published on this page with a revised update date.
              </p>
            </TermsSection>

            <TermsSection title="15. Governing law">
              <p>
                The legal terms applicable to a particular DAK service,
                including governing law and dispute procedures, may be
                specified in the relevant product agreement or other
                applicable documentation.
              </p>

              <p>
                The final published version of these terms should be reviewed
                and approved for DAK Corporation's actual business structure
                and jurisdiction before being relied upon as a legal
                agreement.
              </p>
            </TermsSection>

            <TermsSection title="16. Contact">
              <p>
                Questions about these Terms of Service can be directed to DAK
                Corporation through the contact page on our website.
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
            </TermsSection>
          </div>

          {/* Navigation */}
          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row">
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

function TermsSection({
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