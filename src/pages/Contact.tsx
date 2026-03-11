import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-white flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto w-full"
      >
        <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Get in Touch</h2>
        <div className="w-full h-[1px] bg-[var(--color-line)] mb-8"></div>
        <p className="text-lg font-light text-gray-500 mb-16">
          Reach out to discuss how we can build strong, smart software for your business.
        </p>

        <form className="space-y-12 mb-24" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input 
              type="text" 
              id="name"
              className="w-full bg-transparent border-b border-[var(--color-line)] py-4 text-lg font-light focus:outline-none focus:border-[var(--color-ink)] transition-colors peer placeholder-transparent"
              placeholder="Your Name"
            />
            <label htmlFor="name" className="absolute left-0 top-4 text-gray-400 font-light text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-ink)] peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--color-ink)] peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase">
              Your Name
            </label>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              id="org"
              className="w-full bg-transparent border-b border-[var(--color-line)] py-4 text-lg font-light focus:outline-none focus:border-[var(--color-ink)] transition-colors peer placeholder-transparent"
              placeholder="Organization"
            />
            <label htmlFor="org" className="absolute left-0 top-4 text-gray-400 font-light text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-ink)] peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--color-ink)] peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase">
              Organization
            </label>
          </div>

          <div className="relative">
            <input 
              type="email" 
              id="email"
              className="w-full bg-transparent border-b border-[var(--color-line)] py-4 text-lg font-light focus:outline-none focus:border-[var(--color-ink)] transition-colors peer placeholder-transparent"
              placeholder="Email Address"
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-gray-400 font-light text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-ink)] peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--color-ink)] peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase">
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea 
              id="inquiry"
              rows={4}
              className="w-full bg-transparent border-b border-[var(--color-line)] py-4 text-lg font-light focus:outline-none focus:border-[var(--color-ink)] transition-colors peer placeholder-transparent resize-none"
              placeholder="Nature of your inquiry..."
            ></textarea>
            <label htmlFor="inquiry" className="absolute left-0 top-4 text-gray-400 font-light text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--color-ink)] peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--color-ink)] peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase">
              Nature of your inquiry...
            </label>
          </div>

          <button type="submit" className="w-full bg-[var(--color-ink)] text-white font-mono text-xs tracking-widest uppercase py-5 hover:bg-[var(--color-accent)] transition-colors">
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-light text-gray-600 border-t border-[var(--color-line)] pt-12">
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">Location</h4>
            <p>GCTU Campus<br/>Accra, Ghana</p>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">Email</h4>
            <p>developershub26@gmail.com</p>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">Phone</h4>
            <p>+233 59 954 1340</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
