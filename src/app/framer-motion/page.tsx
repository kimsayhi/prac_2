"use client";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
export default function FramerMotionPage() {
  const xMotionValue = useMotionValue(0);
  const bgMotionValue = useTransform(
    xMotionValue,
    [-300, -200, 100, 0, 100, 200, 300],
    [
      "#158784",
      "#813012",
      "#125625",
      "#f19b1a",
      "#a9ba13",
      "#dd11aa",
      "#ba2135",
    ]
  );
  const textMotionValue = useTransform(
    xMotionValue,
    [-300, 300],
    ["#000", "#fff"]
  );
  useMotionValueEvent(bgMotionValue, "change", (value) => {
    console.log(value);
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <motion.div
        style={{
          x: xMotionValue,
          backgroundColor: bgMotionValue,
          color: textMotionValue,
        }}
        drag="x"
        className="px-4 py-2 rounded-md bg-blue-400"
      >
        {"hello"}
      </motion.div>
    </div>
  );
}
