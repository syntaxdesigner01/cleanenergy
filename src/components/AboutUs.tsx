
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import { ArrowUpRight, ShieldCheck } from 'lucide-react';


export function AboutUs() {

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

  return (
    <section className="py-10 lg:py-16 bg-[#F4F4F6] text-[#1A1A1A] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              About the Fund
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-12 max-w-4xl">
            A specialized alternative asset vehicle providing long-term, Clean Energy local currency financing to sustainable infrastructure projects across Nigeria.
          </motion.h2>

          <motion.div variants={fadeUp} className="w-full h-[1px] bg-[#1A1A1A]/10 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div variants={fadeUp} className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-[#1A1A1A]/50 mb-4">Strategic Mandate</h3>
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-6">
                  Managed by FundCo Capital Managers Limited, we utilize a blended finance approach—including guarantees from InfraCredit—to de-risk investments, allowing domestic pension funds and insurance companies to participate safely in the clean energy transition.
                </p>
              </div>
              <button className="bg-[#1A1A1A] text-white hover:bg-[var(--color-accent-light)] hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg w-fit">
                Discover the Fund <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex flex-col shadow-sm">
              <div className="h-40 rounded-xl overflow-hidden mb-5 relative">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                  alt="Local Currency"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-medium mb-2">Local Currency</h4>
              <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">
                Providing long-term Naira financing to eliminate exchange rate risks for developers and investors alike.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F4F4F6] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <h4 className="text-lg font-medium mb-2">Blended Finance</h4>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">
                  De-risking investments through strategic guarantees to mobilize institutional capital.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white rounded-2xl p-6 flex-1 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1">Status</h4>
                <div className="text-2xl font-light mb-1">Certified Green</div>
                <p className="text-white/60 text-sm">Climate Bonds Initiative</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
