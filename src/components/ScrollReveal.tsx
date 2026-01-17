import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, useMemo } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  amount = 0.2
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once, amount });

  const offset = useMemo(() => {
    if (shouldReduceMotion) return { y: 0, x: 0, scale: 1 };
    
    switch (direction) {
      case "up": return { y: distance, x: 0, scale: 1 };
      case "down": return { y: -distance, x: 0, scale: 1 };
      case "left": return { y: 0, x: distance, scale: 1 };
      case "right": return { y: 0, x: -distance, scale: 1 };
      case "fade": return { y: 0, x: 0, scale: 1 };
      case "scale": return { y: 0, x: 0, scale: 0.95 };
      default: return { y: distance, x: 0, scale: 1 };
    }
  }, [direction, distance, shouldReduceMotion]);

  const variants: Variants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: offset.y,
      x: offset.x,
      scale: offset.scale,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1] // Smooth ease-out curve
      }
    }
  }), [offset, duration, delay, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
