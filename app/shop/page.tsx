import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/shop/ProductGrid";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-[#E8DED2] bg-[#FAF7F2] py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
              Shop
            </p>

            <h1 className="mt-5 text-5xl font-light text-[#1F1F1F]">
              Discover Our Collection
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B5B45]">
              Explore our latest ready-to-wear, bespoke and bridal collections,
              crafted with elegance, precision, and timeless style.
            </p>
          </div>
        </section>

        <ProductGrid products={products} />
      </main>
    </>
  );
}