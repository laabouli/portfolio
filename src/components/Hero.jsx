import React from 'react'
import profileImage from '../assets/med.jpeg'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaMobile, 
  FaRobot,
  FaRocket,
  FaEnvelope,
  FaGithub,
  FaLinkedin 
} from 'react-icons/fa'

const Hero = () => {
  const floatingIcons = [
    { icon: FaReact, color: 'text-cyan-400', delay: 0.5, bg: 'bg-cyan-50' },
    { icon: FaNodeJs, color: 'text-green-500', delay: 0.7, bg: 'bg-green-50' },
    { icon: FaPython, color: 'text-yellow-500', delay: 0.9, bg: 'bg-yellow-50' },
    { icon: FaMobile, color: 'text-purple-500', delay: 1.1, bg: 'bg-purple-50' },
    { icon: FaRobot, color: 'text-pink-500', delay: 1.3, bg: 'bg-pink-50' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 relative z-10"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-gray-300 font-mono text-sm">Welcome to my portfolio</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">Building</span>
                <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl font-bold text-gray-300 mt-4">
                I'm <span className="text-white">Mohamed Laabouli</span>
              </div>
            </motion.div>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl lg:text-4xl font-bold text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Mobile App Creator',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              Crafting exceptional digital experiences with{' '}
              <span className="text-accent-400 font-semibold">5+ years</span> of expertise 
              from Morocco. I transform ideas into powerful, scalable solutions that drive business growth.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 py-8"
            >
              {[
                { number: '5+', label: 'Years Experience', color: 'text-primary-400' },
                { number: '100+', label: 'Projects Done', color: 'text-secondary-400' },
                { number: '50+', label: 'Happy Clients', color: 'text-accent-400' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl lg:text-5xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="group relative bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <FaRocket className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Explore My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="group border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
              >
                <FaEnvelope className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Let's Connect
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-6 pt-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/mohamed-laabouli-66b57b1bb/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-2xl"
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {floatingIcons.map((item, index) => {
                const Icon = item.icon
                const positions = [
                  'top-16 left-16',
                  'top-32 right-8',
                  'bottom-40 left-8',
                  'bottom-20 right-20',
                  'top-1/2 left-4'
                ]
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -20, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 0.6,
                      delay: item.delay,
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className={`absolute ${positions[index]} w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center ${item.color} drop-shadow-lg`}
                  >
                    <Icon size={28} />
                  </motion.div>
                )
              })}
            </div>

            {/* Main Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Enhanced Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
              
              {/* Card Background */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                
                {/* Profile Image Container */}
                <div className="relative">
                  {/* Image Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-3xl blur-lg"></div>
                  
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    src={profileImage}
                    alt="Mohamed Laabouli"
                    className="relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-2 border-white/20 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Enhanced Status Indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl flex items-center backdrop-blur-sm border border-white/20"
                  >
                    <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse shadow-lg"></div>
                    Available for Hire
                  </motion.div>
                </div>


              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}

export default Hero