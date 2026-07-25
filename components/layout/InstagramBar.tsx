import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function InstagramBar() {
  return (
    <section className="bg-[#242424] py-5">
      <div className="mx-auto flex max-w-[1440px] justify-center px-6">
        <Link
          href="https://www.instagram.com/fajuzy?igsh=MWQ3MHFvdTQ1YzdqZQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 uppercase tracking-[0.3em] text-[#B8B8B8] transition-colors duration-300 hover:text-[#D2B48C]"
        >
          <FaInstagram
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span className="text-sm font-medium">
            Follow @fajuzy
          </span>
        </Link>
      </div>
    </section>
  );
}