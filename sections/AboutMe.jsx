/* eslint-disable react/no-unescaped-entities */
'use client'

import RevealTitle from '@/components/RevealTitle.jsx'
import image1 from '@/public/assets/profile.jpg'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image.js'
import { useRef } from 'react'

import React from 'react'
import profile from '@/public/assets/profile.jpg'
import react from '@/public/assets/react.png'
import next from '@/public/assets/next.png'
import node from '@/public/assets/node.png'
import mongodb from '@/public/assets/mongodb.png'
import supabase from '@/public/assets/supabase.png'
import stripe from '@/public/assets/stripe.png'
import prisma from '@/public/assets/prisma.png'
import tailwind from '@/public/assets/tailwind.png'
import typescript from '@/public/assets/typescript.png'
import mysql from '@/public/assets/mysql.png'
import email from '@/public/assets/email.png'
import phone from '@/public/assets/phone.png'
import github from '@/public/assets/github.png'
import linkedin from '@/public/assets/linkedin.png'
import { MotionDiv } from '@/components/MotionDiv.jsx'
import { revealImageAnimation } from '@/libs/animation/aboutMe.animation.js'

const AboutMe = () => {
  return (
    <section className='flex min-h-screen w-full flex-col items-start bg-whiteColor px-4  sm:px-8 xl:flex-row lg:px-[2rem] xl:px-[4rem]'>
      {/* left side */}
      <div className='sticky top-0 flex h-screen w-full xl:w-1/2 flex-col justify-between py-12 gap-8 lg:px-8 xl:py-[6rem] '>
        <div className='flex justify-end'>
          <RevealTitle
            phrases={[
              'Hello!! My name is SK. MD. Arman.',
              ' I am a full stack web developer'
            ]}
            phraseStyle='heading-5 md:heading-4 2xl:heading-3 font-medium'
          />
        </div>
        <div className=' relative h-60 w-40 md:h-[22rem] md:w-60 xl:h-[28rem] xl:w-[20rem] bg-black '>
          <MotionDiv variants={revealImageAnimation} initial="initial" whileInView="animate"  viewport={{ once: true }} className='absolute top-0 left-0 w-full h-full bg-whiteColor z-10 origin-bottom'/>
          <Image src={image1} fill alt='image2' className='object-cover' />
        </div>
      </div>
      {/* center side  */}
      <div className='flex-1 py-[50vh] '>
        <ul className='flex flex-col items-center justify-center '>
          <AboutUsTitle>
            <p className='text-[1.25rem] lg:heading-5 flex  flex-wrap justify-center  gap-x-2'>
              I am a dedicated and enthusiastic junior engineer with a strong
              foundation in programming languages such as Python and Javascript.
              I am dedicated to always upgrading my skills and remaining updated
              on upcoming technology and industry trends.
            </p>
          </AboutUsTitle>

          <AboutUsTitle>
            <p className='text-[1.25rem] lg:heading-5 flex  flex-wrap justify-center  gap-x-2'>
              I have been studying ReactJS for over a year now. Through an Udemy
              course, I began to learn ReactJS. Since then, I've always tried to
              stay up-to-date with the latest technology related to Reactjs
              including NextJS 14. You can see some of my projects on GitHub.I
              also have expertise in backend technologies
            </p>
          </AboutUsTitle>

          <AboutUsTitle>
            <div className='flex  flex-wrap justify-center  gap-12 max-w-lg opacity-70'>
              <Image height="40" width="40" src={react} alt='React.js' />
              <Image height="40" width="40" src={next} alt='Next.js' />
              <Image height="40" width="40" src={node} alt='Node.js' />
              <Image height="40" width="40" src={mongodb} alt='MongoDB' />
              <Image height="40" width="40" src={prisma} alt='Prisma' />
              <Image height="40" width="40" src={supabase} alt='Supabase' />
              <Image height="40" width="40" src={stripe} alt='Stripe' />
              <Image height="40" width="40" src={tailwind} alt='Tailwind' />
              <Image height="40" width="40" src={typescript} alt='Typescript' />
              <Image height="40" width="40" src={mysql} alt='Mysql' />
            </div>
      </AboutUsTitle>
        </ul>
      </div>
      {/* right side */}
      {/* <div className='hidden sticky top-0 lg:flex h-screen items-center  px-8'>
        <div className=' relative h-80 w-80 bg-black'>
          <Image src={image1} fill className='object-cover' alt='image2' />
        </div>
      </div> */}
    </section>
  )
}

const AboutUsTitle = ({ children }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: '-50% 0px -50% 0px' })
  return (
    <motion.li
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delayChildren: 0.3, staggerChildren: 0.2 }}
      className=' h-full max-w-2xl    overflow-hidden md:py-8  '
    >
      {children}
    </motion.li>
  )
}

export default AboutMe
