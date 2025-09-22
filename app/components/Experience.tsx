'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'HBImpact',
      location: 'London, UK',
      period: '01/2024 – Present',
      type: 'Full-time',
      achievements: [
        'Led implementation of Kubernetes cluster improving deployment frequency by 500%',
        'Designed GitOps workflow using ArgoCD, reducing lead time for changes by 80%',
        'Developed comprehensive observability strategy using ELK stack and Datadog',
        'Implemented infrastructure security scanning, reducing vulnerabilities by 85%',
        'Automated compliance checks achieving 100% compliance score',
        'Designed blue-green deployment strategy eliminating downtime',
        'Optimized AWS services utilization reducing cloud costs by 35%'
      ],
      technologies: ['AWS', 'Kubernetes', 'ArgoCD', 'Terraform', 'Docker', 'ELK Stack', 'Datadog']
    },
    {
      title: 'Infrastructure Engineer',
      company: 'Zerone Space',
      location: 'Lagos, Nigeria',
      period: '01/2022 – 12/2023',
      type: 'Full-time',
      achievements: [
        'Architected infrastructure-as-code using Terraform, reducing provisioning time by 75%',
        'Led cloud migration transitioning 40% of workloads to AWS with 35% cost savings',
        'Designed CI/CD pipeline increasing deployment frequency by 300%',
        'Automated network configuration with Ansible, reducing errors by 85%',
        'Implemented monitoring with Prometheus and Grafana improving incident detection by 50%',
        'Optimized cloud resource allocation reducing infrastructure costs by 25%',
        'Designed disaster recovery strategy improving RTO by 65%'
      ],
      technologies: ['Terraform', 'AWS', 'Ansible', 'Prometheus', 'Grafana', 'CI/CD']
    },
    {
      title: 'Linux Administrator',
      company: 'Easylink Enterprises',
      location: 'Lagos, Nigeria',
      period: '08/2020 – 12/2021',
      type: 'Full-time',
      achievements: [
        'Maintained 50+ Linux servers achieving 99.9% uptime',
        'Implemented automated patching reducing security vulnerabilities by 65%',
        'Deployed centralized logging improving troubleshooting efficiency by 35%',
        'Developed automation scripts saving 15 hours weekly',
        'Led virtualization migration reducing hardware costs by 30%',
        'Established standardized server builds reducing deployment time by 60%',
        'Performed security audits reducing incidents by 70% year-over-year'
      ],
      technologies: ['Linux', 'Shell Scripting', 'Virtualization', 'Security Auditing']
    }
  ]

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900/30 to-dark-800/30">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A progressive career journey in DevOps and infrastructure engineering, 
            delivering measurable results and driving technological excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2 origin-top"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform md:-translate-x-1/2 shadow-glow-md z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    className="card-dark group hover:scale-105"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          index === 0 ? 'bg-green-500/20 text-green-400' : 'bg-primary-500/20 text-primary-400'
                        }`}>
                          {index === 0 ? 'Current' : exp.type}
                        </span>
                        <span className="text-sm text-gray-400">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg font-semibold text-accent-400">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-primary-400 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block px-3 py-1 bg-dark-700 text-primary-400 text-xs font-medium rounded-full border border-dark-600 hover:border-primary-500 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-2xl font-semibold text-primary-400 mb-8 text-center">
            Career Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: '500%',
                label: 'Deployment Frequency Improvement',
                icon: '🚀'
              },
              {
                metric: '85%',
                label: 'Infrastructure Vulnerability Reduction',
                icon: '🔒'
              },
              {
                metric: '35%',
                label: 'Cloud Cost Optimization',
                icon: '💰'
              },
              {
                metric: '99.9%',
                label: 'System Uptime Achievement',
                icon: '⚡'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark text-center group hover:scale-105"
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce">{highlight.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-2">{highlight.metric}</div>
                <div className="text-sm text-gray-400">{highlight.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience