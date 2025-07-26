'use client'
import Image from "next/image";

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import ScrollProgress from "@/components/scroll-progress";
import CertificationsSection from "@/components/certifications-section";
import CursorFollower from "@/components/cursor-follower";
import GithubStatsSection from "@/components/github-stats-section";
import ResumeSection from "@/components/resume-section";
import TestimonialsSection from "@/components/testimonials-section";
import FunExtrasSection from "@/components/fun-extras-section";

export default function Home() {

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <ScrollProgress />
      <CursorFollower/>


      <div ref={containerRef} className="relative min-h-screen overflow-hidden">

        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 -z-10"
          style={{ y: backgroundY }}
        />

        {/* Glass morphism overlay */}
        <div className="fixed inset-0 bg-white/30 dark:bg-black/20 backdrop-blur-3xl -z-10" />

        <Navigation />


        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <GithubStatsSection/>
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection/>
          <ExperienceSection />
          <ContactSection />
          <ResumeSection/>
          <TestimonialsSection/>
          <FunExtrasSection/>

        </main>
      </div>
    </>
  );
}
