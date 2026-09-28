import { Phone, Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Buying Property',
  'Selling Property',
  'Investment Advice',
  'Home Loan Assistance',
  'Commercial Spaces',
  'Luxury Homes',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pt-20 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/40">
                <span className="font-serif text-xl font-bold text-gold">JK</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-white">JK Properties</span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold/80">Real Estate Consultant</span>
              </div>
            </div>
            <p className="mt-6 text-sm font-light leading-relaxed text-white/50">
              Find Your Dream Property With Confidence. Premium real estate consultancy led by Jai Kataria, serving Mumbai and Maharashtra.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="tel:7499418451"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-gold hover:text-gold"
                aria-label="Call"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/jkproperties__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@jkproperties.in"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-gold hover:text-gold"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-white/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm font-light text-white/50 transition-colors hover:text-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:7499418451" className="transition-colors hover:text-gold">7499418451</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Instagram className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="https://www.instagram.com/jkproperties__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  @jkproperties__
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                Mumbai & Maharashtra
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} JK Properties. All rights reserved. | Jai Kataria
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-white/40 transition-colors hover:text-gold"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
