'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = [
    'DevOps Engineer',
    'Cloud Solutions Architect',
    'Infrastructure Engineer',
    'Linux Administrator'
  ]

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let charIndex = 0
    let isDeleting = false

    const typeWriter = setInterval(() => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex))
        charIndex++
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(currentRole.substring(0, charIndex))
        charIndex--
      }

      if (charIndex === currentRole.length + 1 && !isDeleting) {
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      }

      if (charIndex === 0 && isDeleting) {
        isDeleting = false
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }
    }, isDeleting ? 100 : 150)

    return () => clearInterval(typeWriter)
  }, [currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/assets/Abdul-afeez-Hassan-CV.pdf' // You'll need to add the CV to public/assets/
    link.download = 'Abdul-afeez-Hassan-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for professional headshot */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <svg className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Abdul-afeez Hassan</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a </span>
            <span className="text-primary-400 font-semibold min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experienced DevOps engineer and cloud solutions architect specializing in designing, 
            automating, and managing infrastructure using AWS, Terraform, Kubernetes, Docker, and CI/CD pipelines.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={downloadResume}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/abdul-afeez-hassan-327882108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:yinkxdevops@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            
            <a 
              href="tel:+447760944935"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Phone"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="animate-bounce"
        >
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary-400/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </motion.div>
    </div>
  )
}

export default Hero