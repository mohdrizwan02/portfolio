"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences=[]

//   const experiences = [
//     {
//       role: "Frontend Developer Intern",
//       company: "TechStart Solutions",
//       location: "Remote",
//       duration: "June 2023 - August 2023",
//       type: "Internship",
//       description: "Contributed to the development of a customer management system using React and JavaScript.",
//       responsibilities: [
//         "Developed responsive UI components using React and Tailwind CSS",
//         "Implemented user authentication and authorization features",
//         "Collaborated with backend team to integrate REST APIs",
//         "Participated in code reviews and agile development processes",
//         "Improved application performance by 25% through code optimization",
//       ],
//       technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "REST APIs"],
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       role: "Web Development Freelancer",
//       company: "Self-Employed",
//       location: "Remote",
//       duration: "January 2023 - Present",
//       type: "Freelance",
//       description: "Providing web development services to small businesses and startups.",
//       responsibilities: [
//         "Built custom websites for 5+ clients using modern web technologies",
//         "Implemented e-commerce solutions with payment gateway integration",
//         "Provided ongoing maintenance and support for client websites",
//         "Managed project timelines and client communications",
//         "Achieved 100% client satisfaction rate with on-time delivery",
//       ],
//       technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe API"],
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       role: "Teaching Assistant",
//       company: "University of Technology",
//       location: "On-site",
//       duration: "September 2022 - May 2023",
//       type: "Academic",
//       description: "Assisted in teaching web development fundamentals to undergraduate students.",
//       responsibilities: [
//         "Conducted lab sessions for 30+ students on HTML, CSS, and JavaScript",
//         "Graded assignments and provided constructive feedback",
//         "Mentored students on programming best practices",
//         "Developed supplementary learning materials and tutorials",
//         "Maintained 95% student satisfaction rating",
//       ],
//       technologies: ["HTML", "CSS", "JavaScript", "Git", "VS Code"],
//       color: "from-green-500 to-teal-500",
//     },
//   ]

  const typeColors = {
    Internship: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    Freelance: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    Academic: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
  }

  return (
    
    experiences.length>0 && (<section id="experience" className="py-32 relative">
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
            Experience
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line - properly positioned on the left */}
          <div className="absolute left-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block top-0 bottom-0" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative"
              >
                {/* Timeline dot - properly positioned */}
                <motion.div
                  className={`absolute left-[22px] w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Content with proper margin */}
                <div className="md:ml-20">
                  <motion.div
                    className="bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center mb-4 md:mb-0">
                        <motion.div
                          className={`p-3 bg-gradient-to-r ${exp.color} rounded-2xl mr-4`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Briefcase className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                          <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300">{exp.company}</h4>
                        </div>
                      </div>
                      <motion.span
                        className={`px-4 py-2 rounded-2xl text-sm font-bold ${typeColors[exp.type]} self-start`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.3 + 0.7, type: "spring", stiffness: 200 }}
                      >
                        {exp.type}
                      </motion.span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center text-gray-500 dark:text-gray-400 mb-6 space-y-2 md:space-y-0 md:space-x-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">{exp.description}</p>

                    <div className="mb-8">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Key Responsibilities:</h5>
                      <div className="space-y-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.div
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.3 + respIndex * 0.1 + 0.8 }}
                            whileHover={{
                              x: 10,
                              transition: { type: "spring", stiffness: 400 },
                            }}
                            className="flex items-start text-gray-600 dark:text-gray-300 cursor-pointer group/item"
                          >
                            <motion.div
                              className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full mr-4 mt-2 flex-shrink-0`}
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                            <span className="text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                              {responsibility}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.3 + techIndex * 0.1 + 1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{
                              scale: 1.1,
                              y: -2,
                              transition: { type: "spring", stiffness: 400 },
                            }}
                            className={`px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-10 border border-current border-opacity-20 text-gray-700 dark:text-gray-300 text-sm rounded-2xl font-medium cursor-pointer`}
                          >
                            {tech}
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
    </section>)
  )
}
