export default function BrandFilm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-sm">

          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="h-[700px] w-full object-cover"
          >
            <source
              src="/brand.MP4"
              type="video/mp4"
            />
          </video>

        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
            THE FAJUZY EXPERIENCE
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Crafted For Women Who Love Elegance
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            Every stitch, every silhouette and every detail is created to
            celebrate confidence, sophistication and timeless beauty.
          </p>

        </div>

      </div>
    </section>
  );
}