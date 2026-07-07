import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

const HeroButton = () => {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMouse({
      x: mouseX,
      y: mouseY,
    });

    // Image movement
    x.set((mouseX - rect.width / 2) / 1.0);
    y.set((mouseY - rect.height / 2) / 2);
  };

  const handleMouseLeave = () => {
    setHovered(false);

    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="
  relative
  overflow-hidden
  rounded-xl
  bg-gradient-to-r
  from-indigo-500
  to-violet-500
  px-5
  sm:px-6
  md:px-7
  lg:px-8
  py-3
  sm:py-3.5
  md:py-4
  text-base
  sm:text-lg
  font-semibold
  text-white
  shadow-xl
  shadow-violet-500/20
  transition-all
  duration-300
  w-[130px]
  sm:w-[145px]
  md:w-[155px]
  lg:w-[170px]
  h-[52px]
  sm:h-[56px]
  md:h-[60px]
  lg:h-[65px]
"
    >
      {/* Cursor Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(
            170px circle at ${mouse.x}px ${mouse.y}px,
            rgba(255,255,255,0.28),
            transparent 70%
          )`,
        }}
        transition={{
          duration: 0.08,
        }}
      />

      {/* Play Image */}
      <motion.img
        src="/play icon.png"
        alt="Play"
        draggable={false}
        style={{
          x: springX,
          y: springY,
        }}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          pointer-events-none
          select-none
          z-10
        "
      />

      {/* Play Text */}
      <motion.span
        animate={{
          opacity: hovered ? 0 : 1,
          x: hovered ? 20 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          right-8
          top-1/2
          -translate-y-1/2
          text-white
          text-xl
          font-bold
          z-10
        "
      >
        Play
      </motion.span>
    </motion.button>
  );
};

export default HeroButton;
