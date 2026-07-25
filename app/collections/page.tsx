import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* Hero */}
        <section className="border-b border-[#E8DED2] bg-[#FAF7F2] py-24">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
              Collections
            </p>

            <h1 className="mt-5 text-5xl font-light text-[#1F1F1F]">
              Discover Every Collection
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B5B45]">
              Every collection reflects the craftsmanship, elegance, and timeless
              style that define Fajuzy.
            </p>

          </div>

        </section>

        {/* Collections */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-10 lg:grid-cols-2">

            {collections.map((collection) => (

              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group overflow-hidden"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="bg-[#FAF7F2] p-8">

                  <h2 className="text-3xl font-light">
                    {collection.name}
                  </h2>

                  <p className="mt-4 leading-7 text-[#6B5B45]">
                    {collection.description}
                  </p>

                  <span className="mt-8 inline-block uppercase tracking-widest text-[#D2B48C]">
                    Explore →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}