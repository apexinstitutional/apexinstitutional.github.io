import { motion } from 'framer-motion';

const QuoteBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 border-b border-neutral-100 overflow-hidden">
      <div className="absolute top-10 left-10 text-8xl text-amber-200/50 font-serif select-none">"</div>
      <div className="absolute bottom-10 right-10 text-8xl text-amber-200/50 font-serif select-none rotate-180">"</div>

      <div className="mx-auto max-w-3xl px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-semibold tracking-tight text-neutral-800 md:text-3xl leading-relaxed italic">
            "My job is not to make money, but to follow the process. Profit is the market's gift."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase">Pulkit Sharma</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteBanner;