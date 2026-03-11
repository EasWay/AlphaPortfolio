import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function StrategicPartnerships() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-[var(--color-bg)] flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Our Past Work</h2>
        <p className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-16 max-w-2xl leading-relaxed">
          LOOK AT THE PROJECTS WE'VE BUILT. THESE AREN'T JUST CASE STUDIES; THEY ARE STRONG FOUNDATIONS FOR GROWING BUSINESSES.
        </p>
        
        <div className="w-full h-[1px] bg-[var(--color-line)] mb-8"></div>
        <p className="text-[10px] font-mono tracking-widest uppercase text-gray-400 mb-12">OUR PROJECTS</p>

        <div className="flex flex-col">
          {[
            {
              client: "Ghana Revenue Authority (GRA)",
              desc: "Engineering systems to support fiscal management, e-VAT platforms, and national economic infrastructure."
            },
            {
              client: "Atsupi's Cosmetics and Trading",
              desc: "Developing a premium digital storefront and automated e-commerce solutions to streamline sales."
            },
            {
              client: "Walmas Travel Consult & iPhone Global",
              desc: "Partnering to build secure, scalable digital foundations and agentic workflows for enterprise operations."
            }
          ].map((item, index) => (
            <div key={index} className="group border-b border-[var(--color-line)] py-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 cursor-pointer">
              <span className="text-xs font-mono text-gray-400 w-12 shrink-0">0{index + 1}</span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-light group-hover:text-[var(--color-accent)] transition-colors mb-3">{item.client}</h3>
                <p className="text-sm font-light text-gray-500 max-w-xl">{item.desc}</p>
              </div>
              <ArrowRight size={20} className="text-gray-300 group-hover:text-[var(--color-accent)] group-hover:translate-x-2 transition-all self-end md:self-center" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
