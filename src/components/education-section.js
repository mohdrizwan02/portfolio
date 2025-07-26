"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "B V Raju Institute of Technology",
      location: "Medak, Telangana",
      duration: "2022 - 2026",
      gpa: "8.32/10",
      achievements: [

      ],
      description:
        "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.",
      color: "from-blue-500 to-purple-500",
    },
    {
      degree: "Intermediate",
      institution: "TMR Junior College",
      location: "Sangareddy , Telangana",
      duration: "2020 - 2022",
      gpa: "97%",
      achievements: [
        "Topper of the Batch",


        "Student Council President",
      ],
      description:
        "Focused on Mathematics, Physics, Chemistry with strong foundation in analytical thinking.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
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
            Education
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line - properly centered */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block top-0 bottom-0" />

          <div className="space-y-20">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative flex items-center"
              >
                {/* Timeline dot - properly centered */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${edu.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden lg:block z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Content positioning - alternating sides */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:ml-auto lg:pl-16"}`}>
                  <motion.div
                    className="bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${edu.color} rounded-2xl mr-4`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <GraduationCap className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">{edu.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</h4>

                    <div className="flex items-center mb-6">
                      <Award className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4">Key Achievements:</h5>
                      <div className="space-y-3">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            transition={{ duration: 0.5, delay: index * 0.3 + achievementIndex * 0.1 + 0.8 }}
                            whileHover={{
                              x: 5,
                              transition: { type: "spring", stiffness: 400 },
                            }}
                            className="flex items-center text-gray-600 dark:text-gray-300 cursor-pointer group/item"
                          >
                            <motion.div
                              className={`w-3 h-3 bg-gradient-to-r ${edu.color} rounded-full mr-4 flex-shrink-0`}
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                            <span className="text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
