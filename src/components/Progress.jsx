// src/components/Progress.jsx
import React from "react";
import { motion } from "framer-motion";

const Progress = () => {
  return (
    <div className="flex flex-col items-center justify-center 
    min-h-screen bg-gradient-to-br from-gray-100
     via-white to-gray-200 p-4">
      {/* 로고/아이콘 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <span className="text-6xl">🚧</span>
      </motion.div>

      {/* 텍스트 */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We’re working on something great!
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-600 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Our new website is under construction. Please check back soon 🚀
      </motion.p>

      {/* 로딩 애니메이션 (점 3개) */}
      <motion.div
        className="flex space-x-2 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              repeat: Infinity,
            },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-gray-600 rounded-full"
            variants={{
              hidden: { opacity: 0.3, y: 0 },
              visible: {
                opacity: 1,
                y: -6,
                transition: { yoyo: Infinity, duration: 0.5 },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Progress;
