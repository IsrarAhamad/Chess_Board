import { motion } from "framer-motion";
import HeroButton from "./HeroButton.jsx";

const HeroContent = () => {
  return (
    <div className="max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <img
          src="/logo.png"
          alt="XLChess Logo"
          className="
        mb-6
        w-24
        sm:w-28
        md:w-32
        lg:w-40
        xl:w-44
        h-auto
      "
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <h1
          className="
          font-black
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-5xl
          xl:text-6xl
          leading-tight
          tracking-tight
          "
        >
          <span className="block whitespace-nowrap">Build the Future of</span>

          <span className="block text-[#6C90FF] mt-1">Online Chess</span>
        </h1>
      </motion.div>

      <h2
        className="
    mt-6
    text-lg
    sm:text-xl
    md:text-2xl
    lg:text-2xl
    font-semibold
    text-white
    leading-snug
    max-w-xl
  "
      >
        Making the Best Move on the Way to the Top
      </h2>

      <p
        className="
        mt-4
        max-w-lg
        text-sm
        sm:text-base
        md:text-lg
        lg:text-md
        leading-6
        sm:leading-7
        md:leading-8
        lg:leading-8
        text-gray-400
      "
      >
        A complete chess platform to play, learn, compete, and grow—built to
        become the world's #1 destination for chess.
      </p>

      <div className="mt-8">
        <HeroButton />
      </div>
    </div>
  );
};

export default HeroContent;
