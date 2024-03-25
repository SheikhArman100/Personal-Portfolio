import { motion } from 'framer-motion'
import React from 'react'

const revealTitleAnimation = {
    hidden: { y: "100%" },
    show: {
      y: "0",
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

const RevealTitle = ({ phrase, containerStyle, phraseStyle }) => {
  return (
    <motion.h2 className={`m-0 ${phraseStyle}`} variants={revealTitleAnimation}>
      {phrase}
    </motion.h2>
  )
}

export default RevealTitle
