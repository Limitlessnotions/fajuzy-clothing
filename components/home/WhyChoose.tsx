export default function WhyChoose() {
  const features = [
    {
      title: "Ready-to-Wear",
      description:
        "Luxury collections crafted for women who appreciate effortless elegance.",
    },
    {
      title: "Bespoke Tailoring",
      description:
        "Custom-made outfits designed and tailored to your exact measurements.",
    },
    {
      title: "Bridal & Groom",
      description:
        "Elegant wedding outfits created to make your special day unforgettable.",
    },
    {
      title: "Premium Craftsmanship",
      description:
        "Every piece is finished with exceptional attention to detail and quality.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#D2B48C]">
            WHY CHOOSE FAJUZY
          </p>

          <h2 className="text-5xl font-light text-black">
            Fashion Designed Around You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're shopping our ready-to-wear collections or looking
            for a custom-made masterpiece, every Fajuzy creation is designed
            to celebrate confidence, elegance, and individuality.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-t-2 border-[#D2B48C] pt-6"
            >
              <h3 className="mb-4 text-2xl font-medium text-black">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}