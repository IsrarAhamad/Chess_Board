import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { START_FEN, PUZZLE_MOVES } from "./PuzzleData.js";

const MOVE_DELAY = 500;

export default function ChessBoard({
  replayKey,
  onAutoPlayChange,
  setIncorrectMove,
}) {
  const gameRef = useRef(null);
  const timerRef = useRef(null);
  const moveIndexRef = useRef(0);

  const [position, setPosition] = useState(START_FEN);
  const [isPlaying, setIsPlaying] = useState(false);
  const [arrows, setArrows] = useState([]);

  const [squareStyles, setSquareStyles] = useState({});
  const [boardKey, setBoardKey] = useState(0);

  const initializeGame = () => {
    gameRef.current = new Chess();

    moveIndexRef.current = 0;

    setPosition(gameRef.current.fen());

    setArrows([]);

    setSquareStyles({});

    setIncorrectMove(false);
  };

  const highlightMove = (move) => {
    if (!move?.from || !move?.to) return;

    setSquareStyles({
      [move.from]: {
        backgroundColor: "rgba(255,215,0,.45)",
      },
      [move.to]: {
        backgroundColor: move.captured
          ? "rgba(255,0,0,.55)"
          : "rgba(255,215,0,.45)",
      },
    });

    setArrows([
      {
        startSquare: move.from,
        endSquare: move.to,
        color: "#4F8EF7",
      },
    ]);
  };

  const startAutoPlay = () => {
    clearTimeout(timerRef.current);

    moveIndexRef.current = 0;

    setIsPlaying(true);
    onAutoPlayChange(true);

    const play = () => {
      if (!gameRef.current) return;

      const currentMove = PUZZLE_MOVES[moveIndexRef.current];

      const move = gameRef.current.move({
        from: currentMove.slice(0, 2),
        to: currentMove.slice(2, 4),
        promotion: "q",
      });

      if (!move) return;

      highlightMove(move);

      setPosition(gameRef.current.fen());

      moveIndexRef.current++;

      if (moveIndexRef.current === PUZZLE_MOVES.length) {
        timerRef.current = setTimeout(() => {
          setArrows([]);
          setSquareStyles({});
          setIsPlaying(false);
          onAutoPlayChange(false);
          setBoardKey((prev) => prev + 1);
        }, MOVE_DELAY);

        return;
      }

      timerRef.current = setTimeout(play, MOVE_DELAY);
    };

    play();
  };

  useEffect(() => {
    console.log("Arrows State:", arrows);
  }, [arrows]);

  const onPieceDrop = ({ sourceSquare, targetSquare }) => {
    if (isPlaying) return false;

    if (!gameRef.current) return false;

    const move = gameRef.current.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (!move) return false;

    highlightMove(move);

    setPosition(gameRef.current.fen());

    return true;
  };

  const onPieceDrag = () => {
    if (isPlaying) return;
    setIncorrectMove(true);
  };

  useEffect(() => {
    initializeGame();

    const timer = setTimeout(() => {
      onAutoPlayChange(true);
      startAutoPlay();
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (replayKey === 0) return;

    clearTimeout(timerRef.current);

    initializeGame();

    timerRef.current = setTimeout(() => {
      onAutoPlayChange(true);
      startAutoPlay();
    }, 300);
  }, [replayKey]);

  return (
    <div className="w-full">
      <Chessboard
        key={boardKey}
        options={{
          id: "HeroBoard",

          position,

          onPieceDrop,
          onPieceDrag,

          arrows,

          showAnimations: true,

          animationDurationInMs: 500,

          squareStyles,

          boardStyle: {
            borderRadius: "0px",
            overflow: "hidden",
          },

          darkSquareStyle: {
            backgroundColor: "#769656",
          },

          lightSquareStyle: {
            backgroundColor: "#EEEED2",
          },
        }}
      />
    </div>
  );
}
