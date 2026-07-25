import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-[#E8DED2] bg-[#FAF7F2] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
              Contact Us
            </p>

            <h1 className="mt-6 text-5xl font-light text-[#1F1F1F]">
              We'd Love to Hear From You
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B5B45]">
              Whether you're looking for a bespoke outfit, bridal consultation,
              or have a question about your order, we're here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-light text-[#1F1F1F]">
                Get In Touch
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#6B5B45]">
                Visit our showroom, call us directly, or send us a message using
                the contact form.
              </p>

              <div className="mt-12 space-y-10">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="rounded-full bg-[#FAF7F2] p-3">
                    <MapPin className="text-[#C8A97E]" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1F1F1F]">
                      Visit Our Studio
                    </h3>

                    <p className="mt-3 leading-8 text-[#6B5B45]">
                      Shop 5, Chris Shopping Mall
                      <br />
                      Leha Road
                      <br />
                      Behind City College of Education
                      <br />
                      New Karu
                      <br />
                      Federal Capital Territory, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="rounded-full bg-[#FAF7F2] p-3">
                    <Phone className="text-[#C8A97E]" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1F1F1F]">
                      Phone
                    </h3>

                    <p className="mt-3 text-[#6B5B45]">
                      +234 810 089 2502
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="rounded-full bg-[#FAF7F2] p-3">
                    <Mail className="text-[#C8A97E]" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1F1F1F]">
                      Email
                    </h3>

                    <p className="mt-3 text-[#6B5B45]">
                      info@fajuzy.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="rounded-full bg-[#FAF7F2] p-3">
                    <Clock className="text-[#C8A97E]" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1F1F1F]">
                      Business Hours
                    </h3>

                    <p className="mt-3 leading-7 text-[#6B5B45]">
                      Monday: 9:00 AM – 7:00 PM
                      <br />
                      Tuesday: 9:00 AM – 7:00 PM
                      <br />
                      Wednesday: 9:00 AM – 5:00 PM
                      <br />
                      Thursday: 9:00 AM – 7:30 PM
                      <br />
                      Friday: 9:00 AM – 7:00 PM
                      <br />
                      Saturday: 9:00 AM – 4:30 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-[#E8DED2] bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Send a Message
              </h2>

              <form className="mt-10 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#5C5145]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-md border border-[#DCCDB8] bg-white px-4 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#A59A8C] focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#5C5145]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-[#DCCDB8] bg-white px-4 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#A59A8C] focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#5C5145]">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-md border border-[#DCCDB8] bg-white px-4 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#A59A8C] focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#5C5145]">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your inquiry..."
                    className="w-full rounded-md border border-[#DCCDB8] bg-white px-4 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#A59A8C] focus:border-[#D2B48C] focus:ring-2 focus:ring-[#D2B48C]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#C8A97E] py-4 font-medium tracking-wide text-white transition duration-300 hover:bg-[#B89563]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="border-t border-[#E8DED2] bg-[#FAF7F2] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="uppercase tracking-[0.35em] text-[#D2B48C]">
                Visit Our Studio
              </p>

              <h2 className="mt-4 text-4xl font-light text-[#1F1F1F]">
                Experience Fajuzy In Person
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B5B45]">
                Visit our showroom for bespoke consultations, bridal fittings,
                and luxury ready-to-wear collections.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#E8DED2] shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Shop+5,+Chris+Shopping+Mall,+Leha+Road,+Behind+City+College+of+Education,+New+Karu,+Federal+Capital+Territory,+Nigeria&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Fajuzy Clothing Studio"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://maps.app.goo.gl/dYVXhQHrtfmitYWs5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#C8A97E] px-8 py-4 font-medium tracking-wide text-white transition duration-300 hover:bg-[#B89563]"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}