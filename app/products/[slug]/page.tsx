import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { products } from "@/data/products";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* Breadcrumb */}

      <section className="border-b py-6">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href="/shop"
            className="text-sm text-gray-600 hover:text-black"
          >
            ← Back to Shop
          </Link>

        </div>
      </section>

      {/* Product */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Images */}

          <div>

            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="mt-6 grid grid-cols-4 gap-4">

              {product.images.map((image, index) => (

                <div
                  key={index}
                  className="relative aspect-square overflow-hidden bg-gray-100"
                >

                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                </div>

              ))}

            </div>

          </div>

          {/* Details */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
              {product.collection}
            </p>

            <h1 className="mt-4 text-5xl font-light">
              {product.name}
            </h1>

            <p className="mt-8 text-3xl font-medium text-[#D2B48C]">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="mt-10 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Sizes */}

            <div className="mt-12">

              <h3 className="mb-4 font-semibold">
                Size
              </h3>

              <div className="flex gap-3">

                {product.sizes.map((size) => (

                  <button
                    key={size}
                    className="border px-5 py-3 hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            {/* Colors */}

            <div className="mt-10">

              <h3 className="mb-4 font-semibold">
                Color
              </h3>

              <div className="flex gap-3">

                {product.colors.map((color) => (

                  <span
                    key={color}
                    className="rounded-full border px-4 py-2"
                  >
                    {color}
                  </span>

                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-14 flex gap-4">

              <button className="flex-1 bg-black py-4 text-white transition hover:bg-[#D2B48C]">
                Add to Cart
              </button>

              <button className="flex-1 border border-black py-4 transition hover:bg-black hover:text-white">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}