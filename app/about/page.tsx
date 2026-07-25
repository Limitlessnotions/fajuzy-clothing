import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrandFilm from "@/components/home/BrandFilm";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* Hero */}
        <section className="border-b border-[#E8DED2] bg-[#FAF7F2] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
              About Fajuzy
            </p>

            <h1 className="mt-6 text-5xl font-light text-[#1F1F1F]">
              Fashion Crafted with Elegance.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B5B45]">
              At Fajuzy, every piece is thoughtfully designed to celebrate
              confidence, beauty and timeless sophistication. We believe luxury
              is not just what you wear—it is how you feel.
            </p>

          </div>
        </section>

        {/* Editorial Image */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="relative aspect-[16/8] overflow-hidden rounded-sm">

            <Image
              src="/images/home/story.jpg"
              alt="Fajuzy Story"
              fill
              className="object-cover"
            />

          </div>

        </section>

        {/* Story */}
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <h2 className="text-4xl font-light">
            Our Story
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-[#6B5B45]">

            <p>
              Fajuzy was founded with a simple vision—to create fashion that
              combines timeless elegance with exceptional craftsmanship.
            </p>

            <p>
              Every garment is thoughtfully designed and expertly tailored using
              premium fabrics, ensuring each client experiences confidence,
              comfort and sophistication.
            </p>

            <p>
              From bespoke bridal wear to ready-to-wear collections, every
              design reflects our commitment to quality, creativity and lasting
              style.
            </p>

          </div>

        </section>

        {/* Philosophy */}
        <section className="bg-[#FAF7F2] py-24">

          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-3">

            <div>

              <h3 className="text-2xl font-light text-[#D2B48C]">
                Craftsmanship
              </h3>

              <p className="mt-4 leading-8 text-[#6B5B45]">
                Every stitch reflects attention to detail and uncompromising
                quality.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-light text-[#D2B48C]">
                Elegance
              </h3>

              <p className="mt-4 leading-8 text-[#6B5B45]">
                Timeless designs that remain stylish season after season.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-light text-[#D2B48C]">
                Individuality
              </h3>

              <p className="mt-4 leading-8 text-[#6B5B45]">
                Fashion designed to celebrate every client's unique personality.
              </p>

            </div>

          </div>

        </section>

        {/* Brand Film */}
        <BrandFilm />

        {/* CTA */}
        <section className="py-24">

          <div className="mx-auto max-w-3xl px-6 text-center">

            <h2 className="text-4xl font-light">
              Experience the Fajuzy Difference
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B5B45]">
              Discover collections crafted with elegance and designed to make
              every occasion unforgettable.
            </p>

            <Link
              href="/shop"
              className="mt-10 inline-block rounded-md bg-[#D2B48C] px-10 py-4 text-white transition hover:bg-[#C8A97E]"
            >
              Shop Collection
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}