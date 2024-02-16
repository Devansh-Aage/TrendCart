import React from 'react'
import about from '../assets/about.png'
import Tilt from '../Tilt'
import '../CSS/About.css'
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: '-100%' }}
        transition={{ duration: 0.7, ease: "easeInOut" }} className='bigbox'>
        <div className='para'>
          <div className='oneliner'>
            Elevate Style, Simplify Shopping.
          </div>
          <div className='story'>Since our launch in 2023, we've established a global presence, connecting with 20 million satisfied customers and supporting the growth of 5 million sellers worldwide. Our commitment to exceptional service, innovative solutions, and a seamless user experience has set us apart, making us a trusted and reliable partner in the dynamic world of e-commerce. Join our thriving community and experience the greatness that comes with every interaction on our platform.
          </div>
        </div>
        <div className='aboutimage'>
          <Tilt image={about}></Tilt>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default About
