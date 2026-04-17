'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'I followed the architecture maps and finally created a clutch that never caves in.',
    author: 'Camille R., Paris',
  },
  {
    quote: 'The RAW instructions made structural integrity feel intuitive and premium.',
    author: 'Ariana L., New York',
  },
  {
    quote: 'This is the first tutorial that solved my no-sagging challenge without guesswork.',
    author: 'Nadine K., Dubai',
  },
  {
    quote: 'The No-Floppy Guarantee gave me confidence—and the final shape is flawless.',
    author: 'Elise M., London',
  },
  {
    quote: 'Every page feels like a couture technical manual, not a generic DIY sheet.',
    author: 'Sofia T., Milan',
  },
  {
    quote: 'Worth every dollar. The $49 instantly paid off in quality and speed.',
    author: 'Hannah V., Los Angeles',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 text-center"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-sage">Proof of Quality</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Trusted by Luxury Makers</h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.06, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-sage/30 bg-cream/55 p-6"
          >
            <p className="text-sm leading-relaxed text-champagne-charcoal">“{item.quote}”</p>
            <cite className="mt-4 block text-xs font-semibold uppercase tracking-[0.15em] text-sage not-italic">
              {item.author}
            </cite>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
