import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheck, HiShieldCheck, HiLockClosed } from 'react-icons/hi';

const BuyNowModal = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      setPaymentMethod(null);
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const razorpayLink = "YOUR_RAZORPAY_PAYMENT_LINK";
  const paypalLink = "YOUR_PAYPAL_PAYMENT_LINK";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) { setPaymentMethod(null); onClose(); } }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="w-full max-w-md bg-white shadow-2xl overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 p-6 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <button
              onClick={() => { setPaymentMethod(null); onClose(); }}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer z-10"
            >
              <HiX size={20} />
            </button>
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <HiShieldCheck className="text-2xl text-violet-200" />
                <span className="text-xs font-bold tracking-widest text-violet-200 uppercase">Secure Checkout</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-1">Get Your Copy</h3>
              <p className="text-sm text-white/70">Secure your institutional edge today</p>
            </div>
          </div>

          <div className="p-6">
            {/* Book Info Card */}
            <div className="mb-6 p-4 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📘</span>
                <div>
                  <p className="text-sm font-bold text-violet-900">The Nature of Gold</p>
                  <p className="text-xs text-violet-600 mt-0.5">XAUUSD Institutional Execution Blueprint</p>
                  <p className="text-xs text-violet-500 mt-0.5">by Pulkit Sharma</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-5 font-medium">Choose your preferred payment method:</p>

            <div className="space-y-3">
              {/* Razorpay Option */}
              <button
                onClick={() => setPaymentMethod('razorpay')}
                className={`w-full p-4 border-2 text-left flex items-center gap-4 transition-all duration-300 cursor-pointer group ${
                  paymentMethod === 'razorpay'
                    ? 'border-violet-500 bg-violet-50 shadow-md'
                    : 'border-neutral-200 hover:border-violet-300 hover:shadow-sm'
                }`}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-shadow">
                  ₹
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Razorpay</p>
                  <p className="text-xs text-neutral-500">UPI, Cards, NetBanking</p>
                </div>
                {paymentMethod === 'razorpay' && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <HiCheck className="text-violet-500 text-xl" />
                  </motion.div>
                )}
              </button>

              {/* PayPal Option */}
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`w-full p-4 border-2 text-left flex items-center gap-4 transition-all duration-300 cursor-pointer group ${
                  paymentMethod === 'paypal'
                    ? 'border-violet-500 bg-violet-50 shadow-md'
                    : 'border-neutral-200 hover:border-violet-300 hover:shadow-sm'
                }`}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-shadow">
                  P
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">PayPal</p>
                  <p className="text-xs text-neutral-500">International Payments</p>
                </div>
                {paymentMethod === 'paypal' && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <HiCheck className="text-violet-500 text-xl" />
                  </motion.div>
                )}
              </button>
            </div>

            {/* Pay Button */}
            {paymentMethod && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-5 pt-5 border-t border-neutral-200"
              >
                <a
                  href={paymentMethod === 'razorpay' ? razorpayLink : paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 cursor-pointer"
                >
                  <HiLockClosed className="text-sm" />
                  Pay with {paymentMethod === 'razorpay' ? 'Razorpay' : 'PayPal'}
                </a>
                <p className="text-center text-[10px] text-neutral-400 mt-2 flex items-center justify-center gap-1">
                  <HiLockClosed className="text-[10px]" />
                  Secured by 256-bit SSL encryption
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BuyNowModal;