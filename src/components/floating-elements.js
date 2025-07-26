"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Heart, Star, Sparkles } from "lucide-react"

export default function FloatingElements() {
  const elements = [
    { icon: Code, delay: 0, color: "from-blue-400 to-cyan-400" },
    { icon: Palette, delay: 1, color: "from-purple-400 to-pink-400" },
    { icon: Zap, delay: 2, color: "from-yellow-400 to-orange-400" },
    { icon: Heart, delay: 3, color: "from-red-400 to-pink-400" },
    { icon: Star, delay: 4, color: "from-indigo-400 to-purple-400" },
    { icon: Sparkles, delay: 5, color: "from-green-400 to-teal-400" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-10"
          style={{
            left: `${15 + ((index * 15) % 70)}%`,
            top: `${20 + ((index * 12) % 60)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Element.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-r ${Element.color} rounded-2xl flex items-center justify-center shadow-2xl`}
          >
            <Element.icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
