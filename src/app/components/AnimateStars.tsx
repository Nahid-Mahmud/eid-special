"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimateStars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random stars for twinkling effect
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 300; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-hidden ">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-yellow-200 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
