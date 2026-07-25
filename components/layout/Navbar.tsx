import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DED2] bg-[#FAF7F2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Left Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-wider text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-sm font-medium uppercase tracking-wider text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
          >
            Shop
          </Link>

          <Link
            href="/collections"
            className="text-sm font-medium uppercase tracking-wider text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
          >
            Collections
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-wider text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium uppercase tracking-wider text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
          >
            Contact
          </Link>

        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-4xl font-semibold tracking-[0.35em] text-[#D2B48C] transition duration-300 hover:opacity-80"
        >
          FAJUZY
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button
            className="text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            className="text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
            aria-label="Account"
          >
            <User size={20} strokeWidth={1.8} />
          </button>

          <Link
            href="/cart"
            className="relative text-[#5C5145] transition-colors duration-300 hover:text-[#D2B48C]"
            aria-label="Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D2B48C] text-[10px] font-semibold text-white">
              0
            </span>
          </Link>

          <button className="rounded-md border border-[#D2B48C] px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#D2B48C] transition-all duration-300 hover:bg-[#D2B48C] hover:text-white">
            NGN ₦
          </button>

        </div>

      </div>
    </header>
  );
}