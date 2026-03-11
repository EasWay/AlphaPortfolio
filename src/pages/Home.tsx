import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
        {/* Atmospheric Blurred Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://i.ibb.co/7tzbJqh3/1773234849450.png" 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover opacity-100 blur-[2px] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/40 to-[var(--color-bg)]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight mb-8">
            Building <br />
            <span className="font-serif italic text-[var(--color-accent)]">Digital Memory</span> <br />
            & Smart Systems.
          </h1>
          <div className="w-full h-[1px] bg-[var(--color-line)] mb-8"></div>
          <p className="text-lg md:text-2xl font-light max-w-2xl text-gray-600 mb-12 leading-relaxed">
            Like an elephant, we build systems that never forget. We combine psychology, economics, and computer science to create platforms your business can rely on forever.
          </p>
          <Link 
            to="/strategic-partnerships"
            className="inline-flex items-center gap-4 text-xs font-mono tracking-widest uppercase border-b border-[var(--color-ink)] pb-2 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors group"
          >
            VIEW OUR WORK
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-24 flex justify-between items-end font-mono text-[10px] text-gray-400 uppercase tracking-widest z-10">
          <div className="border border-gray-300 px-3 py-1">SYSTEM ACTIVE</div>
          <div>[SCROLL TO EXPLORE]</div>
        </div>
      </section>

      {/* Preview: Vision & Mission */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-white border-t border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">The Digital <br/><span className="font-serif italic text-[var(--color-accent)]">Brain</span></h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              We build strong digital platforms that don't break down over time. Inspired by history's greatest structures, we create software that grows more valuable every year.
            </p>
            <Link to="/vision-mission" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
              Read Our Vision <ArrowRight size={14} />
            </Link>
          </div>
          <div className="aspect-square bg-[var(--color-bg)] p-8 md:p-12 flex flex-col justify-between border border-[var(--color-line)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--color-ink)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <span className="text-6xl font-serif italic text-gray-300 relative z-10 group-hover:text-white transition-colors duration-500">01</span>
            <p className="font-mono text-sm uppercase tracking-widest text-gray-500 relative z-10 group-hover:text-gray-300 transition-colors duration-500">Saving Company Knowledge</p>
          </div>
        </div>
      </section>

      {/* Preview: Methodology (Why Work With Us) */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[var(--color-bg)] border-t border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-light">How We <span className="font-serif italic text-[var(--color-accent)]">Work</span></h2>
            <Link to="/why-work-with-us" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors shrink-0">
              See How We Work <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-t border-[var(--color-ink)] pt-6">
              <h3 className="text-sm font-mono tracking-widest uppercase mb-4 font-semibold">Easy to Use</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">We design interfaces that are simple and natural, so your team can work without feeling overwhelmed.</p>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-6">
              <h3 className="text-sm font-mono tracking-widest uppercase mb-4 font-semibold">Built to Last</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">Software naturally breaks down over time. We fight this by building clean, organized systems that stay strong.</p>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-6">
              <h3 className="text-sm font-mono tracking-widest uppercase mb-4 font-semibold">Growing Value</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">We build platforms that become more valuable as more people use them and more data is added.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview: Historical Precedents & Team */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-white border-t border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our Past <span className="font-serif italic text-[var(--color-accent)]">Work</span></h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Look at the projects we've built. These aren't just case studies; they are strong foundations for growing businesses.
            </p>
            <Link to="/strategic-partnerships" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
              View Our Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex flex-col justify-center border-l border-[var(--color-line)] pl-0 lg:pl-16 pt-16 lg:pt-0 border-t lg:border-t-0">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our <span className="font-serif italic text-[var(--color-accent)]">Team</span></h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Our team combines computer science, psychology, and history to build platforms that stand the test of time.
            </p>
            <Link to="/leadership-team" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
              Meet Our Team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
