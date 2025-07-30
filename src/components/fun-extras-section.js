"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Eye, Code, Coffee, Music, BookOpen, Gamepad2, Sparkles, Activity, Zap, Download, ArrowRightCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"


export default function FunExtrasSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const router = useRouter();

    const [visitorCount, setVisitorCount] = useState(1337)
    const [isOnline, setIsOnline] = useState(true)


    useEffect(() => {
        // Simulate visitor counter increment
        const timer = setTimeout(() => {
            setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) + 1)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const stats = [
        {
            icon: Coffee,
            label: "Cups of Coffee",
            value: "∞",
            description: "Fuel for coding sessions",
            color: "from-amber-500 to-orange-500",
            bgColor: "from-amber-500/20 to-orange-500/20",
        },
        {
            icon: Code,
            label: "Lines of Code",
            value: "50K+",
            description: "And counting...",
            color: "from-blue-500 to-indigo-500",
            bgColor: "from-blue-500/20 to-indigo-500/20",
        },
        {
            icon: Music,
            label: "Coding Playlist",
            value: "247",
            description: "Songs for focus",
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-500/20 to-pink-500/20",
        },
        {
            icon: Gamepad2,
            label: "Side Projects",
            value: "12",
            description: "Fun experiments",
            color: "from-green-500 to-emerald-500",
            bgColor: "from-green-500/20 to-emerald-500/20",
        },
    ]

    const blogPosts = [
        {
            title: "Building My First Full-Stack App",
            date: "Jan 15, 2024",
            excerpt: "Lessons learned from creating an e-commerce platform from scratch...",
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Why I Love JavaScript",
            date: "Dec 28, 2023",
            excerpt: "How JavaScript improved my development workflow and code quality...",
            color: "from-yellow-500 to-orange-500",
        },
        {
            title: "My Journey into Web Development",
            date: "Dec 10, 2023",
            excerpt: "From complete beginner to landing my first internship...",
            color: "from-purple-500 to-pink-500",
        },
    ]

    return (
        <section id="extras" className="py-32 relative overflow-hidden">
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
                        Just for Fun
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
                        Tap into some less serious, more fun parts of my portfolio
                    </motion.p>
                </motion.div>

                {/* Visitor Counter & Status */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                        className="group relative"
                    >
                        <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-10 text-center border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                            {/* Glossy overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <motion.div
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Eye className="h-8 w-8 text-white" />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visitor Counter</h3>

                                <motion.p
                                    key={visitorCount}
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
                                >
                                    {visitorCount.toLocaleString()}
                                </motion.p>

                                <p className="text-gray-600 dark:text-gray-300 font-medium">Thank you for visiting!</p>
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
                        className="group relative"
                    >
                        <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-10 text-center border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                            {/* Glossy overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-6">
                                    <motion.div
                                        className={`w-4 h-4 rounded-full mr-4 ${isOnline ? "bg-green-500" : "bg-red-500"} shadow-lg`}
                                        animate={isOnline ? { scale: [1, 1.2, 1] } : {}}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                    />
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <Activity className="h-8 w-8 text-white" />
                                    </motion.div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Status</h3>

                                <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {isOnline ? "Currently Online" : "Offline"}
                                </p>

                                <p className="text-gray-600 dark:text-gray-300 font-medium">
                                    {isOnline ? "Available for opportunities" : "Will respond soon"}
                                </p>
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
                    </motion.div>
                </div>

                {/* Fun Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
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
                                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg`}
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <stat.icon className="h-7 w-7 text-white" />
                                    </motion.div>

                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h4>
                                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">{stat.label}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
                            />
                        </motion.div>
                    ))}
                </motion.div>


                {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mb-16"
        >
          <div className="group relative inline-block">
            <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Enjoying the {theme === "dark" ? "dark" : "light"} theme?
                </h3>

                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/btn"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center relative z-10">
                    <Zap className="h-5 w-5 mr-2 group-hover/btn:animate-pulse" />
                    Switch to {theme === "dark" ? "Light" : "Dark"} Mode
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div> */}

                {/* Blog Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="group relative"
                >
                    <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                        {/* Glossy overlay */}
                        <div className="absolute inset-0  rounded-3xl opacity-60" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center">
                                    <motion.div
                                        className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mr-4 shadow-lg"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <BookOpen className="h-6 w-6 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Blog Posts</h3>
                                </div>

                            </div>

                            <motion.div
                                initial={false}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-6">
                                    {blogPosts.map((post, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 200 }}
                                            className="group/post relative"
                                        >
                                            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-300 relative overflow-hidden">
                                                {/* Glossy overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover/post:opacity-100 transition-opacity duration-300" />

                                                {/* Background gradient */}
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-r ${post.color} opacity-0 group-hover/post:opacity-10 rounded-2xl transition-opacity duration-300`}
                                                />

                                                <div className="relative z-10">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover/post:text-blue-600 dark:group-hover/post:text-blue-400 transition-colors duration-300">
                                                            {post.title}
                                                        </h4>
                                                        <motion.div
                                                            className={`w-3 h-3 bg-gradient-to-r ${post.color} rounded-full shadow-sm`}
                                                            whileHover={{ scale: 1.5 }}
                                                            transition={{ type: "spring", stiffness: 400 }}
                                                        />
                                                    </div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">{post.date}</p>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{post.excerpt}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <div className="mt-8 flex justify-center">

                            
                            <motion.button

                                className="btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                               
                                
                            >
                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                                <div className="flex items-center relative z-10">
                                    <ArrowRightCircleIcon className="h-6 w-6 mr-3 group-hover/btn:animate-bounce" />
                                    View All
                                </div>
                            </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
                </motion.div>
            </div>
        </section>
    )
}
