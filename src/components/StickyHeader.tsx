import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 1)']
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 1px 2px 0 rgba(0, 0, 0, 0.05)', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      className="sticky top-0 z-50 transition-all duration-300"
    >
      {children}
    </motion.header>
  );
}
