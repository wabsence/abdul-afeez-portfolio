'use client'

import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      provider: 'Amazon Web Services',
      year: '2024',
      status: 'Active',
      description: 'Validates expertise in designing distributed systems and applications on AWS',
      skills: ['AWS Architecture', 'Cloud Security', 'Cost Optimization', 'High Availability'],
      badge: '☁️',
      color: 'from-orange-500 to-yellow-500',
      verifyLink: '#' // Add actual verification link
    },
    {
      name: 'HashiCorp Certified: Terraform Associate (003)',
      provider: 'HashiCorp',
      year: '2023',
      status: 'Active',
      description: 'Demonstrates proficiency in Infrastructure as Code using Terraform',
      skills: ['Infrastructure as Code', 'State Management', 'Terraform Modules', 'Provisioning'],
      badge: '🏗️',
      color: 'from-purple-500 to-blue-500',
      verifyLink: '#' // Add actual verification link
    },
    {
      name: 'Linux Essentials',
      provider: 'Linux Professional Institute',
      year: '2022',
      status: 'Active',
      description: 'Fundamental knowledge of Linux operating system and command line',
      skills: ['Linux Administration', 'Command Line', 'File Systems', 'Shell Scripting'],
      badge: '🐧',
      color: 'from-green-500 to-teal-500',
      verifyLink: '#' // Add actual verification link
    }
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

  const cardVariants = {
    hidden: { rotateY: -15, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise and commitment 
            to continuous learning in cloud technologies and DevOps practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group perspective-1000"
            >
              <div className="card-dark h-full group-hover:scale-105 transition-all duration-300 overflow-hidden">
                {/* Badge and Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{cert.badge}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cert.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {cert.status}
                  </div>
                </div>

                {/* Certification Name */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {cert.name}
                </h3>

                {/* Provider and Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent-400 font-semibold">{cert.provider}</span>
                  <span className="text-gray-400 text-sm">{cert.year}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-400 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block px-2 py-1 bg-dark-700 text-primary-400 text-xs font-medium rounded border border-dark-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => window.open(cert.verifyLink, '_blank')}
                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-r ${cert.color} text-white hover:shadow-glow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
                  >
                    Verify Credential
                  </button>
                </div>

                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-primary-400 mb-8 text-center">
            Continuous Learning & Development
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Learning Path */}
            <div className="card-dark">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <span>Current Learning Path</span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">AWS Certified DevOps Engineer - Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Certified Kubernetes Administrator (CKA)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">HashiCorp Certified: Consul Associate</span>
                </div>
              </div>
            </div>

            {/* Professional Development */}
            <div className="card-dark">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <span>Professional Development</span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-300">Cloud Security Best Practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-300">GitOps and CI/CD Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-300">Site Reliability Engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-300">Microservices Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification Stats */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Certifications', value: '3', icon: '🏆' },
              { label: 'Years of Learning', value: '4+', icon: '📈' },
              { label: 'Cloud Platforms', value: '1', icon: '☁️' },
              { label: 'Skill Areas', value: '15+', icon: '🔧' }
            ].map((stat, index) => (
              <div key={index} className="card-dark text-center group hover:scale-105">
                <div className="text-2xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Certifications