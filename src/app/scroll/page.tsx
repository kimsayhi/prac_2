"use client";
import { useScroll, animated } from "@react-spring/web";

export default function ScrollPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full h-[2000px]">
      <div className="fixed bg-gray-300 top-0 w-full h-5"></div>
      <animated.div
        style={{ width: scrollYProgress.to((y) => `${y * 100}%`) }}
        className="bg-red-500 h-5 fixed top-0"
      ></animated.div>
    </div>
  );
}
