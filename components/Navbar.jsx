"use client"
import React from 'react'
import { MotionDiv } from './MotionDiv.jsx'
import { motion } from 'framer-motion'
import { navbarReveal, navbarText } from '@/libs/animation/heroSection.animation.js'

const Navbar = () => {
  return (
    <motion.div variants={navbarReveal} initial="hidden" animate="show" className='fixed left-[50%]   bottom-10 glassEffect py-4 px-2 sm:px-8 origin-left'>
      <motion.ul variants={navbarText} className=' flex items-center  gap-x-1 sm:gap-x-4 text-whiteColor '>
      <li className='py-2 px-4 glassEffect body'>Home</li>
      <li className='py-2 px-4  body'>About</li>
      <li className='py-2 px-4 body'>Work</li>
      <li className='py-2 px-4 body'>Contact</li>

    </motion.ul>

    </motion.div>
    
  )
}

export default Navbar