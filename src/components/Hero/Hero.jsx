import HeroContent from "./HeroContent.jsx";
import HeroBoard from "./HeroBoard.jsx";
import HeroBackground from "./HeroBackground.jsx";
import FloatingPiece from "./FloatingPiece.jsx";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0B1020]
        px-6
        lg:px-20
        py-20
      "
    >
      <HeroBackground />

      <FloatingPiece left="5%" top="-1%" size={70} duration={32} delay={0}>
        ♜
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>

      <FloatingPiece left="18%" top="15%" size={70} duration={40} delay={0}>
        ♞
      </FloatingPiece>

      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>
      <FloatingPiece left="90%" top="55%" size={85} duration={50} delay={0}>
        ♜
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>

      <FloatingPiece left="45%" top="70%" size={90} duration={22} delay={0}>
        ♛
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>
      <FloatingPiece left="90%" top="55%" size={85} duration={28} delay={0}>
        ♜
      </FloatingPiece>
      <FloatingPiece left="5%" top="-1%" size={70} duration={32} delay={0}>
        ♜
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>

      <FloatingPiece left="18%" top="15%" size={70} duration={40} delay={0}>
        ♞
      </FloatingPiece>

      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>
      <FloatingPiece left="90%" top="55%" size={85} duration={50} delay={0}>
        ♜
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>

      <FloatingPiece left="45%" top="70%" size={90} duration={22} delay={0}>
        ♛
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>
      <FloatingPiece left="90%" top="55%" size={85} duration={28} delay={0}>
        ♜
      </FloatingPiece>

      <FloatingPiece left="60%" top="25%" size={80} duration={28} delay={0}>
        ♚
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>
      <FloatingPiece left="90%" top="55%" size={85} duration={28} delay={0}>
        ♜
      </FloatingPiece>

      <FloatingPiece left="75%" top="-5%" size={60} duration={28} delay={0}>
        ♟
      </FloatingPiece>

      <FloatingPiece left="90%" top="55%" size={85} duration={28} delay={0}>
        ♜
      </FloatingPiece>
      <FloatingPiece left="30%" top="45%" size={60} duration={28} delay={0}>
        ♝
      </FloatingPiece>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[80vh]
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-16
          lg:flex-row
          lg:justify-between
        "
      >
        <div className="mt-4">
          <HeroContent />
        </div>

        <HeroBoard />
      </div>
    </section>
  );
};

export default Hero;
