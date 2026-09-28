import { motion } from 'framer-motion';
import {
  Award, BadgeCheck, Handshake, Eye, Tags, TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { whyChooseItems, stats } from '@/data/content';
import { useCountUp, useInView } from '@/hooks/useAnimations';

const iconMap: Record<string, LucideIcon> = {
  Award, BadgeCheck, HandshakeIcon: Handshake, Eye, Tags, TrendingUp,
};

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <span className="font-serif text-5xl font-bold text-gradient-gold md:text-6xl">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="mt-2 text-sm uppercase tracking-wider text-white/60">{stat.label}</span>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="why-us" ref={ref} className="relative bg-beige px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Why JK Properties</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            The Difference Is in the Details
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-charcoal/60">
            We do not just sell properties — we build relationships founded on trust, transparency, and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group flex items-start gap-5 rounded-2xl bg-white p-6 luxury-shadow transition-all duration-500 hover:luxury-shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-charcoal transition-all duration-500 group-hover:bg-gold">
                  <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-charcoal" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-charcoal/60">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-charcoal p-10 lg:p-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
