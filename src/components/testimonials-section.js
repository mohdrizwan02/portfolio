"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Senior Developer",
//       company: "TechStart Solutions",
//       image: "/placeholder.svg?height=80&width=80&text=SJ",
//       content:
//         "John was an exceptional intern who quickly adapted to our development workflow. His attention to detail and eagerness to learn made him a valuable team member. He consistently delivered high-quality code and showed great potential.",
//       rating: 5,
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "from-blue-500/20 to-cyan-500/20",
//     },
//     {
//       name: "Dr. Michael Chen",
//       role: "Professor",
//       company: "University of Technology",
//       image: "/placeholder.svg?height=80&width=80&text=MC",
//       content:
//         "As John's professor and mentor, I've watched him grow from a curious student to a skilled developer. His problem-solving abilities and collaborative spirit make him stand out among his peers. He has a bright future ahead.",
//       rating: 5,
//       color: "from-purple-500 to-pink-500",
//       bgColor: "from-purple-500/20 to-pink-500/20",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Project Manager",
//       company: "Digital Solutions Inc.",
//       image: "/placeholder.svg?height=80&width=80&text=ER",
//       content:
//         "Working with John on our e-commerce project was a pleasure. He communicated effectively, met all deadlines, and delivered exactly what we needed. His technical skills combined with his professionalism make him highly recommended.",
//       rating: 5,
//       color: "from-green-500 to-emerald-500",
//       bgColor: "from-green-500/20 to-emerald-500/20",
//     },
//   ]

const testimonials=[]

  return (
    testimonials.length>0 &&(<section id="testimonials" className="py-32 relative overflow-hidden">
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
            What People Say
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
            Feedback from colleagues, mentors, and clients I've had the pleasure to work with
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.02,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative"
            >
              <div className="bg-white/70 dark:bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden h-full">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-60" />

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      className={`p-3 bg-gradient-to-r ${testimonial.color} rounded-2xl shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Quote className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      <MessageSquare className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1 + index * 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <motion.div
                      className="w-14 h-14 rounded-2xl overflow-hidden mr-4 flex-shrink-0 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{testimonial.role}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>)
  )
}
