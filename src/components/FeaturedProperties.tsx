import { motion } from 'framer-motion';
import { BedDouble, Bath, Maximize, Calendar, ArrowUpRight } from 'lucide-react';
import { properties } from '@/data/content';

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-beige-light px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Featured Listings</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Curated Premium Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-charcoal/60">
            Handpicked residences and investments that represent the very best in location, design, and value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, i) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white luxury-shadow transition-all duration-500 hover:luxury-shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-charcoal">
                  {property.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">{property.name}</h3>
                    <p className="text-sm text-white/80">{property.location}</p>
                  </div>
                  <span className="font-serif text-2xl font-bold text-gold">{property.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 border-b border-charcoal/10 pb-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-charcoal/50">
                      <BedDouble className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wide">Beds</span>
                    </div>
                    <span className="text-sm font-semibold text-charcoal">{property.bedrooms}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-charcoal/50">
                      <Bath className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wide">Baths</span>
                    </div>
                    <span className="text-sm font-semibold text-charcoal">{property.bathrooms}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-charcoal/50">
                      <Maximize className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wide">Area</span>
                    </div>
                    <span className="text-sm font-semibold text-charcoal">{property.area}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-charcoal/50">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{property.possession}</span>
                  </div>
                  <a
                    href="#contact"
                    className="group/btn flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
