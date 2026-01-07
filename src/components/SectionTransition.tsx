import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

const SectionTransition = ({ children, className = "" }: SectionTransitionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.15], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
