import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiZoomIn, HiZoomOut, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import previewCover from '../../assets/preview-cover.jpeg';
import previewIntro from '../../assets/preview-intro.jpeg';
import previewLast from '../../assets/preview-last.jpeg';

const BookPreviewModal = ({ isOpen, onClose, onOpenBuy }) => {
  const pages = [
    { img: previewCover, alt: 'Book Cover' },
    { img: previewIntro, alt: 'Introduction' },
    { img: previewLast, alt: 'Buy to Read More', isLast: true },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      setCurrentPage(0);
      setZoomLevel(1);
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPage(index);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) goToPage(currentPage + 1);
      else goToPage(currentPage - 1);
    }
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-5xl bg-white shadow-2xl relative flex flex-col max-h-[95vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 bg-white">
            <h3 className="text-lg font-bold text-neutral-900">
              {pages[currentPage].alt}
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleZoomOut}
                className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <HiZoomOut size={20} />
              </button>
              <span className="text-xs text-neutral-400 w-12 text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                title="Zoom In"
              >
                <HiZoomIn size={20} />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer ml-2"
              >
                <HiX size={20} />
              </button>
            </div>
          </div>

          {/* Page Content */}
          <div
            ref={imageContainerRef}
            className="flex-1 overflow-auto bg-neutral-100 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="transition-transform duration-200 p-4"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={pages[currentPage].img}
                alt={pages[currentPage].alt}
                className="max-h-[70vh] w-auto shadow-lg select-none pointer-events-none"
                draggable="false"
              />
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between p-4 border-t border-neutral-200 bg-white">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <HiChevronLeft size={18} />
              Previous
            </button>

            <div className="flex gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-2.5 h-2.5 transition-all duration-300 cursor-pointer ${
                    i === currentPage
                      ? 'bg-amber-500 w-6'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            {pages[currentPage].isLast ? (
              <button
                onClick={() => { onClose(); onOpenBuy(); }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                Buy Now
              </button>
            ) : (
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Next
                <HiChevronRight size={18} />
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookPreviewModal;