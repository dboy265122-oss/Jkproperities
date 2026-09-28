import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { projects } from '@/data/content';

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % projects.length);
  const prev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.35em] text-gold">Project Showcase</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
              Signature Developments
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold hover:text-charcoal"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold hover:text-charcoal"
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="perspective-1000">
          <motion.div
            key={active}
            initial={{ opacity: 0, rotateY: 15, x: 60 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="preserve-3d grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <div className="group relative h-80 overflow-hidden rounded-3xl lg:h-[500px]">
              <img
                src={projects[active].image}
                alt={projects[active].name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-charcoal">
                {projects[active].category}
              </span>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div>
                <h3 className="font-serif text-3xl font-bold text-charcoal md:text-4xl">
                  {projects[active].name}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-charcoal/60">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-base">{projects[active].location}</span>
                </div>
              </div>
              <p className="text-lg font-light leading-relaxed text-charcoal/70">
                {projects[active].description}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-sm text-charcoal/50">
                  {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === active ? 'w-8 bg-gold' : 'w-2 bg-charcoal/20'
                      }`}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-charcoal"
              >
                Enquire About This Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
