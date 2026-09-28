import { motion } from 'framer-motion';
import {
  Home, TrendingUp, LineChart, Landmark, MapPin, FileText, Building2, Crown,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Home, TrendingUp, LineChart, Landmark, MapPin, FileText, Building2, Crown,
};

export default function Services() {
  return (
    <section id="services" className="bg-charcoal px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.35em] text-gold">What We Offer</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Comprehensive Real Estate Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-white/60">
            From your first enquiry to the final handover, we handle every detail with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-grey p-6 transition-all duration-500 hover:border-gold/40"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/10" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-charcoal transition-all duration-500 group-hover:border-gold group-hover:bg-gold">
                    {Icon && <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-charcoal" />}
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-white/60">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
