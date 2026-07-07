import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingPiece({
  children,
  left,
  top = "-20%",
  size = 80,
  duration = 28,
  delay = 0,
}) {
  const [startTop, setStartTop] = useState(top);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTop("-20%");
    }, (duration + delay) * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none select-none z-0"
      style={{
        left,
        top: startTop,
        fontSize: size,
        opacity: 0.06,
        color: "white",
      }}
      initial={{ y: 0 }}
      animate={{ y: "140vh" }}
      transition={{
        duration,
        delay,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}