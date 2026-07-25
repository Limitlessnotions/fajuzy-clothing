import Link from "next/link";

const services = [
  {
    title: "READY-TO-WEAR",
    description:
      "Luxury pieces crafted with timeless elegance for every occasion.",
    button: "Shop Collection",
    video: "/brand-4.mp4",
    reverse: false,
  },
  {
    title: "BESPOKE",
    description:
      "Custom garments designed around your style, measurements and vision.",
    button: "Book Consultation",
    video: "/brand-3.mp4",
    reverse: true,
  },
  {
    title: "BRIDAL",
    description:
      "Elegant bridal creations designed to make your special day unforgettable.",
    button: "Explore Bridal",
    video: "/brand-2.mp4",
    reverse: false,
  },
  {
    title: "GROOM STYLING",
    description:
      "Sophisticated traditional and formal wear tailored for modern gentlemen.",
    button: "Discover More",
    video: "/brand-5.mp4",
    reverse: true,
  },
];

export default function SignatureServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl space-y-28 px-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`grid items-center gap-14 lg:grid-cols-2 ${
              service.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text */}
            <div>
              <p className="mb-3 uppercase tracking-[0.35em] text-[#D2B48C]">
                Signature Service
              </p>

              <h2 className="text-5xl font-light text-black">
                {service.title}
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">
                {service.description}
              </p>

              <Link
                href="#"
                className="mt-10 inline-flex border border-black px-8 py-4 transition hover:bg-black hover:text-white"
              >
                {service.button}
              </Link>
            </div>

            {/* Video */}
            <div className="overflow-hidden rounded-sm">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
              >
                <source src={service.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}