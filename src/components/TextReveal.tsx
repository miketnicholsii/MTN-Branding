import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down";
}

const TextReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.7,
  direction = "up"
}: TextRevealProps) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const initialY = direction === "up" ? "100%" : "-100%";

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ 
          y: shouldReduceMotion ? 0 : initialY,
          opacity: shouldReduceMotion ? 0 : 1 
        }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: shouldReduceMotion ? 0.1 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;