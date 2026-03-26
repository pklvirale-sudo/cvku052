import { motion, type TargetAndTransition } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// Global active card tracking
let globalActiveId: string | null = null;
const listeners = new Set<() => void>();

const setGlobalActive = (id: string | null) => {
  globalActiveId = id;
  listeners.forEach(fn => fn());
};

interface LedCardProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  cardId?: string;
}

let idCounter = 0;

const LedCard = ({ children, className = "", whileHover, whileTap, as = "div", href, target, rel, onClick, cardId }: LedCardProps) => {
  const [myId] = useState(() => cardId || `led-card-${++idCounter}`);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const listener = () => {
      setActive(globalActiveId === myId);
    };
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }, [myId]);

  const handleClick = useCallback(() => {
    if (globalActiveId === myId) {
      setGlobalActive(null);
    } else {
      setGlobalActive(myId);
    }
    onClick?.();
  }, [myId, onClick]);

  const Component = as === "a" ? motion.a : motion.div;

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      whileHover={whileHover}
      whileTap={whileTap}
      onClick={handleClick}
      className={`glass-card relative overflow-hidden cursor-pointer ${active ? 'led-border-active' : ''} ${className}`}
    >
      {active && <div className="led-border-glow" />}
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default LedCard;
