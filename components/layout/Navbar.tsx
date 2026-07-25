"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E8DED2] bg-[#FAF7F2]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-10">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-[#5C5145] transition hover:text-[#D2B48C] lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-[#5C5145] transition hover:text-[#D2B48C]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-[0.35em] text-[#D2B48C] transition hover:opacity-80 lg:text-4xl"
          >
            FAJUZY
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3 lg:gap-5">

            {/* Hide these on mobile */}
            <button
              className="hidden text-[#5C5145] transition hover:text-[#D2B48C] md:block"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button
              className="hidden text-[#5C5145] transition hover:text-[#D2B48C] md:block"
              aria-label="Account"
            >
              <User size={20} strokeWidth={1.8} />
            </button>

            <Link
              href="/cart"
              className="relative text-[#5C5145] transition hover:text-[#D2B48C]"
              aria-label="Cart"
            >
              <ShoppingBag size={22} strokeWidth={1.8} />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D2B48C] text-[10px] font-semibold text-white">
                0
              </span>
            </Link>

            <button className="hidden rounded-md border border-[#D2B48C] px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#D2B48C] transition hover:bg-[#D2B48C] hover:text-white lg:block">
              NGN ₦
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-[70] h-screen w-[85%] max-w-sm bg-[#FAF7F2] shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E8DED2] px-6 py-6">
          <h2 className="font-serif text-2xl tracking-[0.25em] text-[#D2B48C]">
            FAJUZY
          </h2>

          <button
            onClick={() => setMobileOpen(false)}
            className="text-[#5C5145]"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-[#E8DED2] py-5 text-lg uppercase tracking-wider text-[#5C5145] transition hover:text-[#D2B48C]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-[#E8DED2] px-6 py-8">
          <div className="flex items-center gap-6 text-[#5C5145]">

            <button className="transition hover:text-[#D2B48C]">
              <Search size={22} />
            </button>

            <button className="transition hover:text-[#D2B48C]">
              <User size={22} />
            </button>

            <button className="rounded-md border border-[#D2B48C] px-4 py-2 text-xs uppercase tracking-wide text-[#D2B48C] transition hover:bg-[#D2B48C] hover:text-white">
              NGN ₦
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}