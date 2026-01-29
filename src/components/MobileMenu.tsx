import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ navItems, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 relative z-50"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          className="w-7 h-6 flex flex-col justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 10 },
            }}
            className="w-7 h-0.5 bg-current rounded-full origin-center"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-7 h-0.5 bg-current rounded-full"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -10 },
            }}
            className="w-7 h-0.5 bg-current rounded-full origin-center"
          />
        </motion.div>
      </motion.button>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation - Positioned absolutely below header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 right-0 w-full overflow-hidden bg-white shadow-lg border-t border-neutral-100 z-40"
          >
            <motion.ul className="container mx-auto px-4 pt-4 pb-2 space-y-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <a
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      currentPath === item.href
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                custom={navItems.length}
                variants={itemVariants}
                className="pt-2"
              >
                <a
                  href="/contacto"
                  className="block px-4 py-3 bg-primary-600 text-white text-center font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Consulta Gratis
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
