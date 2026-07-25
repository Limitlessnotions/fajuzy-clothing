import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type ProductGridProps = {
  title: string;
  products: Product[];
};

export default function ProductGrid({
  title,
  products,
}: ProductGridProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6">

        <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.35em]">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (
            <div key={product.id} className="group">

              <div className="relative aspect-[3/4] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-4">

                <h3 className="text-[13px] font-semibold uppercase">
                  {product.name}
                </h3>

                <p className="mt-2 text-[#D2B48C]">
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