"use client";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export default function SpringPage() {
  //------------------------
  const [isFill, setIsFill] = useState(false);
  const progressBar = useRef<HTMLDivElement>(null);
  const progressProps = useSpring({
    width: isFill ? progressBar.current?.clientWidth : 0,
  });
  //-----------------------
  const [props, api] = useSpring(() => ({
    value: 0,
  }));
  console.log(props);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      api.start({ value: parseInt(newNum) });
    }, 2000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex w-full gap-10 justify-center items-center h-screen">
      <div
        ref={progressBar}
        onClick={() => {
          setIsFill((prev) => !prev);
        }}
        className="w-[200px] h-[50px] outline relative flex items-center justify-center"
      >
        <animated.span
          className={"z-10 flex justify-center"}
          style={progressProps}
        >
          {progressProps.width?.to((x) => x.toFixed(0))}
        </animated.span>
        <animated.div
          className={"absolute left-0 h-full bg-pink-400 flex"}
          style={progressProps}
        ></animated.div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <animated.div className="w-[100px] h-[100px] ">
          {props.value.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
}
