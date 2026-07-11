import { motion } from 'framer-motion';
import { HiLightningBolt, HiClock, HiShieldCheck, HiChartBar, HiUserGroup } from 'react-icons/hi';

const LearnSection = () => {
  const whatsappLink = "https://chat.whatsapp.com/IjQPuZJuMEv7JHbuoGOJcG?s=cl&p=a&ilr=1";

  const cards = [
    {
      icon: <HiLightningBolt className="text-2xl" />,
      number: '01',
      title: 'The Institutional Logic',
      desc: 'Understand why retail breakouts fail and how to identify the liquidity sweeps that precede major market moves.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: <HiClock className="text-2xl" />,
      number: '02',
      title: 'Session Mechanics',
      desc: 'Master the Asian, London, and New York session windows to execute sniper entries only when probability aligns.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <HiChartBar className="text-2xl" />,
      number: '03',
      title: 'Pure Technical Framework',
      desc: 'Rely strictly on Price Action, Smart Money Concepts (SMC), Order Blocks, and Fair Value Gaps (FVG).',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <HiShieldCheck className="text-2xl" />,
      number: '04',
      title: 'The Millionaire Method',
      desc: 'Implement a rules-based scaling matrix that secures partial profits, locks breakeven, and protects capital.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      number: '05',
      title: 'Psychology of Process',
      desc: 'Build the iron discipline required to navigate extreme market volatility without emotional interference.',
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="learn-more" className="border-b border-neutral-100 py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
            Inside the Manual
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl mb-3">
            What you will learn inside
          </h2>
          <p className="text-neutral-500 text-lg">
            Eliminate the noise of lagging indicators. Shift your perspective toward pure price action.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-neutral-200 p-6 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient top line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`text-xs font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent uppercase tracking-wider mb-3`}>
                {card.number}. {card.title.split(' ').slice(-1)[0].replace('The ', '').replace('Pure ', '')}
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}

          {/* Target Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 text-white flex flex-col justify-between group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <HiUserGroup className="text-amber-400 text-xl" />
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Target</div>
              </div>
              <h3 className="text-lg font-bold mb-3">Who is this for?</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Traders tired of guessing, ready to build a process-driven edge or cultivate their financial brand.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 tracking-wider uppercase mt-6 transition-colors cursor-pointer"
            >
              Join Community
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HiArrowRight = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default LearnSection;