import Link from "next/link";

export default function DAKFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex"
              aria-label="DAK Corporation home"
            >
              <img
                src="/dak-logo.svg"
                alt="DAK Corporation"
                className="h-11 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
              DAK Corporation builds intelligent technology and AI-powered
              products designed to solve meaningful business problems.
            </p>

            <p className="mt-5 text-sm text-gray-600">
              Building intelligent technology for the businesses of tomorrow.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Company
            </p>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/about"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/technology"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                Technology
              </Link>

              <Link
                href="/careers"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Products
            </p>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/products"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                BizAI Employee
              </Link>

              <Link
                href="/products"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                AI Business Tools
              </Link>

              <Link
                href="/products"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                Future Products
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-6">
          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 transition hover:text-gray-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-gray-600 transition hover:text-gray-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-gray-600 transition hover:text-gray-300"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Copyright + navigation */}
          <div className="flex flex-col gap-5 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DAK Corporation. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/"
                className="transition hover:text-gray-300"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="transition hover:text-gray-300"
              >
                Products
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-gray-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}