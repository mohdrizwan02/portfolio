"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    "Problem Solving",
    "Team Collaboration",
    "Creative Thinking",
    "Continuous Learning",
    "Attention to Detail",
    "Communication",
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                className="lg:w-96 lg:h-96 w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/Profile_Image.jpg"
                  alt="Mohammad Rizwan - Web Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I'm a passionate Web Developer and Software Engineer with a fresh perspective and an eagerness to create
                meaningful digital experiences. My journey in technology began with curiosity and has evolved into a
                deep commitment to crafting clean, efficient, and user-focused solutions.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                With a strong foundation in modern web technologies and software development principles, I thrive on
                turning complex problems into elegant solutions. I believe in the power of collaboration, continuous
                learning, and the importance of writing code that not only works but is maintainable and scalable.
              </motion.p>
            </div>

            <div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Core Values & Soft Skills
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 cursor-pointer group"
                  >
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
