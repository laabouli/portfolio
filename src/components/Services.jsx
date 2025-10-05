import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaLaptopCode, 
  FaMobile, 
  FaCogs, 
  FaRobot,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies and best practices.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.',
      features: [
        'React Native Apps',
        'Flutter Applications',
        'Native iOS & Android',
        'App Store Deployment',
        'Push Notifications'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: FaCogs,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation that saves time and reduces costs.',
      features: [
        'Process Automation',
        'Data Processing Scripts',
        'Workflow Optimization',
        'Integration Solutions',
        'Custom Tools Development'
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: FaRobot,
      title: 'AI & Chatbots',
      description: 'Intelligent AI solutions and conversational interfaces that enhance user engagement and automate support.',
      features: [
        'Custom Chatbots',
        'AI-Powered Applications',
        'Machine Learning Models',
        'Natural Language Processing',
        'Recommendation Systems'
      ],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
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
            Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What I Can Do{' '}
            <span className="gradient-text">For You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your business needs with cutting-edge technology and proven methodologies
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`relative bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-xl`}></div>
              </div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white" size={24} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center text-gray-700"
                    >
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group inline-flex items-center`}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              My Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures project success and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your needs, goals, and requirements',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmap and architecture',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with regular updates',
                icon: '⚡'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Launch and ongoing support for your project',
                icon: '🚀'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="text-3xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services


