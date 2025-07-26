"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, GitBranch, Star, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function GithubStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: GitBranch,
      label: "Total Commits",
      value: "500+",
      description: "Across all repositories",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: "45",
      description: "From open source contributions",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      label: "Followers",
      value: "28",
      description: "Active GitHub followers",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: Github,
      label: "Repositories",
      value: "25",
      description: "Public repositories",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
  ]

  return (
    <section id="github" className="py-32 relative overflow-hidden">
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
            GitHub Activity
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A glimpse into my coding journey and open source contributions
          </motion.p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative"
            >
              <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 text-center border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.h3>

                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="group relative mb-12"
        >
          <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mr-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <TrendingUp className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">GitHub Contribution</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">My coding activity over the past year</p>
              </div>

              <div className="flex justify-center">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=200&width=800&text=GitHub+Contribution+Graph"
                    alt="GitHub Contribution Graph"
                    width={800}
                    height={200}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Stats Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { title: "GitHub Stats", alt: "GitHub Stats" },
            { title: "Top Languages", alt: "Top Languages" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{item.title}</h4>
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${item.alt}`}
                      alt={item.alt}
                      width={400}
                      height={200}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/mohdrizwan02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-white dark:to-gray-100 dark:hover:from-gray-100 dark:hover:to-white text-white dark:text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Github className="h-6 w-6 mr-3 relative z-10" />
            <span className="relative z-10">View GitHub Profile</span>
            <ExternalLink className="h-5 w-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
