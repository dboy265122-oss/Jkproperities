import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Send } from 'lucide-react';

export default function FloatingContact() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
          >
            <a
              href="https://wa.me/917499418451"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6 fill-white text-white" />
              <span className="absolute right-16 whitespace-nowrap rounded-lg bg-charcoal px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                WhatsApp
              </span>
            </a>
            <a
              href="tel:7499418451"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-lg transition-all hover:scale-110"
              aria-label="Call"
            >
              <Phone className="h-6 w-6 text-charcoal" />
              <span className="absolute right-16 whitespace-nowrap rounded-lg bg-charcoal px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                Call Now
              </span>
            </a>
            <button
              onClick={() => setShowEnquiry(true)}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-charcoal shadow-lg transition-all hover:scale-110"
              aria-label="Quick enquiry"
            >
              <Send className="h-5 w-5 text-gold" />
              <span className="absolute right-16 whitespace-nowrap rounded-lg bg-charcoal px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                Quick Enquiry
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm px-6"
            onClick={() => setShowEnquiry(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-white p-8 luxury-shadow-lg"
            >
              <button
                onClick={() => setShowEnquiry(false)}
                className="absolute right-4 top-4 text-charcoal/40 transition-colors hover:text-charcoal"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-charcoal">
                  <span className="font-serif text-lg font-bold text-gold">JK</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">Quick Enquiry</h3>
                  <p className="text-xs text-charcoal/50">We'll call you back within 24 hours</p>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowEnquiry(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                />
                <input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                />
                <select
                  required
                  className="w-full rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                >
                  <option value="">Select requirement</option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="investment">Investment Advice</option>
                  <option value="luxury">Luxury Home</option>
                  <option value="commercial">Commercial Space</option>
                </select>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-charcoal py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-charcoal"
                >
                  Submit Enquiry
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <a href="tel:7499418451" className="flex items-center gap-1.5 text-charcoal/60 hover:text-gold">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <span className="text-charcoal/20">|</span>
                <a
                  href="https://wa.me/917499418451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-charcoal/60 hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
