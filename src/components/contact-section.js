"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"


export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // try {
        //   // Simulate API call
        //   await new Promise((resolve) => setTimeout(resolve, 2000))

        //   showToast("Message sent successfully!", "Thank you for reaching out. I'll get back to you soon.", "success")

        //   setFormData({ name: "", email: "", subject: "", message: "" })
        // } catch (error) {
        //   showToast("Error sending message", "Please try again later or contact me directly.", "error")
        // } finally {
        //   setIsSubmitting(false)
        // }
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "mohammadrizwan9515@gmail.com",
            href: "mailto:mohammadrizwan9515@gmail.com",
            color: "from-red-500 to-pink-500",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9515269727",
            href: "tel:+919515269727",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Hyderabad , India",
            href: "#",
            color: "from-blue-500 to-cyan-500",
        },
    ]

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/mohdrizwan02",
            color: "hover:text-gray-900 dark:hover:text-white",
            bgColor: "from-gray-600 to-gray-800",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/mohammadrizwan9515",
            color: "hover:text-blue-600",
            bgColor: "from-blue-600 to-blue-800",
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com/mohd__rizwan02",
            color: "hover:text-blue-400",
            bgColor: "from-sky-500 to-blue-600",
        },
    ]

    return (
        <section id="contact" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 128 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.p
                        className="lg:text-xl text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about
                        technology and development. Let&apos;s create something amazing together!
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-white/10 shadow-2xl">
                            <motion.h3
                                className="lg:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.5 }}
                            >
                                <MessageCircle className="h-7 w-7 mr-3 text-blue-500" />
                                Let&apos;s Connect
                            </motion.h3>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-black/20 transition-all duration-300 cursor-pointer group"
                                    >
                                        <motion.div
                                            className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center shadow-lg`}
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <info.icon className="h-5 w-5 text-white" />
                                        </motion.div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                                {info.label}
                                            </p>
                                            {info.href !== "#" ? (
                                                <a
                                                    href={info.href}
                                                    className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <motion.h4
                                    className="text-xl font-bold text-gray-900 dark:text-white mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 1 }}
                                >
                                    Follow Me
                                </motion.h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-4 bg-gradient-to-r ${social.bgColor} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                                        >
                                            <social.icon className="h-6 w-6" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability Status */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                                className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30"
                            >
                                <div className="flex items-center">
                                    <motion.div
                                        className="w-4 h-4 bg-green-500 rounded-full mr-3"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                    />
                                    <p className="text-green-800 dark:text-green-200 font-bold text-lg">
                                        Available for new opportunities
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                            placeholder="Your name"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                        placeholder="What's this about?"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 1 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 1.1 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
