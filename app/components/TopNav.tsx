"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const baseItem =
  "relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold tracking-tight transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
const hoverItem =
  "text-black hover:bg-black/[.04] hover:text-black hover:shadow-sm hover:-translate-y-[1px] active:translate-y-0";
const activeItem =
  "text-black bg-green-600/10 shadow-sm ring-1 ring-green-600/25";

function NavItem({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cx(baseItem, hoverItem, isActive && activeItem)}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={cx(
          "absolute left-3 right-3 -bottom-[6px] h-[2px] rounded-full bg-green-600 transition-opacity",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
    </Link>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatches by not applying active states
  // until after the component mounts on the client.
  const effectivePath = mounted ? pathname ?? "/" : "/";
  const isProducts =
    effectivePath === "/products" ||
    effectivePath.startsWith("/products/");

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full px-2 py-2 text-lg font-bold tracking-tight text-black transition-colors hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
            <Image
              src="/images/logo new.png"
              alt="Ubuntu Afyalink logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:inline text-lg">
            <span className="text-green-600">Ubuntu</span>{" "}
            <span className="text-black">Afyalink</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem href="/" label="Home" isActive={effectivePath === "/"} />
          <NavItem
            href="/about"
            label="About Us"
            isActive={effectivePath === "/about"}
          />

          <div className="relative group">
            <button
              type="button"
              className={cx(baseItem, hoverItem, isProducts && activeItem)}
              aria-haspopup="menu"
              aria-current={isProducts ? "page" : undefined}
            >
              <span>Solutions</span>
              <span
                aria-hidden="true"
                className="text-black/70 transition-transform group-hover:translate-y-[1px]"
              >
                ▾
              </span>
              <span
                aria-hidden="true"
                className={cx(
                  "absolute left-3 right-3 -bottom-[6px] h-[2px] rounded-full bg-green-600 transition-opacity",
                  isProducts ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
            <div
              className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all absolute left-0 top-full mt-3 w-56 rounded-2xl border border-black/10 bg-white shadow-xl"
              role="menu"
            >
              <div className="p-2">
                <Link
                  href="/products/afyasolar"
                  className={cx(
                    "block rounded-xl px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-50 hover:text-green-800 focus:bg-green-50 focus:text-green-800 focus:outline-none"
                  )}
                  role="menuitem"
                >
                  Afyasolar
                </Link>
                <Link
                  href="/products/afyabooking"
                  className={cx(
                    "block rounded-xl px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-50 hover:text-green-800 focus:bg-green-50 focus:text-green-800 focus:outline-none"
                  )}
                  role="menuitem"
                >
                  AfyaBooking AI
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            aria-current={effectivePath === "/contact" ? "page" : undefined}
            className={cx(
              "btn-bounce ml-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              "bg-green-600 text-white shadow-sm hover:bg-green-700 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
              effectivePath === "/contact" && "ring-2 ring-green-600 ring-offset-2"
            )}
          >
            Talk to Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-black hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger icon */}
          <svg
            className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* Close icon */}
          <svg
            className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
          <Link
            href="/"
            className={cx(
              "block rounded-lg px-3 py-2 text-base font-medium",
              effectivePath === "/" 
                ? "bg-green-50 text-green-700 border-l-4 border-green-700" 
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cx(
              "block rounded-lg px-3 py-2 text-base font-medium",
              effectivePath === "/about" 
                ? "bg-green-50 text-green-700 border-l-4 border-green-700" 
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          
          {/* Mobile Solutions Dropdown */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              aria-expanded={productsDropdownOpen}
            >
              <span>Solutions</span>
              <svg
                className={`${productsDropdownOpen ? 'rotate-180' : ''} h-5 w-5 transform transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${productsDropdownOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
              <Link
                href="/products/afyasolar"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Afyasolar
              </Link>
              <Link
                href="/products/afyabooking"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                AfyaBooking AI
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className={cx(
              "block rounded-lg px-3 py-2 text-base font-medium",
              effectivePath === "/contact" 
                ? "bg-green-50 text-green-700 border-l-4 border-green-700" 
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Talk to Us
          </Link>
          
          {/* Legal Links */}
          <div className="pt-2 mt-2 border-t border-gray-200">
            <Link
              href="/privacy-policy"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      </div>

    </header>
  );
}

