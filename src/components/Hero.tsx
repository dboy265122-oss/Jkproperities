import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Calendar, Phone, MessageCircle, ChevronDown, MousePointerClick } from 'lucide-react';
import { heroImages } from '@/data/content';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (e.clientX / innerWidth - 0.5) * 20,
      y: (e.clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden bg-charcoal" onMouseMove={handleMouseMove}>
      <motion.div style={{ y }} className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]"
            style={{
              backgroundImage: `url(${img})`,
              opacity: i === currentImage ? 1 : 0,
              transform: `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)`,
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-[1px] w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.35em] text-gold">JK Properties</span>
          <span className="h-[1px] w-12 bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl text-shadow-luxury font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Luxury Homes.
          <br />
          <span className="text-gradient-gold">Smart Investments.</span>
          <br />
          Trusted Guidance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg"
        >
          Helping families and investors discover premium residential and commercial properties with complete transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-[0_10px_40px_-10px_rgba(200,164,93,0.6)]"
          >
            <Calendar className="h-4 w-4" />
            Book Site Visit
          </a>
          <a
            href="tel:7499418451"
            className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href="https://wa.me/917499418451"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <MousePointerClick className="h-4 w-4 text-gold/60" />
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
