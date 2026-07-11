import { motion } from 'framer-motion';
import { HiArrowRight, HiBookOpen, HiStar } from 'react-icons/hi';
import bookCover from '../assets/book-cover.jpeg';

const HeroSection = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 py-20 md:py-28 border-b border-white/10">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white/90 uppercase tracking-wider mb-8"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Available Now — Instant Download
              </motion.div>

              {/* Stars rating */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-amber-400 text-lg" />
                ))}
                <span className="text-sm text-white/50 ml-2">Institutional Grade</span>
              </motion.div>

              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-4 leading-[1.1]">
                The Nature{' '}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  of Gold
                </span>
              </h1>

              <p className="text-lg font-semibold tracking-wider text-violet-300 uppercase sm:text-xl mb-6">
                An Institutional Execution Blueprint
              </p>

              <p className="text-base text-white/70 leading-relaxed mb-4 max-w-xl">
                Retail traps are designed to take your capital. Learn the logic of the 'Smart Money,' refine your entries, and trade XAU/USD like an institution. Your journey to consistent profitability starts here.
              </p>

              

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenModal('buynow-modal')}
                  className="group inline-flex h-12 items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 font-semibold text-white tracking-wide shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 cursor-pointer border border-white/10"
                >
                  Get Your Copy
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenModal('preview-modal')}
                  className="group inline-flex h-12 items-center justify-center gap-2 border-2 border-white/20 px-6 font-semibold text-white/80 tracking-wide hover:border-white/40 hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <HiBookOpen className="text-lg" />
                  Explore The Framework
                </motion.button>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10"
              >
                {['SMC & ICT Concepts', 'XAUUSD Specialized', 'Process Driven'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-white/50">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group cursor-pointer" onClick={() => onOpenModal('preview-modal')}>
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
              <div className="relative w-72 aspect-[3/4] shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] ring-1 ring-white/10">
                <img
                  src={bookCover}
                  alt="The Nature of Gold Book Cover"
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-5 py-2 border border-white/30">
                    Click to Preview
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;