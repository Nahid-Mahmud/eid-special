import React from "react";
import moonSvg from "@/assets/moon_with_star.svg";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${moonSvg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "60px 60px",
          // give some gaps between the moons
          margin: "10px",
        }}
      />
    </div>
  );
}
