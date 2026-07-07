import ChessBoard from "../Chess/ChessBoard.jsx";
import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroBoard = () => {
  const [replayKey, setReplayKey] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [incorrectMove, setIncorrectMove] = useState(false);

  return (
    <motion.div
      className="
    w-full
    max-w-[450px]
    bg-[#1A245A]
    border
    border-[#2E3D7A]
    overflow-hidden
    transition-shadow
    duration-300
    hover:shadow-[0_25px_70px_rgba(91,104,255,0.35)]
  "
      initial={{
        opacity: 0,
        x: 70,
        y: 100,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -0.2,
        x: -0.2,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <div className="p-4">
        <ChessBoard
          replayKey={replayKey}
          onAutoPlayChange={setIsAutoPlaying}
          setIncorrectMove={setIncorrectMove}
        />
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between items-start">
          <div>
            {isAutoPlaying ? (
              <div>
                <p className="uppercase text-[12px] tracking-wide text-[#8E97C7] font-semibold">
                  THE EVERGREEN GAME
                </p>
                <p className="font-bold text-[13px]">
                  Anderssen vs Dufresne, 1852
                </p>
              </div>
            ) : (
              <div>
                <p className="uppercase text-[12px] tracking-wide text-[#8E97C7] font-semibold">
                  CAN YOU FINISH THE EVERGREEN GAME?
                </p>
                <h3 className="text-white text-[12px] font-bold">
                  White to move.
                </h3>
                {incorrectMove && (
                  <p className="text-[#E35B6A] text-[11px] mt-1 animate-pulse">Incorrect move. Try again.</p>
                )}
              </div>
            )}
          </div>

          <div
            className="
            border
            rounded-md
            border-[#7C3333]
            w-[100px]
            h-[40px]
            flex
            flex-col
            justify-center
            items-center"
          >
            <span className="text-[#7368FF] text-sm font-bold leading-none">
              4
            </span>

            <span className="uppercase text-[9px] tracking-widest text-[#A4A9D5] mt-1">
              Moves Left
            </span>
          </div>
        </div>


        {isAutoPlaying ? (
          <button
            disabled
            className="w-full mt-2 h-11 border rounded-md border-[#33447C] bg-[#162153] text-[#7F88B8] font-semibold flex items-center justify-center gap-2"
          >
            <Play size={18} fill="currentColor" strokeWidth={2.5} />
            <span>Autoplay in Progress...</span>
          </button>
        ) : (
          <div className="flex gap-3 mt-2">
            <button
              className="
              flex-1
              h-10
              border
              border-[#33447C]
              rounded-md
              bg-[#162153]    
              text-[#AEB5DA]
              text-[10px]
              sm:text-xs
              md:text-sm
              font-semibold
              whitespace-nowrap
              flex
              items-center
              justify-center
              transition-all
              duration-300
              cursor-pointer
              hover:bg-[#26377D]
              hover:border-[#5D73FF]
              hover:text-white
            "
            >
              ↺ Reset Puzzle
            </button>

            <button
              onClick={() => {
                setIncorrectMove(false);
                setReplayKey((prev) => prev + 1);
              }}
              className="
              flex-1
              h-10
              border
              border-[#33447C]
              rounded-md
              bg-[#162153]
              text-[#AEB5DA]
              text-[10px]
              sm:text-xs
              md:text-sm
              font-semibold
              whitespace-nowrap
              flex
              items-center
              justify-center
              transition-all
              duration-300
              cursor-pointer
              hover:bg-[#26377D]
              hover:border-[#5D73FF]
              hover:text-white
            "
            >
              ↻ Replay Full Game
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HeroBoard;
