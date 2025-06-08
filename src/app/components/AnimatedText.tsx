"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const text = ["Eid", "Mubarak", "🌙"];

  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <motion.p className="md:text-7xl text-3xl font-bold text-white flex gap-5 cursor-pointer">
          {text.map((word, index) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              //   whileHover={{ scale: 1.1, color: "green", textShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
