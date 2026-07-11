import { motion } from 'framer-motion';

const BlueprintBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 py-16 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-violet-400/80 uppercase mb-4"
        >
          Website Blueprint
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl italic font-light text-white/70 leading-relaxed"
        >
          "Redefining Market Precision through Institutional Intelligence. Welcome to Apex Institutional."
        </motion.p>
      </div>
    </section>
  );
};

export default BlueprintBanner;