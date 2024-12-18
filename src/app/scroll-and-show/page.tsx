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
    <div className="h-[3000px]">
      <motion.span
        style={{ clipPath: `circle(${ballSize}%)` }}
        className="fixed w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 "
      ></motion.span>
      <div className="fixed flex flex-col top-[10%] left-[10%] text-4xl font-bold text-blue-800">
        <div className="overflow-hidden">
          <motion.p
            initial={{ bottom: "-150px" }}
            animate={{ bottom: ballSize > 70 ? "0" : "-150px" }}
            transition={{ type: "spring" }}
            className="relative"
          >
            Aha!
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ bottom: "-150px" }}
            animate={{ bottom: ballSize > 70 ? "0" : "-150px" }}
            transition={{ type: "spring" }}
            className="relative overflow-hidden"
          >
            You found me!
          </motion.p>
        </div>
      </div>
    </div>
  );
}
