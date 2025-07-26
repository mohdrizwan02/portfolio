

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Award, Calendar, BookOpen, GraduationCap } from "lucide-react"

export default function CertificationsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const certifications = [
        {
            name: "IBM Data Science",
            issuer: "IBM - Coursera ",
            date: "March 2024",
            credentialId: "",
            url: "https://aws.amazon.com/certification/",
            description: "Foundational understanding of AWS Cloud concepts, services, and terminology.",
        },
        {
            name: "Meta Frontend Developer",
            issuer: "Meta - Coursera",
            date: "February 2024",
            credentialId: "",
            url: "https://developers.facebook.com/",
            description: "Advanced React concepts including hooks, context, and performance optimization.",
        },
        {
            name: "Amazon Junior Software Developer",
            issuer: "Amazon - Coursera",
            date: "January 2024",
            credentialId: "",
            url: "https://freecodecamp.org/",
            description: "Comprehensive coverage of JavaScript fundamentals and algorithmic thinking.",
        },

    ]


    const courses = []

    return (
        <section id="certifications" className="py-32 relative overflow-hidden">
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
                        Certifications & Learning
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 128 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.div>

                {/* Certifications */}
                <div className="mb-20">


                    <div className="grid md:grid-cols-2 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -5,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                                className="group relative"
                            >
                                <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                                    {/* Glossy overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                                    {/* Background gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${cert.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center flex-1">
                                                <motion.div
                                                    className={`p-3 bg-gradient-to-r ${cert.color} rounded-2xl mr-4 shadow-lg`}
                                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                                    transition={{ type: "spring", stiffness: 400 }}
                                                >
                                                    <Award className="h-6 w-6 text-white" />
                                                </motion.div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                                                </div>
                                            </div>
                                            <motion.a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/70 dark:hover:bg-black/30"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                                            </motion.a>
                                        </div>

                                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span className="text-sm font-medium">{cert.date}</span>
                                            <span className="mx-3">•</span>
                                            <span className="text-sm">ID: {cert.credentialId}</span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                                    </div>
                                </div>

                                {/* Glow effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Relevant Coursework */}
                {courses.length>0 && <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <motion.div
                                className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl mr-4"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <BookOpen className="h-6 w-6 text-white" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Coursework</h3>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                                transition={{ duration: 0.8, delay: 1.4 + index * 0.1, type: "spring", stiffness: 100 }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -5,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                                className="group relative"
                            >
                                <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                                    {/* Glossy overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4">
                                            <motion.div
                                                className={`p-3 bg-gradient-to-r ${course.color} rounded-2xl mr-4 shadow-lg`}
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                <GraduationCap className="h-6 w-6 text-white" />
                                            </motion.div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{course.name}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{course.provider}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{course.description}</p>
                                    </div>
                                </div>

                                {/* Glow effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${course.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>}
            </div>
        </section>
    )
}

