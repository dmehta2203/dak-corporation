"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Technology", href: "/technology" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const bizAIUrl =
  process.env.NEXT_PUBLIC_BIZAI_URL || "http://localhost:3001";

export default function DAKNavbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE NAVBAR
          ===================================================== */}
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#050507]/85 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent backdrop-blur-[2px]"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* =================================================
              DAK LOGO
              ================================================= */}
          <Link
            href="/"
            aria-label="DAK Corporation home"
            className="group flex shrink-0 items-center"
          >
            <img
              src="/dak-logo.svg"
              alt="DAK Corporation"
              className="h-10 w-auto object-contain transition duration-300 group-hover:scale-[1.02] sm:h-11"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-sm font-medium transition duration-300 ${
                    active
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP BIZAI CTA
              ================================================= */}
          <a
            href={bizAIUrl}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-white/5 transition duration-300 hover:scale-[1.02] hover:bg-gray-100 md:block"
          >
            Launch BizAI →
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition duration-300 hover:border-white/20 hover:bg-white/[0.08] md:hidden"
          >
            <div className="relative h-5 w-5">
              {/* Top line */}
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-[7px]"
                }`}
              />

              {/* Middle line */}
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-white transition-all duration-200 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              {/* Bottom line */}
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-[7px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
          ===================================================== */}
      <div
        className={`fixed inset-0 z-[90] md:hidden ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* =================================================
            MOBILE SIDE PANEL
            ================================================= */}
        <div
          className={`absolute right-0 top-[76px] h-[calc(100vh-76px)] w-full max-w-sm border-l border-white/10 bg-[#08080c] shadow-2xl transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 py-6">
            {/* Mobile navigation */}
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border-b border-white/5 py-5 text-base font-medium transition duration-300 ${
                      active
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition ${
                          active
                            ? "bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]"
                            : "bg-transparent"
                        }`}
                      />

                      {item.name}
                    </span>

                    <span
                      className={`text-sm transition ${
                        active
                          ? "text-violet-300"
                          : "text-gray-700"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile BizAI CTA */}
            <a
              href={bizAIUrl}
              onClick={() => setMenuOpen(false)}
              className="mt-8 rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black shadow-lg shadow-white/5 transition duration-300 hover:bg-gray-100"
            >
              Launch BizAI →
            </a>

            {/* Mobile brand information */}
            <div className="mt-auto border-t border-white/10 pt-8">
              <img
                src="/dak-logo.svg"
                alt="DAK Corporation"
                className="h-9 w-auto"
              />

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Building intelligent technology for the businesses of
                tomorrow.
              </p>

              <p className="mt-4 text-xs leading-5 text-gray-700">
                DAK Corporation • Intelligent software & AI products
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}