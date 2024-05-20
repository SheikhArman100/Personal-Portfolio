import { useState } from 'react'
import { motion } from 'framer-motion'
const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.01
    }
  },
  hover: {
    transition: {
      staggerChildren: 0.01
    }
  }
}

const letterAnimation = {
  rest: {
    y: 0
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween'
    }
  }
}
const letterAnimationTwo = {
  rest: {
    y: 30
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween'
    }
  }
}

const Button1 = ({ href, text }) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      className='rounded-2xl bg-black px-6 py-4 body  text-white'
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative cursor-pointer overflow-hidden  '
      >
        <AnimatedWord
          title={text}
          animation={letterAnimation}
          isHovered={isHovered}
          className=''
        />
        <div className='absolute top-0'>
          <AnimatedWord
            title={text}
            animation={letterAnimationTwo}
            isHovered={isHovered}
            className=''
          />
        </div>
      </motion.div>
    </a>
  )
}
const AnimatedWord = ({ title, animation, isHovered, className }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial='rest'
      animate={isHovered ? 'hover' : 'rest'}
      className='relative whitespace-nowrap '
    >
      {title
        .split('')
        .map((character, i) =>
          character === ' ' ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter
              key={i}
              character={character}
              animation={animation}
              className={className}
            />
          )
        )}
    </motion.span>
  )
}
const AnimatedLetter = ({ character, animation, className }) => {
  return (
    <motion.span
      variants={animation}
      className={`relative inline-block whitespace-nowrap ${className}`}
    >
      {character}
    </motion.span>
  )
}

export default Button1
