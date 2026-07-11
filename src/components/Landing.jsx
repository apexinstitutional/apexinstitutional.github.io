import { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BlueprintBanner from './BlueprintBanner';
import LearnSection from './LearnSection';
import QuoteBanner from './QuoteBanner';
import Footer from './Footer';
import BookPreviewModal from './modals/BookPreviewModal';
import BuyNowModal from './modals/BuyNowModal';
import FounderModal from './modals/FounderModal';
import AboutUsModal from './modals/AboutUsModal';
import ContactModal from './modals/ContactModal';

const Landing = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="bg-white text-neutral-900 antialiased selection:bg-amber-100 selection:text-amber-900 min-h-screen pb-20 md:pb-0">
      <Navbar onOpenModal={openModal} />

      <main>
        <HeroSection onOpenModal={openModal} />
        <BlueprintBanner />
        <LearnSection />
        <QuoteBanner />
      </main>

      <Footer onOpenModal={openModal} />

      <BookPreviewModal
        isOpen={activeModal === 'preview-modal'}
        onClose={closeModal}
        onOpenBuy={() => setActiveModal('buynow-modal')}
      />
      <BuyNowModal
        isOpen={activeModal === 'buynow-modal'}
        onClose={closeModal}
      />
      <FounderModal
        isOpen={activeModal === 'founder-modal'}
        onClose={closeModal}
      />
      <AboutUsModal
        isOpen={activeModal === 'aboutus-modal'}
        onClose={closeModal}
      />
      <ContactModal
        isOpen={activeModal === 'contact-modal'}
        onClose={closeModal}
      />
    </div>
  );
};

export default Landing;