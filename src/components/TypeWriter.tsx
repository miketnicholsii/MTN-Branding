import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

const TypeWriter = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
  onComplete,
}: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const typeText = useCallback(() => {
    if (shouldReduceMotion) {
      setDisplayedText(text);
      onComplete?.();
      return;
    }

    setIsTyping(true);
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed, shouldReduceMotion, onComplete]);

  useEffect(() => {
    const delayTimeout = setTimeout(typeText, delay);
    return () => clearTimeout(delayTimeout);
  }, [typeText, delay]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return;
    
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-orange-gold ml-1 align-middle"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          style={{ 
            verticalAlign: "text-bottom",
            marginBottom: "0.1em"
          }}
        />
      )}
    </span>
  );
};

interface TypeWriterSequenceProps {
  sequences: {
    text: string;
    className?: string;
    element?: React.ReactNode;
  }[];
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export const TypeWriterSequence = ({
  sequences,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
}: TypeWriterSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedTexts, setCompletedTexts] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCompletedTexts(sequences.map(s => s.text));
      setIsComplete(true);
    }
  }, [shouldReduceMotion, sequences]);

  const handleComplete = useCallback(() => {
    setCompletedTexts(prev => [...prev, sequences[currentIndex].text]);
    
    if (currentIndex < sequences.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, sequences]);

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {sequences.map((seq, i) => (
          <span key={i}>
            {seq.element || <span className={seq.className}>{seq.text}</span>}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {/* Render completed texts */}
      {completedTexts.map((text, i) => (
        <span key={`completed-${i}`} className={sequences[i].className}>
          {sequences[i].element || text}
        </span>
      ))}
      
      {/* Current typing text */}
      {!isComplete && currentIndex < sequences.length && (
        <TypeWriter
          text={sequences[currentIndex].text}
          className={sequences[currentIndex].className}
          delay={currentIndex === 0 ? delay : 100}
          speed={speed}
          cursor={cursor && currentIndex === sequences.length - 1}
          onComplete={handleComplete}
        />
      )}
      
      {/* Blinking cursor at end */}
      {isComplete && cursor && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-orange-gold ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.53, repeat: Infinity, repeatType: "reverse" }}
          style={{ verticalAlign: "text-bottom", marginBottom: "0.1em" }}
        />
      )}
    </span>
  );
};

export default TypeWriter;
