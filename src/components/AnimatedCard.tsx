import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 20,
        scale: shouldReduceMotion ? 1 : 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0.2 : 0.5,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      }}
      whileHover={{
        y: shouldReduceMotion ? 0 : -8,
        transition: { duration: shouldReduceMotion ? 0.1 : 0.3 },
      }}
      viewport={{ once: true, margin: '-50px' }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
