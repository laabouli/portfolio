import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Cross-platform mobile app for project and task management',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '📱',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing capabilities',
      category: 'ai',
      technologies: ['Python', 'NLP', 'TensorFlow'],
      image: '🤖',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization and reporting platform',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      image: '📊',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Document Analysis AI',
      description: 'AI-powered document processing and analysis system',
      category: 'ai',
      technologies: ['Python', 'OpenAI', 'OCR'],
      image: '📄',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Health and fitness mobile app with wearable integration',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'HealthKit'],
      image: '💪',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Automation' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and achievements across different technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover overflow-hidden group"
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <span className="relative z-10">{project.image}</span>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                    <FaExternalLinkAlt size={16} />
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                    <FaGithub size={16} />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and help bring your ideas to life.
          </p>
          <button className="btn-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio


