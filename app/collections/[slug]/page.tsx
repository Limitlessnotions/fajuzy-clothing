import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/shop/ProductGrid";

import { products } from "@/data/products";

interface Props {
  params: {
    slug: string;
  };
}

const collectionMap: Record<string, string> = {
  "ready-to-wear": "Ready-to-Wear",
  bespoke: "Bespoke",
  bridal: "Bridal",
  accessories: "Accessories",
};

export default function CollectionPage({ params }: Props) {
  const collectionName = collectionMap[params.slug];

  if (!collectionName) {
    notFound();
  }

  const collectionProducts = products.filter(
    (product) => product.collection === collectionName
  );

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* Hero */}

        <section className="border-b border-[#E8DED2] bg-[#FAF7F2] py-24">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <Link
              href="/collections"
              className="uppercase tracking-[0.35em] text-[#D2B48C]"
            >
              ← Collections
            </Link>

            <h1 className="mt-6 text-5xl font-light text-[#1F1F1F]">
              {collectionName}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6B5B45]">
              Explore our {collectionName.toLowerCase()} collection,
              crafted with elegance, precision and timeless style.
            </p>

          </div>

        </section>

        {collectionProducts.length > 0 ? (
          <ProductGrid products={collectionProducts} />
        ) : (
          <section className="py-32 text-center">

            <h2 className="text-3xl font-light">
              No products yet
            </h2>

            <p className="mt-4 text-[#6B5B45]">
              This collection will be available soon.
            </p>

          </section>
        )}

      </main>

      <Footer />
    </>
  );
}