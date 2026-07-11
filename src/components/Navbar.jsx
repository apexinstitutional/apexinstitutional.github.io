import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import icon from '../assets/icon.jpeg';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFrameworkClick = () => {
    const section = document.getElementById('learn-more');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Framework', action: handleFrameworkClick },
    { label: 'Founder', action: () => onOpenModal('founder-modal') },
    { label: 'About Us', action: () => onOpenModal('aboutus-modal') },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <header
        className={`hidden md:block sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-neutral-900/5 border-b border-neutral-200'
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo — Clickable, scrolls to top */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              title="Go to Home"
            >
              <img
                src={icon}
                alt="Apex Institutional"
                className="w-9 h-9 object-cover shadow-sm"
              />
              <div className="text-lg font-bold tracking-tight text-neutral-900">
                APEX <span className="font-light text-neutral-400">INSTITUTIONAL</span>
              </div>
            </button>
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={link.action}
                className="relative text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => onOpenModal('buynow-modal')}
              className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 cursor-pointer"
            >
              Buy Now
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-neutral-200 shadow-lg shadow-neutral-900/10 safe-area-bottom">
        <div className="flex items-center justify-around h-16 px-2">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center gap-1 text-violet-600 transition-colors cursor-pointer min-w-0 flex-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] font-semibold">Home</span>
          </button>

          <button
            onClick={handleFrameworkClick}
            className="flex flex-col items-center justify-center gap-1 text-neutral-500 hover:text-violet-600 transition-colors cursor-pointer min-w-0 flex-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span className="text-[10px] font-medium">Framework</span>
          </button>

          {/* Center Buy Button */}
          <button
            onClick={() => onOpenModal('buynow-modal')}
            className="flex flex-col items-center justify-center cursor-pointer min-w-0 flex-1 -mt-5"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-violet-600 mt-0.5">Buy Now</span>
          </button>

          <button
            onClick={() => onOpenModal('aboutus-modal')}
            className="flex flex-col items-center justify-center gap-1 text-neutral-500 hover:text-violet-600 transition-colors cursor-pointer min-w-0 flex-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium">About</span>
          </button>

          <button
            onClick={() => onOpenModal('contact-modal')}
            className="flex flex-col items-center justify-center gap-1 text-neutral-500 hover:text-violet-600 transition-colors cursor-pointer min-w-0 flex-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-medium">Contact</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;