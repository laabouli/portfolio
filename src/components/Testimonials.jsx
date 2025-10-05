import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Mohamed delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      position: 'Founder, InnovateLab',
      avatar: '👨‍💻',
      rating: 5,
      text: 'The mobile app Mohamed developed for us has been a game-changer. Professional, responsive, and delivered on time. Highly recommended!',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'CTO, FutureTech Solutions',
      avatar: '👩‍🔬',
      rating: 5,
      text: 'Amazing work on our AI chatbot project. Mohamed\'s expertise in AI and automation saved us countless hours and improved our customer service significantly.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="section-padding bg-white">
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
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from satisfied clients who trusted me with their projects
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="card p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <FaQuoteLeft className="text-4xl text-gray-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials




