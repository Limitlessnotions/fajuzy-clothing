import Image from "next/image";

export default function NewsletterBanner() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image
        src="/images/home/mail.png"
        alt="Newsletter"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-xl text-center text-white">
          <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
            Stay Connected
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Join The Fajuzy Community
          </h2>

          <p className="mt-6 text-lg leading-8">
            Be the first to discover new collections, exclusive releases and
            bespoke fashion experiences.
          </p>
        </div>
      </div>
    </section>
  );
}