import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = memo(({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const handleComplete = useCallback(() => {
    setIsLoading(false);
    // Reduced delay for faster perceived performance
    setTimeout(onLoadingComplete, prefersReducedMotion ? 0 : 200);
  }, [onLoadingComplete, prefersReducedMotion]);

  useEffect(() => {
    // Faster loading - 400ms for reduced motion, 600ms otherwise
    const timer = setTimeout(handleComplete, prefersReducedMotion ? 200 : 500);
    return () => clearTimeout(timer);
  }, [handleComplete, prefersReducedMotion]);

  if (prefersReducedMotion && !isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          role="status"
          aria-label="Loading"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold tracking-tight flex items-baseline"
            >
              <span className="text-headline">MTN</span>
              <span className="text-primary ml-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-0.5 bg-muted/30 rounded-full overflow-hidden" aria-hidden="true">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ willChange: "transform" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
