import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaCode, 
  FaServer, 
  FaMobile, 
  FaRobot,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      technologies: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      technologies: ['Node.js', 'Python', 'Django', 'Express.js', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaRobot,
      title: 'AI & Automation',
      technologies: ['Machine Learning', 'Chatbots', 'Process Automation', 'NLP', 'TensorFlow'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const personalInfo = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Morocco' },
    { icon: FaClock, label: 'Experience', value: '5+ years' },
    { icon: FaCheckCircle, label: 'Status', value: 'Available for projects' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Passionate Developer from{' '}
            <span className="gradient-text">Morocco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions with expertise across multiple technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm Mohamed Laabouli, a 25-year-old software engineer with 5 years of experience 
                  in creating innovative digital solutions. Based in Morocco, I specialize in 
                  full-stack development, mobile applications, automation systems, and cutting-edge 
                  AI technologies.
                </p>
                <p>
                  My passion lies in transforming complex business requirements into elegant, 
                  scalable solutions that drive growth and efficiency. I pride myself on 
                  delivering high-quality work that exceeds client expectations and creates 
                  lasting value for businesses.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <info.icon className="text-primary-600" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="font-semibold text-gray-900">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA removed as requested */}
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Expertise</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {skill.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Commits This Year', icon: '💻' },
            { number: '15+', label: 'Technologies Mastered', icon: '🚀' },
            { number: '24/7', label: 'Problem Solving Mode', icon: '🔧' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
          ].map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {fact.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">
                {fact.number}
              </div>
              <div className="text-gray-600 font-medium">
                {fact.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About


