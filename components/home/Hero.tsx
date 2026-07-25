export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-[#F9F7F4]">
      <div className="text-center">
        <p className="mb-4 uppercase tracking-[0.35em] text-[#8B5E3C]">
          New Collection
        </p>

        <h1 className="max-w-4xl text-6xl font-light leading-tight md:text-8xl">
          Timeless Fashion
          <br />
          Crafted for Elegance
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg text-gray-600">
          Luxury pieces designed for women who value confidence,
          sophistication and timeless style.
        </p>

        <button className="mt-10 border border-black px-8 py-4 transition hover:bg-black hover:text-black">
          Shop Now
        </button>
      </div>
    </section>
  );
}