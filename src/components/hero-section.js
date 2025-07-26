"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Floating badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8"
          >
            <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
          </motion.div> */}

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {"Mohammad".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block"
                style={{ transformOrigin: "center bottom" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {"Rizwan".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block"
                style={{ transformOrigin: "center bottom" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-light text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
          >
            Web Developer & Software Engineer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Crafting digital experiences with clean code and innovative solutions. Passionate about creating
            user-centric applications that make a difference in the world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/mohdrizwan02", color: "hover:text-gray-900 dark:hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com/in/mohammadrizwan9515", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:mohammadrizwan9515@gmail.com", color: "hover:text-red-500" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="p-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10">
            <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  )
}
