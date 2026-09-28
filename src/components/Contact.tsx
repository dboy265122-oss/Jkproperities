import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Instagram, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', requirement: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.requirement) return;
    setStatus('loading');
    try {
      if (!supabase) throw new Error('Database not configured');
      const { error } = await supabase.from('enquiries').insert({
        name: form.name,
        phone: form.phone,
        requirement: form.requirement,
        message: form.message || null,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', phone: '', requirement: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-beige px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Get in Touch</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Let's Find Your Dream Property
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-charcoal/60">
            Reach out for a free consultation. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-charcoal p-8 luxury-shadow-lg">
              <h3 className="mb-6 font-serif text-2xl font-bold text-white">Contact Details</h3>
              <div className="space-y-5">
                <a href="tel:7499418451" className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-dark-grey transition-all group-hover:bg-gold">
                    <Phone className="h-5 w-5 text-gold transition-colors group-hover:text-charcoal" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Phone</p>
                    <p className="font-serif text-lg font-semibold text-white">7499418451</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/jkproperties__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-dark-grey transition-all group-hover:bg-gold">
                    <Instagram className="h-5 w-5 text-gold transition-colors group-hover:text-charcoal" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Instagram</p>
                    <p className="font-serif text-lg font-semibold text-white">@jkproperties__</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-dark-grey">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Service Area</p>
                    <p className="font-serif text-lg font-semibold text-white">Mumbai & Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 overflow-hidden rounded-3xl luxury-shadow">
              <iframe
                title="JK Properties Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637!3d19.0822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63066a5f5c9%3A0xe26de34bc8a0c1f!2sMumbai!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 luxury-shadow-lg"
          >
            <h3 className="mb-6 font-serif text-2xl font-bold text-charcoal">Quick Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3.5 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Your contact number"
                  className="w-full rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3.5 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Requirement *
                </label>
                <select
                  required
                  value={form.requirement}
                  onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                  className="w-full rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3.5 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
                >
                  <option value="">Select requirement</option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="investment">Investment Advice</option>
                  <option value="loan">Home Loan Assistance</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="luxury">Luxury Home</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-charcoal/10 bg-beige-light px-4 py-3.5 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal py-4 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-charcoal disabled:opacity-60"
              >
                {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
                {status === 'idle' && <Send className="h-4 w-4" />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent! We\'ll call you soon' : 'Submit Enquiry'}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-600">Something went wrong. Please call 7499418451 directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
