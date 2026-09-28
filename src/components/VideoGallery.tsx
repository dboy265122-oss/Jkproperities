import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { galleryImages } from '@/data/content';

export default function VideoGallery() {
  return (
    <section className="bg-dark-grey px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Video Gallery</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Property Walkthroughs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-white/60">
            Experience our properties from the comfort of your screen. Hover to preview.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? 'h-full min-h-[300px]' : 'h-48 lg:h-56'}`}>
                <img
                  src={video.src}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition-all duration-300 group-hover:bg-charcoal/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold">
                    <Play className="h-5 w-5 fill-white text-white transition-colors group-hover:fill-charcoal group-hover:text-charcoal" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{video.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
