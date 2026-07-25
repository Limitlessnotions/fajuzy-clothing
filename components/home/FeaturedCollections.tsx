import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "BRIDAL",
    subtitle: "Elegant designs for unforgettable moments.",
    image: "/images/home/hero-3.jpg",
    href: "/collections/bridal",
  },
  {
    title: "READY TO WEAR",
    subtitle: "Timeless fashion for everyday elegance.",
    image: "/images/home/hero-1.jpg",
    href: "/collections/ready-to-wear",
  },
  {
    title: "BESPOKE",
    subtitle: "Tailored exclusively for you.",
    image: "/images/home/hero-4.jpg",
    href: "/collections/bespoke",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-[#faf8f6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
            FEATURED COLLECTIONS
          </p>

          <h2 className="mt-4 text-5xl font-light text-black">
            Discover Our Signature Styles
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group overflow-hidden bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-light">
                  {collection.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {collection.subtitle}
                </p>

                <span className="mt-8 inline-block border-b border-black pb-1">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}