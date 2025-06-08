"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const text = ["Eid", "Mubarak"];
  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <motion.h1 className="text-6xl font-bold text-white flex gap-3">
          {text.map((word, index) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, color: "green" }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
}
