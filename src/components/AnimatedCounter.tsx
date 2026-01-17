import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2, decimals = 0 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (v) => setDisplayValue(decimals > 0 ? parseFloat(v.toFixed(decimals)) : Math.floor(v)),
      });
      return controls.stop;
    }
  }, [isInView, value, duration, decimals]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}{decimals > 0 ? displayValue.toFixed(decimals) : displayValue}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;