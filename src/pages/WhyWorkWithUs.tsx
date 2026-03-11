import { motion } from 'motion/react';

export default function WhyWorkWithUs() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-[var(--color-bg)] flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-16">Why Work With <br/><span className="font-serif italic text-[var(--color-accent)]">AlphaGroupOfDevelopers?</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <div className="w-8 h-[1px] bg-[var(--color-ink)] mb-6"></div>
            <h3 className="text-lg font-medium mb-4">Easy to Use (Psychology)</h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              We design interfaces that are simple and natural. Our systems reduce mental stress, making complex tasks feel easy and effortless.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-[1px] bg-[var(--color-ink)] mb-6"></div>
            <h3 className="text-lg font-medium mb-4">Built to Last (Physics)</h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              Software naturally breaks down over time. We fight this by building clean, organized systems that stay strong and fix themselves.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-[1px] bg-[var(--color-ink)] mb-6"></div>
            <h3 className="text-lg font-medium mb-4">Growing Value (Economics)</h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              We don't just build websites; we build digital assets. Your platform is designed to become more valuable as your data and user base grow.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
