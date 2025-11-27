'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: Direction;
};

export default function FadeIn({
  children,
  delay = 0.1,
  duration = 0.6,
  threshold = 0.2,
  direction = 'up',
}: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const offset =
    direction === 'up'
      ? { y: 20 }
      : direction === 'down'
      ? { y: -20 }
      : direction === 'left'
      ? { x: 20 }
      : direction === 'right'
      ? { x: -20 }
      : {};

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}


