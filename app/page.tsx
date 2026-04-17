"use client"
import { motion } from 'framer-motion'
import { Star, Shield, PenTool, Mail, Share2, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-luxe-beige text-stone-800">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif tracking-widest uppercase">dyasse shop</h1>
          <button className="bg-luxe-sage text-white px-6 py-2 rounded-full hover:bg-stone-700 transition-all font-medium">
            Get Masterclass
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-luxe-sage font-medium tracking-widest uppercase text-sm">Luxury Engineering</span>
          <h2 className="text-5xl md:text-7xl font-serif mt-4 mb-6 leading-tight">
            12 Hours of Craftsmanship.<br/>One Iconic Statement Bag.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10">
            Master the architectural secret of the Pearl Cloud Clutch. Build an heirloom-level evening accessory with zero-ambiguity guidance.
          </p>
          {/* Main Product Image Placeholder */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-luxe-cream rounded-2xl overflow-hidden shadow-2xl mb-12 flex items-center justify-center border border-stone-200">
             <span className="text-stone-400 font-serif">Main Product Image (Lifestyle)</span>
          </div>
          <button className="bg-stone-800 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
            Enroll in the Masterclass — $49
          </button>
        </motion.div>
      </section>

      {/* Body: Logic Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-luxe-beige aspect-square rounded-2xl flex items-center justify-center border border-stone-200">
             <span className="text-stone-400 font-serif text-center px-6">No-Sagging Architecture Detail Image</span>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-6">Architecture, Not Just Beading.</h3>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              While others create floppy bags, <strong>dyasse shop</strong> engineers structure. Learn our signature reinforcement techniques for a 5-star finish. Our Right-Angle Weave (RAW) framework ensures your bag holds its shape even with your essentials inside.
            </p>
            <ul className="space-y-4">
              {[ "14-Page Technical PDF", "Zero-Ambiguity Stitch Maps", "Structural Integrity Guide" ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                  <Shield className="text-luxe-sage w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-luxe-cream">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-16">What Our Makers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-luxe-gold text-luxe-gold" />)}
                </div>
                <p className="text-stone-600 italic">"The most detailed pattern I have ever used. My bag is actually structured!"</p>
                <div className="mt-6 font-serif text-sm uppercase tracking-wider text-stone-400">— International Maker</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-stone-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-8">dyasse shop</h2>
          <div className="flex justify-center gap-8 mb-12">
            <Mail className="cursor-pointer hover:text-luxe-sage transition-colors" />
            <Share2 className="cursor-pointer hover:text-luxe-sage transition-colors" />
            <MessageCircle className="cursor-pointer hover:text-luxe-sage transition-colors" />
          </div>
          <p className="text-stone-400 mb-4">Contact: dyasse@gmail.com</p>
          <p className="text-stone-500 text-sm">© 2026 dyasse shop. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
