import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve" | "fade";
  from?: string;
  to?: string;
  className?: string;
  flip?: boolean;
}

const SectionDivider = ({ 
  variant = "fade",
  from = "hsl(var(--forest-700))",
  to = "hsl(var(--forest-900))",
  className = "",
  flip = false
}: SectionDividerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  if (variant === "wave") {
    return (
      <div 
        ref={ref}
        className={`relative h-24 sm:h-32 overflow-hidden ${className}`}
        style={{ 
          background: from,
          transform: flip ? 'scaleY(-1)' : undefined 
        }}
      >
        <motion.svg
          style={{ opacity }}
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill={to}
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div 
        ref={ref}
        className={`relative h-16 sm:h-24 overflow-hidden ${className}`}
        style={{ 
          background: from,
          transform: flip ? 'scaleY(-1)' : undefined 
        }}
      >
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          <svg 
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,80 1440,0 1440,80"
              fill={to}
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div 
        ref={ref}
        className={`relative h-20 sm:h-28 overflow-hidden ${className}`}
        style={{ 
          background: from,
          transform: flip ? 'scaleY(-1)' : undefined 
        }}
      >
        <motion.svg
          style={{ opacity }}
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z"
            fill={to}
          />
        </motion.svg>
      </div>
    );
  }

  // Default: fade gradient
  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className={`h-24 sm:h-32 ${className}`}
    >
      <div 
        className="w-full h-full"
        style={{ 
          background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
          transform: flip ? 'scaleY(-1)' : undefined 
        }}
      />
    </motion.div>
  );
};

export default SectionDivider;
