import { motion } from 'framer-motion';
import { Phone, Instagram, BadgeCheck } from 'lucide-react';

export default function AboutJai() {
  return (
    <section className="bg-beige px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Jai Kataria — Founder, JK Properties"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-charcoal p-6 luxury-shadow-lg md:block">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-8 w-8 text-gold" />
                <div>
                  <p className="font-serif text-lg font-bold text-white">Certified Consultant</p>
                  <p className="text-xs text-white/60">RERA Registered</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.35em] text-gold">About the Founder</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">Jai Kataria</h2>
            <p className="mt-2 text-lg font-medium text-gold">Founder & Lead Consultant</p>

            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-serif text-xl font-light italic leading-relaxed text-charcoal/80 md:text-2xl">
                "At JK Properties, our mission is to help every client make the right real estate decision with honesty, transparency and market expertise. Whether you're buying your first home or investing in premium property, we guide you through every step."
              </p>
            </blockquote>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white p-4 text-center luxury-shadow">
                <span className="font-serif text-2xl font-bold text-gradient-gold">10+</span>
                <p className="mt-1 text-xs text-charcoal/60">Years Experience</p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center luxury-shadow">
                <span className="font-serif text-2xl font-bold text-gradient-gold">1000+</span>
                <p className="mt-1 text-xs text-charcoal/60">Clients Served</p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center luxury-shadow">
                <span className="font-serif text-2xl font-bold text-gradient-gold">10+</span>
                <p className="mt-1 text-xs text-charcoal/60">Cities Covered</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:7499418451"
                className="flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-charcoal"
              >
                <Phone className="h-4 w-4" />
                7499418451
              </a>
              <a
                href="https://www.instagram.com/jkproperties__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-semibold text-charcoal transition-all hover:border-gold hover:bg-gold hover:text-charcoal"
              >
                <Instagram className="h-4 w-4" />
                @jkproperties__
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
