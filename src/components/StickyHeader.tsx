import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 120, damping: 20, mass: 0.6 });

  const headerBackground = useTransform(
    smoothScrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 1)']
  );

  const headerShadow = useTransform(
    smoothScrollY,
    [0, 100],
    ['0 1px 2px 0 rgba(0, 0, 0, 0.05)', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
  );

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        willChange: 'background-color, box-shadow',
      }}
      className="sticky top-0 z-50 transition-all duration-300"
    >
      {children}
    </motion.header>
  );
}
