import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f8f8f8]">

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute left-4 top-4 bg-black px-3 py-1 text-xs uppercase tracking-wider text-white">
            New
          </span>
        )}

      </div>

      <div className="mt-5">

        <h3 className="text-sm font-semibold uppercase tracking-wide text-black transition group-hover:text-[#D2B48C]">
          {product.name}
        </h3>

        <p className="mt-2 font-medium text-[#D2B48C]">
          ₦{product.price.toLocaleString()}
        </p>

      </div>
    </Link>
  );
}