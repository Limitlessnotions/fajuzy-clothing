export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  collection: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  video?: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "purple-evening-dress",
    name: "Purple Evening Dress",
    price: 120000,
    image: "/images/products/product-1.jpg",
    images: [
      "/images/products/product-1.jpg",
      "/images/products/product-1.jpg",
    ],
    category: "Dress",
    collection: "Ready-to-Wear",
    description:
      "Elegant evening dress designed for weddings, dinners and special occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Purple"],
    isNew: true,
    video: "/brand.mp4",
  },

  {
    id: 2,
    slug: "green-maxi-dress",
    name: "Green Maxi Dress",
    price: 95000,
    image: "/images/products/product-2.jpg",
    images: [
      "/images/products/product-2.jpg",
      "/images/products/product-2.jpg",
    ],
    category: "Dress",
    collection: "Ready-to-Wear",
    description:
      "Luxury maxi dress crafted with premium fabrics and exceptional tailoring.",
    sizes: ["S", "M", "L"],
    colors: ["Green"],
    isNew: true,
    video: "/brand.mp4",
  },

  {
    id: 3,
    slug: "black-mini-dress",
    name: "Black Mini Dress",
    price: 85000,
    image: "/images/products/product-3.jpg",
    images: [
      "/images/products/product-3.jpg",
      "/images/products/product-3.jpg",
    ],
    category: "Dress",
    collection: "Ready-to-Wear",
    description:
      "Classic black mini dress suitable for casual and evening wear.",
    sizes: ["S", "M", "L"],
    colors: ["Black"],
    isNew: false,
    video: "/brand.mp4",
  },

  {
    id: 4,
    slug: "printed-gown",
    name: "Printed Gown",
    price: 140000,
    image: "/images/products/product-4.jpg",
    images: [
      "/images/products/product-4.jpg",
      "/images/products/product-4.jpg",
    ],
    category: "Gown",
    collection: "Bespoke",
    description:
      "Premium printed gown handcrafted with elegant finishing.",
    sizes: ["M", "L", "XL"],
    colors: ["Multi"],
    isNew: true,
    video: "/brand-2.mp4",
  },

  {
    id: 5,
    slug: "luxury-ankara-dress",
    name: "Luxury Ankara Dress",
    price: 105000,
    image: "/images/products/product-5.jpg",
    images: [
      "/images/products/product-5.jpg",
      "/images/products/product-5.jpg",
    ],
    category: "Ankara",
    collection: "Bespoke",
    description:
      "Luxury Ankara outfit tailored with precision and modern elegance.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ankara Print"],
    isNew: false,
    video: "/brand-2.mp4",
  },

  {
    id: 6,
    slug: "classic-kaftan",
    name: "Classic Kaftan",
    price: 90000,
    image: "/images/products/product-6.jpg",
    images: [
      "/images/products/product-6.jpg",
      "/images/products/product-6.jpg",
    ],
    category: "Kaftan",
    collection: "Ready-to-Wear",
    description:
      "Elegant kaftan designed for comfort and timeless sophistication.",
    sizes: ["M", "L", "XL"],
    colors: ["Cream"],
    isNew: false,
    video: "/brand.mp4",
  },

  {
    id: 7,
    slug: "elegant-two-piece",
    name: "Elegant Two Piece",
    price: 135000,
    image: "/images/products/product-7.jpg",
    images: [
      "/images/products/product-7.jpg",
      "/images/products/product-7.jpg",
    ],
    category: "Two Piece",
    collection: "Ready-to-Wear",
    description:
      "Stylish two-piece outfit combining elegance with modern fashion.",
    sizes: ["S", "M", "L"],
    colors: ["Beige"],
    isNew: true,
    video: "/brand-2.mp4",
  },

  {
    id: 8,
    slug: "floral-maxi-dress",
    name: "Floral Maxi Dress",
    price: 115000,
    image: "/images/products/product-8.jpg",
    images: [
      "/images/products/product-8.jpg",
      "/images/products/product-8.jpg",
    ],
    category: "Dress",
    collection: "Ready-to-Wear",
    description:
      "Beautiful floral maxi dress crafted for effortless elegance.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Floral"],
    isNew: true,
    video: "/brand.mp4",
  },
];

/**
 * Homepage Products
 */
export const justInProducts = products.slice(0, 8);

/**
 * Collections
 */
export const readyToWearProducts = products.filter(
  (product) => product.collection === "Ready-to-Wear"
);

export const bespokeProducts = products.filter(
  (product) => product.collection === "Bespoke"
);

export const bridalProducts = products.filter(
  (product) => product.collection === "Bridal"
);

/**
 * Featured Products
 */
export const featuredProducts = products.filter(
  (product) => product.isNew
);