import { motion } from 'framer-motion';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { instagramPosts } from '@/data/content';

export default function InstagramFeed() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.35em] text-gold">Follow Us</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
              @jkproperties__
            </h2>
            <p className="mt-3 max-w-md text-base font-light text-charcoal/60">
              Latest property showcases, walkthroughs, and investment insights on Instagram.
            </p>
          </div>
          <a
            href="https://www.instagram.com/jkproperties__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark px-6 py-3.5 text-sm font-semibold text-charcoal transition-all hover:shadow-[0_10px_40px_-10px_rgba(200,164,93,0.5)]"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/jkproperties__"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-charcoal"
            >
              <img
                src={post.src}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-charcoal/0 transition-all duration-300 group-hover:bg-charcoal/60">
                <ExternalLink className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Heart className="h-4 w-4 fill-gold text-gold" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
