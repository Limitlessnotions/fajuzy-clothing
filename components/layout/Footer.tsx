import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">

          {/* Brand */}
          <div className="max-w-[320px]">
            <h2 className="mb-8 text-5xl font-serif font-semibold">
              FAJUZY
            </h2>

            <p className="text-[16px] leading-9 text-gray-300">
              We are a ready-to-wear fashion brand creating timeless pieces
              for confident women. Every collection is designed with elegance,
              quality and attention to detail.
            </p>

            <div className="mt-10 flex gap-6">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🎵</a>
            </div>

            <p className="mt-10 text-sm text-gray-400">
              © 2026 FAJUZY Clothing Brand
            </p>
          </div>

          {/* Links */}
          <div>

            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
              QUICK LINKS
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>Shipping & Returns</li>
              <li>Support</li>
            </ul>

            <h3 className="mb-6 mt-12 text-sm font-bold uppercase tracking-[0.2em]">
              HOT CATEGORIES
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>Dresses</li>
              <li>Short Sets</li>
              <li>Jumpsuits</li>
              <li>Pant Sets</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
              CONTACT INFO
            </h3>

            <div className="space-y-6 text-gray-300">

              <div>
                <strong className="text-white">Phone</strong>
                <p className="mt-1">+234 810 089 2502</p>
              </div>

              <div>
                <strong className="text-white">Email</strong>
                <p className="mt-1">info@fajuzy.com</p>
              </div>

              <div>
                <strong className="text-white">Store Hours</strong>
                <p className="mt-1">
                  Monday – Saturday
                  <br />
                  Opens: 9:00 AM
                </p>
              </div>

              <div>
                <strong className="text-white">Address</strong>

                <p className="mt-1 leading-7">
                  Shop 5, Chris Shopping Mall,
                  <br />
                  Leha Road,
                  <br />
                  Behind City College of Education,
                  <br />
                  New Karu,
                  <br />
                  Federal Capital Territory.
                </p>
              </div>

            </div>

            <div className="mt-10">
              <Image
                src="/images/payment.png"
                alt="Payment Methods"
                width={260}
                height={45}
              />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}