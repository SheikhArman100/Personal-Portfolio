import React from 'react'
import { motion } from 'framer-motion'

//animation
const revealParagraphContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.025
    }
  }
}
const revealParagraphAnimation = {
  hidden: {
    opacity: 0.1
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'linear'
    }
  }
}

const RevealParagraph = ({ paragraph, paragraphStyle }) => {
  return (
    <motion.p
      variants={revealParagraphContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className={`${paragraphStyle} flex-wrap gap-2 overflow-hidden`}
    >
      {paragraph.split(' ').map((word, index) => (
        <span key={index} className='flex'>
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              variants={revealParagraphAnimation}
              key={letterIndex}
              className=''
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  )
}

export default RevealParagraph
