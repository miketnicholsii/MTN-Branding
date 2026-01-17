import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const RotatingText = ({ words, className = "", interval = 3000 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  if (shouldReduceMotion) {
    return <span className={className}>{words[currentIndex]}</span>;
  }

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -20, opacity: 0, rotateX: 90 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "center center" }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

interface SkillTagsProps {
  skills: string[][];
  className?: string;
  tagClassName?: string;
  interval?: number;
}

export const SkillTags = ({ 
  skills, 
  className = "", 
  tagClassName = "",
  interval = 2500 
}: SkillTagsProps) => {
  const [indices, setIndices] = useState<number[]>(skills.map(() => 0));
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timers = skills.map((skillGroup, groupIndex) => {
      // Stagger the start of each group
      const staggeredInterval = interval + groupIndex * 400;
      
      return setInterval(() => {
        setIndices((prev) => {
          const newIndices = [...prev];
          newIndices[groupIndex] = (newIndices[groupIndex] + 1) % skillGroup.length;
          return newIndices;
        });
      }, staggeredInterval);
    });

    return () => timers.forEach(clearInterval);
  }, [skills, interval]);

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {skills.map((skillGroup, groupIndex) => (
        <motion.div
          key={groupIndex}
          className={`px-4 py-2.5 rounded-full overflow-hidden ${tagClassName}`}
          style={{
            background: 'linear-gradient(135deg, hsl(var(--forest-900)), hsl(var(--forest-950)))',
            border: '1px solid hsla(var(--offwhite) / 0.12)',
            boxShadow: '0 2px 8px hsla(0, 0%, 0%, 0.15), inset 0 1px 0 hsla(var(--offwhite) / 0.06)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: groupIndex * 0.1, duration: 0.4 }}
          whileHover={{ 
            scale: 1.04, 
            y: -2,
            boxShadow: '0 4px 12px hsla(0, 0%, 0%, 0.2), inset 0 1px 0 hsla(var(--offwhite) / 0.08)',
          }}
        >
          <div className="relative h-5 flex items-center justify-center min-w-[85px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={`${groupIndex}-${indices[groupIndex]}`}
                initial={shouldReduceMotion ? {} : { y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={shouldReduceMotion ? {} : { y: -14, opacity: 0 }}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center text-sm font-medium whitespace-nowrap"
                style={{ color: 'hsl(var(--offwhite))' }}
              >
                {skillGroup[indices[groupIndex]]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RotatingText;