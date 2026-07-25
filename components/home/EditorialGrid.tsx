import Image from "next/image";

const collections = [
  {
    image: "/images/home/hero-1.jpg",
    title: "DRESSES",
  },
  {
    image: "/images/home/hero-2.jpg",
    title: "SKIRT SETS",
  },
  {
    image: "/images/home/hero-3.jpg",
    title: "PANT SETS",
  },
  {
    image: "/images/home/hero-4.jpg",
    title: "JUMPSUITS",
  },
];

export default function EditorialGrid() {
  return (
    <section className="bg-white px-4 pt-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {collections.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-[3/5] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Category Label */}
            <div className="absolute bottom-5 right-5 bg-white px-3 py-1.5 shadow-sm">
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-black">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}