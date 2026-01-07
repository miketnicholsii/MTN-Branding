import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxTextProps {
  children: string;
  baseVelocity?: number;
}

const ParallaxText = ({ children, baseVelocity = 2 }: ParallaxTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -500 * baseVelocity]);
  const xSpring = useSpring(x, { damping: 50, stiffness: 100 });

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap py-8">
      <motion.div style={{ x: xSpring }} className="flex gap-8">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-8xl md:text-9xl font-bold text-foreground/5 uppercase tracking-tighter"
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;