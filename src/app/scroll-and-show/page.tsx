"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function ScrollAndShowPage() {
  const [ballSize, setBallSize] = useState(0);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    setBallSize(latestValue * 100);
  });
  return (
    <div className="h-[300vh]">
      <motion.span
        style={{ clipPath: `circle(${ballSize}%)` }}
        className="fixed w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 "
      >
        <h1 className=" flex flex-col text-[8vw] pl-[8vw] font-bold text-blue-800">
          <span className="overflow-hidden">
            <motion.span
              initial={{ bottom: "-10vw" }}
              animate={{ bottom: ballSize > 70 ? "0" : "-10vw" }}
              transition={{ type: "spring" }}
              className="relative"
            >
              Aha!
            </motion.span>
          </span>
          <span className="overflow-hidden">
            <motion.span
              initial={{ bottom: "-10vw" }}
              animate={{ bottom: ballSize > 70 ? "0" : "-10vw" }}
              transition={{ type: "spring" }}
              className="relative overflow-hidden"
            >
              You found me!
            </motion.span>
          </span>
        </h1>
      </motion.span>
    </div>
  );
}
