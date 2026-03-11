import { motion } from 'motion/react';

export default function VisionMission() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-white flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">Corporate Profile</h2>
        <p className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-24">
          ARCHITECTING DIGITAL PRESENCES & AGENTIC WORKFLOWS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <div className="flex flex-col">
            <span className="text-6xl font-serif italic text-[var(--color-accent)] mb-8">01</span>
            <h3 className="text-sm font-mono tracking-widest uppercase mb-6 font-semibold">Our Vision</h3>
            <p className="text-lg font-light leading-relaxed text-gray-600">
              To build strong digital platforms that don't break down over time. Inspired by history's greatest structures, we create software that grows more valuable every year.
            </p>
          </div>
          
          <div className="flex flex-col">
            <span className="text-6xl font-serif italic text-[var(--color-accent)] mb-8">02</span>
            <h3 className="text-sm font-mono tracking-widest uppercase mb-6 font-semibold">Our Mission</h3>
            <p className="text-lg font-light leading-relaxed text-gray-600">
              To give businesses a "digital brain"—systems that store and find company knowledge perfectly. We use psychology to make our software easy to use and economics to keep users engaged.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
