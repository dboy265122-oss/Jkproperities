import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, MapPin, IndianRupee, Home, BedDouble } from 'lucide-react';

export default function SearchSection() {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');

  return (
    <section className="relative z-20 -mt-20 px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <div className="glass-light luxury-shadow-lg rounded-2xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal">
              <Search className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-charcoal">Find Your Perfect Property</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Location</label>
              <div className="flex items-center gap-2 rounded-xl border border-charcoal/10 bg-white px-4 py-3 transition-all focus-within:border-gold">
                <MapPin className="h-4 w-4 text-gold" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Mumbai, Pune..."
                  className="w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-charcoal/40"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Budget</label>
              <div className="flex items-center gap-2 rounded-xl border border-charcoal/10 bg-white px-4 py-3 transition-all focus-within:border-gold">
                <IndianRupee className="h-4 w-4 text-gold" />
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                >
                  <option value="">Any Budget</option>
                  <option value="0-5">Under ₹5 Cr</option>
                  <option value="5-10">₹5 — ₹10 Cr</option>
                  <option value="10-20">₹10 — ₹20 Cr</option>
                  <option value="20+">₹20 Cr+</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Property Type</label>
              <div className="flex items-center gap-2 rounded-xl border border-charcoal/10 bg-white px-4 py-3 transition-all focus-within:border-gold">
                <Home className="h-4 w-4 text-gold" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">BHK</label>
              <div className="flex items-center gap-2 rounded-xl border border-charcoal/10 bg-white px-4 py-3 transition-all focus-within:border-gold">
                <BedDouble className="h-4 w-4 text-gold" />
                <select
                  value={bhk}
                  onChange={(e) => setBhk(e.target.value)}
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                >
                  <option value="">Any BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5+ BHK</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-charcoal">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
