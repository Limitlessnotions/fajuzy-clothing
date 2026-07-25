import Image from "next/image";
import { justInProducts } from "@/data/products";

export default function JustIn() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6">

        <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.35em] text-[#D2B48C;">
          JUST IN
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 xl:grid-cols-4">

          {justInProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">

              <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F8F8]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-4">

                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#000000] transition-colors group-hover:text-[#D2B48C]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#D2B48C]">
                  {product.price}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

