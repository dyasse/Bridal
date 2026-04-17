import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSpecs from '@/components/ProductSpecs';
import Testimonials from '@/components/Testimonials';

export default function Page() {
  return (
    <main className="min-h-screen bg-beige">
      <Header />
      <Hero />
      <ProductSpecs />
      <Testimonials />

      <section id="cta" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-xl rounded-3xl border border-sage/40 bg-cream/80 p-8 text-center shadow-[0_14px_35px_rgba(132,126,92,0.18)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage">Immediate Access</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Pearl Cloud Clutch Masterclass PDF</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-champagne-muted">
            One premium PDF. One proven architecture system. Learn RAW and craft your own no-sagging clutch with
            confidence.
          </p>
          <p className="mt-8 font-serif text-5xl">$49</p>
          <a
            href="mailto:dyasse@gmail.com?subject=Purchase%20Pearl%20Cloud%20Clutch%20Masterclass"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-sage px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:opacity-90"
          >
            Buy the Masterclass Now
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-sage">No-Floppy Guarantee Included</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
