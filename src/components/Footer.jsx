import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; 2024 Mohamed Laabouli. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made with{' '}
              <FaHeart className="text-red-500 mx-2 animate-pulse" />{' '}
              in Morocco
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer




