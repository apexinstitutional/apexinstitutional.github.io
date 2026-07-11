import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiMail, HiUser, HiAnnotation } from 'react-icons/hi';

const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

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
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="w-full max-w-md bg-white shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 p-6 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer z-10"
            >
              <HiX size={20} />
            </button>
            
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <HiMail className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Contact ApexInstitutional</h3>
                <p className="text-xs text-white/70">We'll get back within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30"
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Message Sent!</h3>
                <p className="text-sm text-neutral-500">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    <HiUser className="text-violet-500" />
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none transition-colors bg-neutral-50 focus:bg-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    <HiMail className="text-violet-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none transition-colors bg-neutral-50 focus:bg-white"
                    placeholder="you@domain.com"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    <HiAnnotation className="text-violet-500" />
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none transition-colors resize-none bg-neutral-50 focus:bg-white"
                    placeholder="Your query here..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold uppercase tracking-wider hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 cursor-pointer flex items-center justify-center gap-2"
                >
                  <HiMail className="text-sm" />
                  Send Message
                </motion.button>
                
                <p className="text-center text-[10px] text-neutral-400">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;