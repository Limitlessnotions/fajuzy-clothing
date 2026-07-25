export default function BrandFilm() {
  return (
    <section className="relative h-[85vh] overflow-hidden">

     <video
  controls
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/brand.mp4" type="video/mp4" />
</video>

      

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">

          <p className="mb-4 tracking-[0.4em] uppercase text-[#D2B48C]">
            FAJUZY
          </p>

          <h2 className="text-6xl font-light">
            Crafted For Timeless Elegance
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/90">
            Fashion designed with precision, confidence and elegance.
          </p>

        </div>
      </div>

    </section>
  );
}