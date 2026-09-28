import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const padding = useTransform(scrollY, [0, 100], ['1.25rem', '0.75rem']);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50"
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        <motion.div
          className="absolute inset-0 glass-dark"
          style={{ opacity: bgOpacity }}
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <motion.a href="#home" style={{ scale: logoScale }} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40 bg-charcoal">
              <span className="font-serif text-lg font-bold text-gold">JK</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-bold tracking-wide text-white">JK Properties</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold/80">Real Estate Consultant</span>
            </div>
          </motion.a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:7499418451"
              className="flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              <Phone className="h-4 w-4" />
              7499418451
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-charcoal px-6 py-6 lg:hidden"
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40">
                <span className="font-serif text-lg font-bold text-gold">JK</span>
              </div>
              <span className="font-serif text-lg font-bold text-white">JK Properties</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-white" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/10 py-4 font-serif text-xl text-white/90 transition-colors hover:text-gold"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <a
            href="tel:7499418451"
            className="mt-auto flex items-center justify-center gap-2 rounded-full bg-gold py-4 text-base font-semibold text-charcoal"
          >
            <Phone className="h-5 w-5" />
            Call Now: 7499418451
          </a>
        </motion.div>
      )}
    </>
  );
}
