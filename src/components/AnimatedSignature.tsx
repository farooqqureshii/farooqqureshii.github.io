import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        delay: 0.2,
        type: "spring",
        duration: 2.5,
        bounce: 0.2,
      },
      opacity: { duration: 2 },
    },
  },
};

export default function AnimatedSignature() {
  const ref = useRef(null);
  const isVisible = useInView(ref);
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="flex justify-end items-center gap-2 self-end footer-line-color">
      <motion.div ref={ref} key={replayKey}>
        <motion.svg
          width="280"
          height="55"
          viewBox="0 0 280 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="signature-svg"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* PASTE YOUR SVG PATHS BELOW - replace viewBox above to match your SVG */}
          <motion.path
            d="M 8 38 C 25 18 55 28 85 35 C 115 42 145 35 175 38 C 205 41 235 38 265 35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
          />
          {/* Add more motion.path with variants={draw} as needed */}
        </motion.svg>
      </motion.div>
      <button
        type="button"
        onClick={() => setReplayKey((k) => k + 1)}
        className="signature-replay-btn text-[10px] opacity-70 hover:opacity-100 transition-opacity"
        title="Replay signature"
        aria-label="Replay signature animation"
      >
        Replay
      </button>
    </div>
  );
}
