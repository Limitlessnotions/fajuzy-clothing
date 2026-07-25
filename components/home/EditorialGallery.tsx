import Image from "next/image";

const images = [
  "/images/home/hero-1.jpg",
  "/images/home/hero-2.jpg",
  "/images/home/hero-3.jpg",
  "/images/home/hero-4.jpg",
];

export default function EditorialGallery() {
  return (
    <section className="bg-white px-4 pt-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[720px] overflow-hidden"
          >
            <Image
              src={image}
              alt={`Editorial ${index + 1}`}
              fill
              priority={index < 2}
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}