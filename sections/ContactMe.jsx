'use client'
import {
  availableReveal,
  availableText,
  bottomTextAnimation,
  dropTextAnimation,
  logoReveal,
  mailAnimation,
  revealTitleAnimation,
  sectionAnimation
} from '@/libs/animation/contactme.animation.js'
import { motion } from 'framer-motion'
import { Copyright, Dot } from 'lucide-react'
import Link from 'next/link.js'

const ContactMe = () => {
  return (
    <motion.section
    id='contact'
      variants={sectionAnimation}
      initial='hidden'
      whileInView='show'
      viewport={{ margin: '-40%',once:true }}
      className='text flex h-screen w-full flex-col bg-greenColor  px-4 py-4 text-whiteColor sm:px-8 lg:px-[2rem] xl:px-[4rem]'
    >
      <div className='flex items-center justify-between'>
        <Link href='/' className='relative'>
          <h4 className='heading-4 text-yellowColor '>Sheikh Arman</h4>
          <motion.div
            variants={logoReveal}
            className='absolute left-0 top-0 h-full w-full origin-right   bg-greenColor'
          />
        </Link>
        <motion.div
          variants={availableReveal}
          className=' glassEffect origin-left px-4 py-2'
        >
          <motion.div
            variants={availableText}
            className='flex items-center gap-1'
          >
            <Dot strokeWidth={8} className='animate-pulse stroke-green-400 ' />
            <h6 className='body hidden sm:block'>Open for work</h6>
            <h6 className='body sm:hidden'>Available</h6>
          </motion.div>
        </motion.div>
      </div>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='overflow-hidden '>
          <motion.p
            variants={revealTitleAnimation(1)}
            initial='hidden'
            whileInView='show'
            viewport={{once:true}}
            className='display-3 md:display-2 xl:display-0 m-0  whitespace-nowrap text-center '
          >
            Want to Hire?
          </motion.p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <motion.span variants={dropTextAnimation} className='body'>Drop me an email :</motion.span>
          <span className='heading-5 font-sans  text-yellowColor relative'>
            sheikharman100@gmail.com
            <motion.div
             variants={mailAnimation}
            className='absolute left-0 top-0 h-full w-full origin-right   bg-greenColor'
          />
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <motion.span variants={bottomTextAnimation} className='body font-medium '>Dhaka,Bangladesh</motion.span>
        <button></button>
        <motion.div variants={bottomTextAnimation} className='body flex items-center gap-x-1 font-medium'>
          <Copyright className='stroke-yellowColor' />
          <span >May,2024</span>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactMe
