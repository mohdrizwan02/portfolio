"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Eye, FileText, Calendar, FileCheck } from "lucide-react"

export default function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownload = () => {
    
    const link = document.createElement("a")
    link.href = "MOHAMMADRIZWAN_RESUME.pdf"
    link.download = "MOHAMMADRIZWAN_RESUME.pdf"
    link.click()
  }

  const handlePreview = () => {
    
    window.open("/MOHAMMADRIZWAN_RESUME.pdf", "_blank")
  }

  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Resume
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            className="group relative"
          >
            <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl mb-8 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FileText className="h-12 w-12 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Download My Resume</h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Get a comprehensive overview of my skills, experience, and achievements. My resume includes detailed
                  information about my technical expertise, project experience, and professional background.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <motion.button
                    onClick={handleDownload}
                    className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center relative z-10">
                      <Download className="h-6 w-6 mr-3 group-hover/btn:animate-bounce" />
                      Download PDF
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={handlePreview}
                    className="group/btn bg-white/50 dark:bg-black/20 backdrop-blur-sm border-2 border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-black/30 text-gray-700 dark:text-gray-300 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center relative z-10">
                      <Eye className="h-6 w-6 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Preview Online
                    </div>
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
                >
                  
                  <div className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2" />
                    <span>PDF</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
