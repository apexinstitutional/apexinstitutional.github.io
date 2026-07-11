import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiLightBulb, HiAcademicCap, HiChartBar, HiGlobe, HiUserGroup } from 'react-icons/hi';
import icon from '../../assets/icon.jpeg';

const AboutUsModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  if (!isOpen) return null;

  const features = [
    {
      icon: <HiChartBar className="text-xl" />,
      title: 'Institutional Frameworks',
      desc: 'Access our proven blueprints for navigating complex market structures, including Order Blocks, Liquidity Sweeps, and Fair Value Gaps (FVG).',
    },
    {
      icon: <HiAcademicCap className="text-xl" />,
      title: 'Professional Education',
      desc: 'Explore our comprehensive trading manuals and educational resources designed to elevate your execution skills to a professional standard.',
    },
    {
      icon: <HiGlobe className="text-xl" />,
      title: 'Market Clarity',
      desc: 'We strip away the noise of conventional trading methods to focus on pure Price Action and session-based mechanics.',
    },
    {
      icon: <HiUserGroup className="text-xl" />,
      title: 'Apex Community',
      desc: 'Join a group of disciplined traders committed to a process-driven approach, where the priority is superior execution rather than emotional outcomes.',
    },
  ];

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
          {/* Header with icon */}
          <div className="sticky top-0 bg-white z-10 border-b border-neutral-200">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <img
                  src={icon}
                  alt="Apex Institutional"
                  className="w-14 h-14 object-cover shadow-lg"
                />
                <div>
                  <h2 className="text-xs font-bold tracking-widest text-violet-600 uppercase">About Us</h2>
                  <h3 className="text-xl font-bold text-neutral-900">Apex Institutional</h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <HiX size={20} />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-5">
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <HiLightBulb className="text-violet-500 text-xl" />
                <h4 className="font-bold text-violet-900 text-lg">
                  Redefining Market Precision through Institutional Intelligence.
                </h4>
              </div>
              <p className="text-sm text-violet-700 font-medium">Welcome to Apex Institutional.</p>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed">
              We are an elite trading hub dedicated to those who seek to move beyond retail speculation and master the true mechanics of the financial markets. At Apex, we believe that consistent profitability is not found in lagging indicators or guesswork, but in understanding the underlying logic of the "Smart Money".
            </p>

            {/* Features Grid */}
            <div className="space-y-3">
              <h5 className="text-sm font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-violet-500 rounded-full" />
                What We Provide:
              </h5>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 p-4 bg-neutral-50 border border-neutral-200 hover:border-violet-200 hover:bg-violet-50/30 transition-all duration-300 group"
                  >
                    <div className="text-violet-500 mt-0.5 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm mb-1">{feature.title}</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-violet-500 bg-gradient-to-r from-violet-50 to-transparent pl-5 py-3">
              <p className="italic text-neutral-600 text-sm">
                "My job is not to make money, but to follow the process. Profit is the market's gift."
              </p>
              <p className="text-xs text-violet-600 font-semibold mt-1">— Pulkit Sharma</p>
            </div>

            {/* CTA */}
            <p className="font-semibold text-neutral-900 text-base">
              Join us at Apex Institutional and transform your trading journey into a career of precision and consistency.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUsModal;