'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
  viewport: { once: true, amount: 0.2 },
};

const testimonials = [
  {
    quote: 'The clearest pattern I\'ve ever used. Every detail felt couture-level precise.',
    author: 'Camille R., Paris',
  },
  {
    quote: 'My clutch kept its architectural shape all evening, even with my phone inside.',
    author: 'Ariana L., New York',
  },
  {
    quote: 'This is not another vague tutorial. It\'s a true masterclass in structure.',
    author: 'Nadine K., Dubai',
  },
  {
    quote: 'The finishing chapter alone changed how I build luxury accessories.',
    author: 'Elise M., London',
  },
  {
    quote: 'I finally understood Right-Angle Weave in a practical, high-end context.',
    author: 'Sofia T., Milan',
  },
  {
    quote: 'Elegant, concise, and beautifully engineered. Worth every dollar.',
    author: 'Hannah V., Los Angeles',
  },
];

const curriculum = [
  {
    title: 'Technical Schematics',
    description:
      'Follow zero-ambiguity, page-by-page clutch architecture diagrams designed for stability and precision.',
  },
  {
    title: 'Material Blueprint',
    description:
      'Exact sourcing and proportions for 10mm & 12mm pearls, Soft Gold hardware, thread pathing, and tools.',
  },
  {
    title: 'Luxury Finishing Guides',
    description:
      'Master clean closure installation, structural reinforcement, and polished final detailing for editorial results.',
  },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>
          Pearl Cloud Clutch Masterclass | Architectural Beaded Bag Pattern | dyasse shop
        </title>
        <meta
          name="description"
          content="Master the secret of structured luxury bead weaving. 12 hours of expert craftsmanship distilled into a zero-ambiguity 14-page PDF. Build your own Pearl Cloud Clutch today."
        />
        <meta
          name="keywords"
          content="Architectural beaded bag, DIY luxury clutch, Right-Angle Weave masterclass, dyasse shop"
        />
      </Head>

      <main className="min-h-screen bg-[#F5F5DC] text-[#2F2D26] antialiased">
        <header className="sticky top-0 z-50 border-b border-[#B2AC88]/30 bg-[#F5F5DC]/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <span className="w-24 text-sm font-medium tracking-[0.2em] text-[#B2AC88]">EST. 2026</span>
            <div className="font-serif text-xl tracking-[0.2em] sm:text-2xl">dyasse shop</div>
            <a
              href="#offer"
              className="rounded-full border border-[#B2AC88] bg-[#B2AC88] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-90"
            >
              Get PDF
            </a>
          </div>
        </header>

        <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
          <motion.div {...fadeInUp} className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#B2AC88]">
              Pearl Cloud Clutch Masterclass
            </p>
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              12 Hours of Craftsmanship. One Iconic Masterpiece.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-[#5A5547] sm:text-lg">
              Master the architecture of the Pearl Cloud Clutch.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-10 sm:mt-14">
            <img
              src="https://images.unsplash.com/photo-1612902456551-333ac5afa26d?auto=format&fit=crop&w=1600&q=80"
              alt="Pearl Cloud Clutch in soft editorial lighting"
              className="h-[280px] w-full rounded-2xl object-cover shadow-sm sm:h-[420px]"
            />
          </motion.div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-10 border-y border-[#B2AC88]/25 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 lg:px-8">
          <motion.div {...fadeInUp}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B2AC88]">Why dyasse shop</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Architecture over floppiness.</h2>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-4 text-[#4B4639]">
            <p>
              Most beaded bag patterns produce soft silhouettes that collapse under real-life essentials. Our method is
              engineered for intentional structure.
            </p>
            <p>
              Through a controlled Right-Angle Weave sequence, reinforcement strategy, and proportion planning, you build
              a clutch that preserves shape while carrying your smartphone, keys, and cards without sagging.
            </p>
            <p>
              This is luxury construction logic—translated into a clear, repeatable process.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B2AC88]">What&apos;s Inside</p>
            <h2 className="font-serif text-3xl sm:text-4xl">Your 14-Page Curriculum</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {curriculum.map((item) => (
              <motion.article
                key={item.title}
                {...fadeInUp}
                className="rounded-2xl border border-[#B2AC88]/25 bg-[#FFFDD0]/60 p-6"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B4639]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl border-t border-[#B2AC88]/25 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B2AC88]">Social Proof</p>
            <h2 className="font-serif text-3xl sm:text-4xl">Trusted by detail-driven makers</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.author}
                {...fadeInUp}
                className="rounded-2xl border border-[#B2AC88]/25 bg-white/40 p-6"
              >
                <p className="text-sm leading-relaxed text-[#3E3A2E]">“{item.quote}”</p>
                <cite className="mt-4 block text-xs font-semibold uppercase tracking-[0.15em] text-[#8C8569] not-italic">
                  {item.author}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="offer" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mx-auto max-w-lg rounded-3xl border border-[#B2AC88]/30 bg-[#FFFDD0]/70 p-8 text-center sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B2AC88]">Limited Enrollment</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Pearl Cloud Clutch Masterclass</h2>
            <p className="mt-4 text-sm text-[#514C3E]">14-page PDF • Immediate access • Zero-ambiguity workflow</p>
            <p className="mt-8 font-serif text-5xl text-[#2F2D26]">$49</p>
            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#B2AC88] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-90"
            >
              Get the PDF now
            </a>
          </motion.div>
        </section>

        <footer className="border-t border-[#B2AC88]/30 bg-[#FFFDD0]/50">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h3 className="font-serif text-2xl">dyasse shop</h3>
              <p className="mt-3 text-sm text-[#5A5547]">Contact: dyasse@gmail.com</p>
              <p className="mt-4 text-xs uppercase tracking-[0.1em] text-[#8C8569]">Copyright © 2026 dyasse shop</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C8569]">Social</h4>
              <div className="mt-4 flex items-center gap-3">
                <a href="#" aria-label="Pinterest" className="rounded-full border border-[#B2AC88]/40 p-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#8C8569]" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-3.64 19.31c-.05-.82-.1-2.1.02-3l1.27-5.39s-.32-.65-.32-1.62c0-1.52.88-2.66 1.98-2.66.93 0 1.38.7 1.38 1.54 0 .94-.6 2.35-.91 3.66-.26 1.1.55 2 1.64 2 1.96 0 3.47-2.06 3.47-5.03 0-2.63-1.89-4.47-4.58-4.47-3.12 0-4.95 2.34-4.95 4.76 0 .94.36 1.95.81 2.5a.33.33 0 0 1 .08.32c-.09.35-.29 1.1-.33 1.25-.05.2-.17.25-.39.15-1.46-.68-2.38-2.8-2.38-4.5 0-3.66 2.66-7.02 7.68-7.02 4.03 0 7.16 2.87 7.16 6.72 0 4-2.52 7.22-6.02 7.22-1.17 0-2.28-.61-2.66-1.33l-.72 2.74c-.26 1-.96 2.24-1.43 3A10 10 0 1 0 12 2Z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="rounded-full border border-[#B2AC88]/40 p-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#8C8569]" aria-hidden="true">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.37a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C8569]">Community Comments</h4>
              <div className="mt-4 space-y-3 text-sm text-[#5A5547]">
                <p>“Started at noon, finished by evening—my clutch looked professionally made.”</p>
                <p>“The hardware placement details were pure gold. Literally and technically.”</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
