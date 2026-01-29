import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);

  const directions = {
    up: { y: shouldReduceMotion ? 0 : 40 },
    down: { y: shouldReduceMotion ? 0 : -40 },
    left: { x: shouldReduceMotion ? 0 : 40 },
    right: { x: shouldReduceMotion ? 0 : -40 },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
