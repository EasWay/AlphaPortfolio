import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Mail, MessageCircle } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Vision & Mission', path: '/vision-mission' },
    { name: 'Strategic Partnerships', path: '/strategic-partnerships' },
    { name: 'Leadership & Team', path: '/leadership-team' },
    { name: 'Why Work With Us', path: '/why-work-with-us' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Minimalist Left/Right Nav (Desktop) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-40 hidden xl:flex items-center gap-4">
        <span className="w-8 h-[1px] bg-[var(--color-line)]"></span>
        <Link to="/" className="font-mono text-[10px] tracking-widest uppercase text-gray-400 hover:text-[var(--color-accent)] transition-colors">
          AGD // DIGITAL MEMORY
        </Link>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right z-40 hidden xl:flex items-center gap-4">
        <button onClick={() => setIsMenuOpen(true)} className="font-mono text-[10px] tracking-widest uppercase text-gray-400 hover:text-[var(--color-accent)] transition-colors">
          [ MENU ]
        </button>
        <span className="w-8 h-[1px] bg-[var(--color-line)]"></span>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-[var(--color-bg)]/90 backdrop-blur-sm border-b border-[var(--color-line)]">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[var(--color-ink)] flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-[var(--color-bg)] font-serif italic text-sm">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-medium tracking-widest text-xs uppercase leading-none">Alpha Group</span>
            <span className="font-mono text-[8px] tracking-widest text-[var(--color-accent)] uppercase mt-1">Of Developers</span>
          </div>
        </Link>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors"
        >
          <Menu size={16} />
          [MENU]
        </button>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-[var(--color-bg)] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-6 md:px-12 border-b border-[var(--color-line)]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[var(--color-ink)] flex items-center justify-center">
                  <span className="text-[var(--color-bg)] font-serif italic text-sm">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-medium tracking-widest text-xs uppercase leading-none">Alpha Group</span>
                  <span className="font-mono text-[8px] tracking-widest text-[var(--color-accent)] uppercase mt-1">Of Developers</span>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors"
              >
                CLOSE
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-6 md:px-24 gap-8">
              {menuItems.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-4xl md:text-6xl font-serif text-left hover:text-[var(--color-accent)] transition-colors italic"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <Link to="/contact" className="mt-8 self-start">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs font-mono tracking-widest uppercase border border-[var(--color-ink)] px-6 py-3 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-24 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-[var(--color-bg)] border-t border-[var(--color-line)] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest uppercase text-gray-400 mt-auto relative z-10">
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
            <Github size={14} /> GITHUB
          </a>
          <a href="mailto:developershub26@gmail.com" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
            <Mail size={14} /> EMAIL
          </a>
          <a href="https://wa.me/233599541340" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
            <MessageCircle size={14} /> WHATSAPP
          </a>
        </div>
        <div className="text-center">&copy; {new Date().getFullYear()} ALPHA GROUP OF DEVELOPERS</div>
        <div className="text-right">AGD // {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
