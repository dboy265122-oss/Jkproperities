import { motion } from 'framer-motion';
import { TrendingUp, Building, Coins, CalendarClock, ArrowRight } from 'lucide-react';

const timeline = [
  {
    year: 'Now',
    title: 'Buy at Today\'s Price',
    description: 'Property values in key micro-markets are still below their peak. Entering now locks in pre-appreciation pricing.',
    icon: Coins,
  },
  {
    year: 'Year 1–2',
    title: 'Rental Income Starts',
    description: 'Premium apartments in Mumbai yield ₹40k–₹1.2L monthly rent, offsetting your EMI from day one.',
    icon: Building,
  },
  {
    year: 'Year 3–5',
    title: 'Infrastructure Appreciation',
    description: 'New metro lines, coastal road, and Navi Mumbai airport drive 8–12% annual capital appreciation.',
    icon: TrendingUp,
  },
  {
    year: 'Year 5+',
    title: 'Long-Term Wealth',
    description: 'Real estate has historically doubled every 7–10 years in tier-1 cities. Your asset compounds silently.',
    icon: CalendarClock,
  },
];

export default function WhyInvestNow() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Market Insight</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Why Invest Now
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-charcoal/60">
            The next 24 months represent a rare window. Here is how your investment grows over time.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-gold via-gold/40 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-start gap-6 lg:w-1/2 ${
                  i % 2 === 0 ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'
                }`}
              >
                <div className={`absolute left-8 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gold lg:left-auto ${i % 2 === 0 ? 'lg:-right-2' : 'lg:-left-2'}`}>
                  <div className="h-2 w-2 rounded-full bg-charcoal" />
                </div>
                <div className="ml-16 flex-1 rounded-2xl bg-beige p-6 luxury-shadow lg:ml-0">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-charcoal/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-6 rounded-3xl bg-charcoal p-10 text-center lg:flex-row lg:justify-between lg:text-left"
        >
          <div>
            <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
              Ready to start your investment journey?
            </h3>
            <p className="mt-2 text-white/60">Book a free consultation with Jai Kataria today.</p>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
