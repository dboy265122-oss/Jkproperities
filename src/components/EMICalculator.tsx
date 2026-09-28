import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { IndianRupee, Percent, Calendar, Calculator } from 'lucide-react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(50000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emi = useMemo(() => {
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return loanAmount / n;
    return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [loanAmount, interestRate, tenure]);

  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  const formatRupee = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <section className="bg-charcoal px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Plan Your Investment</span>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            EMI Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-white/60">
            Estimate your monthly home loan EMI and plan your purchase with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-dark-grey p-8"
          >
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <IndianRupee className="h-4 w-4 text-gold" />
                  Loan Amount
                </label>
                <span className="font-serif text-lg font-bold text-gold">{formatRupee(loanAmount)}</span>
              </div>
              <input
                type="range"
                min="1000000"
                max="100000000"
                step="500000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>₹10 L</span>
                <span>₹10 Cr</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <Percent className="h-4 w-4 text-gold" />
                  Interest Rate
                </label>
                <span className="font-serif text-lg font-bold text-gold">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>5%</span>
                <span>15%</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <Calendar className="h-4 w-4 text-gold" />
                  Loan Tenure
                </label>
                <span className="font-serif text-lg font-bold text-gold">{tenure} Years</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>5 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center rounded-3xl border border-gold/20 bg-gradient-to-br from-dark-grey to-charcoal p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold">
                <Calculator className="h-6 w-6 text-charcoal" />
              </div>
              <span className="text-sm uppercase tracking-wider text-white/60">Your Monthly EMI</span>
            </div>
            <motion.div
              key={emi}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <span className="font-serif text-5xl font-bold text-gradient-gold md:text-6xl">
                {formatRupee(emi)}
              </span>
              <span className="ml-2 text-lg text-white/40">/month</span>
            </motion.div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Principal Amount</span>
                <span className="font-serif text-lg font-semibold text-white">{formatRupee(loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Total Interest</span>
                <span className="font-serif text-lg font-semibold text-white">{formatRupee(totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-medium text-white/80">Total Payment</span>
                <span className="font-serif text-xl font-bold text-gold">{formatRupee(totalPayment)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
