'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('cloud')

  const skillCategories = {
    cloud: {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 95, description: 'Core services, networking, IAM, serverless, security' },
        { name: 'EC2 & Auto Scaling', level: 90, description: 'Instance management and scaling strategies' },
        { name: 'S3 & Storage', level: 90, description: 'Object storage and lifecycle management' },
        { name: 'RDS & Databases', level: 85, description: 'Managed database services and optimization' },
        { name: 'Lambda & Serverless', level: 85, description: 'Function-as-a-Service and event-driven architecture' },
      ]
    },
    iac: {
      title: 'Infrastructure as Code',
      icon: '🏗️',
      skills: [
        { name: 'Terraform', level: 95, description: 'HCL, state management, modules, providers' },
        { name: 'CloudFormation', level: 80, description: 'Stack creation, nested stacks, drift detection' },
        { name: 'Ansible', level: 85, description: 'Automation, playbooks, roles, inventory management' },
        { name: 'Configuration Management', level: 88, description: 'Automated deployment and configuration' },
      ]
    },
    containers: {
      title: 'Containerization & Orchestration',
      icon: '🐳',
      skills: [
        { name: 'Docker', level: 92, description: 'Containerization, Dockerfile, Docker Compose' },
        { name: 'Kubernetes', level: 90, description: 'Orchestration, networking, monitoring, autoscaling' },
        { name: 'ArgoCD', level: 85, description: 'GitOps workflows and continuous deployment' },
        { name: 'Microservices', level: 87, description: 'Decomposing monolithic applications' },
      ]
    },
    cicd: {
      title: 'CI/CD & DevOps',
      icon: '🚀',
      skills: [
        { name: 'AWS CodePipeline', level: 90, description: 'Automated CI/CD pipeline orchestration' },
        { name: 'GitHub Actions', level: 88, description: 'Workflow automation and integrations' },
        { name: 'Jenkins', level: 85, description: 'Build automation and plugin ecosystem' },
        { name: 'GitLab CI/CD', level: 82, description: 'Integrated DevOps platform workflows' },
      ]
    },
    monitoring: {
      title: 'Monitoring & Security',
      icon: '📊',
      skills: [
        { name: 'Datadog', level: 90, description: 'Dashboards, alerts, tracing, log management' },
        { name: 'CloudWatch', level: 88, description: 'AWS native monitoring and alerting' },
        { name: 'ELK Stack', level: 85, description: 'Elasticsearch, Logstash, Kibana for observability' },
        { name: 'Security Scanning', level: 85, description: 'TerraScan, Snyk, SonarQube, compliance' },
      ]
    },
    systems: {
      title: 'Systems & Tools',
      icon: '💻',
      skills: [
        { name: 'Linux Administration', level: 95, description: 'Server management, automation, troubleshooting' },
        { name: 'Redis', level: 80, description: 'Caching, data structures, clustering' },
        { name: 'Networking', level: 85, description: 'VPC, security groups, load balancing' },
        { name: 'Shell Scripting', level: 90, description: 'Bash automation and system administration' },
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const skillBarVariants = {
    hidden: { width: '0%' },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    }),
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical expertise spanning cloud platforms, infrastructure automation, 
            containerization, and modern DevOps practices.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow-md'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-primary-400 border border-dark-600'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="card-dark">
            <h3 className="text-2xl font-semibold text-primary-400 mb-8 flex items-center space-x-3">
              <span className="text-3xl">{skillCategories[activeCategory as keyof typeof skillCategories].icon}</span>
              <span>{skillCategories[activeCategory as keyof typeof skillCategories].title}</span>
            </h3>
            
            <div className="space-y-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-white group-hover:text-primary-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-primary-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-3">
                    {skill.description}
                  </p>
                  
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      variants={skillBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Competencies Overview */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-primary-400 mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Cloud Architecture',
                description: 'Designing scalable, secure, and cost-effective cloud solutions',
                icon: '🏛️'
              },
              {
                title: 'Automation',
                description: 'Building automated workflows and infrastructure provisioning',
                icon: '⚙️'
              },
              {
                title: 'Performance Optimization',
                description: 'Improving system performance and reducing operational costs',
                icon: '🚄'
              },
              {
                title: 'Security & Compliance',
                description: 'Implementing security best practices and compliance frameworks',
                icon: '🔒'
              },
              {
                title: 'Monitoring & Observability',
                description: 'Comprehensive system monitoring and incident management',
                icon: '👁️'
              },
              {
                title: 'Team Leadership',
                description: 'Leading cross-functional teams and DevOps culture adoption',
                icon: '👥'
              }
            ].map((competency, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark group hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-3xl mb-4 group-hover:animate-bounce">
                    {competency.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {competency.title}
                  </h4>
                  <p className="text-gray-400">
                    {competency.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Tools */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-semibold text-primary-400 mb-8 text-center">
            Professional Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'AWS', category: 'Cloud' },
              { name: 'Terraform', category: 'IaC' },
              { name: 'Kubernetes', category: 'Container' },
              { name: 'Docker', category: 'Container' },
              { name: 'Jenkins', category: 'CI/CD' },
              { name: 'GitLab', category: 'CI/CD' },
              { name: 'Ansible', category: 'Config' },
              { name: 'Datadog', category: 'Monitor' },
              { name: 'Prometheus', category: 'Monitor' },
              { name: 'Redis', category: 'Database' },
              { name: 'Linux', category: 'OS' },
              { name: 'Git', category: 'Version' }
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-800 border border-dark-600 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-glow-sm transition-all duration-300 group"
              >
                <div className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                  {tool.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills