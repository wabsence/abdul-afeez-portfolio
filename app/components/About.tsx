'use client'

import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: '🚀' },
    { label: 'Cloud Projects', value: '50+', icon: '☁️' },
    { label: 'Deployment Frequency', value: '500%', icon: '⚡' },
    { label: 'Cost Optimization', value: '35%', icon: '💰' },
  ]

  const highlights = [
    'Led implementation of Kubernetes clusters improving deployment frequency by 500%',
    'Designed GitOps workflows using ArgoCD reducing lead time by 80%',
    'Implemented comprehensive observability with ELK stack and Datadog',
    'Automated compliance checks achieving 100% compliance score',
    'Optimized AWS services utilization reducing costs by 35%'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900/50 to-dark-800/50">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                DevOps Engineer & Cloud Solutions Architect
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As an experienced DevOps engineer and cloud solutions architect based in London, UK, 
                I specialize in designing, automating, and managing infrastructure using cutting-edge 
                technologies and best practices.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise spanning AWS, Terraform, Kubernetes, Docker, and comprehensive CI/CD 
                pipelines, I have successfully built scalable, secure, and efficient systems that 
                drive business value and operational excellence.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My hands-on experience in managing cloud services, networking, security, and monitoring 
                solutions ensures compliance and performance optimization while maintaining the highest 
                standards of reliability and availability.
              </p>

              <div className="pt-6">
                <h4 className="text-xl font-semibold text-primary-400 mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card-dark text-center group hover:scale-105"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional Values */}
              <motion.div variants={itemVariants} className="card-dark">
                <h4 className="text-xl font-semibold text-primary-400 mb-4">
                  Professional Values
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                    <span className="text-gray-300">Continuous Learning & Innovation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                    <span className="text-gray-300">Automation & Efficiency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                    <span className="text-gray-300">Security & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                    <span className="text-gray-300">Team Collaboration</span>
                  </div>
                </div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-semibold text-primary-400 mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    BSc in Computer Science
                  </h4>
                  <p className="text-primary-400">National Open University</p>
                  <p className="text-sm text-gray-400">2016 - 2020 | Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="card-dark">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    OND in Computer Science
                  </h4>
                  <p className="text-primary-400">Kwara State Polytechnic</p>
                  <p className="text-sm text-gray-400">2009 - 2011 | Ilorin, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About