import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-beige px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Client Stories</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl bg-white p-8 luxury-shadow md:p-12"
            >
              <Quote className="absolute right-8 top-8 h-16 w-16 text-gold/10" />
              <div className="relative">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-8 font-serif text-xl font-light italic leading-relaxed text-charcoal/80 md:text-2xl">
                  "{testimonials[active].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-charcoal">{testimonials[active].name}</h4>
                    <p className="text-sm text-charcoal/50">{testimonials[active].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold hover:text-charcoal"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-gold' : 'w-2 bg-charcoal/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold hover:text-charcoal"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
