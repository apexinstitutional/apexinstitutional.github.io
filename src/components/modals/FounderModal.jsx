import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const FounderModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className="w-full max-w-2xl bg-white shadow-2xl max-h-[85vh] overflow-y-auto"
        >
          <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b border-neutral-100">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-amber-600 uppercase">Founder</h2>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Pulkit Sharma</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <HiX size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-4 text-base text-neutral-600 leading-relaxed">
            <div className="flex items-center gap-3 mb-4 p-4 bg-amber-50 border border-amber-100">
              <span className="text-2xl">👤</span>
              <div>
                <p className="font-semibold text-neutral-900">Professional Forex & Gold Trader</p>
                <p className="text-sm text-neutral-500">Founder, Apex Institutional</p>
              </div>
            </div>

            <p>
              Apex Institutional is a premier trading hub committed to shifting the perspective of modern traders toward institutional-grade execution. With a specialized focus on the XAUUSD market, the core methodology integrates Smart Money Concepts (SMC), liquidity analysis, and precise price action to navigate market volatility.
            </p>
            <p>
              Guided by the philosophy that "profit is the market's gift," the brand emphasizes a process-driven approach over speculative outcomes. As the author of "The Nature of Gold," a comprehensive manual designed to help traders bypass retail traps, the mission is to provide clear insights into the logic behind institutional market movements.
            </p>
            <p>
              Beyond the charts, the brand reflects a commitment to discipline, focus, and resilience. Whether developing new educational resources or building the Apex community, the focus remains clear: to trade with precision, transparency, and a relentless commitment to professional excellence.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FounderModal;