import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  amount?: number;
}

const getDirectionOffset = (direction: string, shouldReduce: boolean) => {
  if (shouldReduce) return { y: 0, x: 0, scale: 1 };
  
  switch (direction) {
    case "up": return { y: 40, x: 0, scale: 1 };
    case "down": return { y: -40, x: 0, scale: 1 };
    case "left": return { y: 0, x: 40, scale: 1 };
    case "right": return { y: 0, x: -40, scale: 1 };
    case "fade": return { y: 0, x: 0, scale: 1 };
    case "scale": return { y: 0, x: 0, scale: 0.95 };
    default: return { y: 40, x: 0, scale: 1 };
  }
};

const SectionTransition = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.2
}: SectionTransitionProps) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount });
  const offset = getDirectionOffset(direction, shouldReduceMotion ?? false);

  const variants: Variants = {
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
        ease: [0.22, 1, 0.36, 1] // Custom bezier for smooth deceleration
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
