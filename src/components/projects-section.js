"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web App", "Mobile", "API", "Tool"]

  // const projects = [
  //   {
  //     id: 1,
  //     title: "E-Commerce Platform",
  //     description:
  //       "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard with real-time analytics.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
  //     category: "Web App",
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Task Management App",
  //     description:
  //       "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with modern technologies.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["Next.js", "JavaScript", "Socket.io", "MongoDB", "Framer Motion"],
  //     category: "Web App",
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Weather Forecast API",
  //     description:
  //       "RESTful API service providing accurate weather forecasts with caching, rate limiting, and comprehensive documentation for developers.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["Express.js", "Redis", "OpenWeather API", "Swagger", "Docker"],
  //     category: "API",
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Portfolio Website",
  //     description:
  //       "A responsive portfolio website with smooth animations, dark mode support, and optimized performance built with modern web technologies.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["Next.js", "Framer Motion", "Tailwind CSS", "JavaScript"],
  //     category: "Web App",
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: true,
  //   },
  // ]

  const projects =[]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    projects.length>0 &&(<section id="projects" className="py-32 relative">
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
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-black/30"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <motion.div
                    className="aspect-video relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project actions overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-6 w-6 text-gray-900 dark:text-white" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-6 w-6" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        ⭐ Featured
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + techIndex * 0.1 + 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          transition: { type: "spring", stiffness: 400 },
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium cursor-pointer border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>)
  )
}
