import icon from "../assets/icon.jpeg";

const Footer = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-900 py-10 md:pb-10 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row text-sm text-neutral-400">
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt="Apex Institutional"
            className="w-7 h-7 object-cover"
          />
          <span>&copy; 2026 Apex Institutional. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onOpenModal("contact-modal")}
            className="hover:text-violet-400 transition-colors cursor-pointer"
          >
            Contact Support
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
