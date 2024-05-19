/* eslint-disable react/no-unescaped-entities */
'use client'

import RevealTitle from '@/components/RevealTitle.jsx'
import image1 from '@/public/assets/profile.jpg'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image.js'
import { useRef } from 'react'

// import React from 'react'
// import profile from '@/public/assets/profile.jpg'
import react from '@/public/assets/react.png'
import next from '@/public/assets/next.png'
import node from '@/public/assets/node.png'
import mongodb from '@/public/assets/mongodb.png'
// import supabase from '@/public/assets/supabase.png'
// import stripe from '@/public/assets/stripe.png'
// import prisma from '@/public/assets/prisma.png'
// import tailwind from '@/public/assets/tailwind.png'
// import typescript from '@/public/assets/typescript.png'
import mysql from '@/public/assets/mysql.png'
// import email from '@/public/assets/email.png'
// import phone from '@/public/assets/phone.png'
// import github from '@/public/assets/github.png'
// import linkedin from '@/public/assets/linkedin.png'
import { MotionDiv } from '@/components/MotionDiv.jsx'
import { revealImageAnimation } from '@/libs/animation/aboutMe.animation.js'
import RevealParagraph from '@/components/RevealParagraph.js'
const skills = [
  {
    name: 'ReactJS',
    image: react
  },
  {
    name: 'NextJS',
    image: next
  },
  {
    name: 'NodeJS',
    image: node
  },
  {
    name: 'MySQL',
    image: mysql
  },
  {
    name: 'MongoDB',
    image: mongodb
  }
]

const AboutMe = () => {
  return (
    <section className=' flex min-h-screen w-full flex-col gap-6 overflow-hidden bg-greenColor px-4  py-8 text-whiteColor sm:px-8 md:justify-between md:py-[3rem]   lg:flex-row lg:px-[2rem]  xl:px-[4rem]'>
      <div className=' flex items-end'>
        <div className=' relative h-80 w-64 bg-greenColor md:h-[22rem] md:w-60 lg:h-[25rem] lg:w-72  xl:h-[28rem] xl:w-[20rem] '>
          <MotionDiv
            variants={revealImageAnimation}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='absolute left-0 top-0 z-10 h-full w-full origin-right bg-greenColor'
          />
          <Image
            src={image1}
            fill
            alt='image2'
            className='object-center md:object-cover'
          />
        </div>
      </div>
      <div className='flex w-full flex-1 flex-col gap-4 '>
        <div className='flex  w-full justify-end '>
          <RevealParagraph
            paragraph='Hello!! I am Sk. MD. Golam Arman, a passionate full stack web developer. Hardworking by nature, I thrive on challenges and continuously seek to expand my skill set in the ever-evolving field of web development. I bring digital concepts to life with precision and creativity.'
            paragraphStyle='hidden md:flex md:heading-3 2xl:heading-2 w-full max-w-6xl'
          />

          <p className='heading-4 sm:heading-3 lg:heading-2 w-full max-w-6xl md:hidden'>
            Hello!! I am Sk. MD. Golam Arman, a passionate full stack web
            developer. I bring digital concepts to life with precision and
            creativity.
          </p>
        </div>
        <div className='flex w-full   flex-1  items-center justify-center'>
          <div className='flex w-full max-w-3xl flex-wrap justify-center gap-12'>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className=' flex-1 flex flex-col gap-4'>
        <div className='w-full  flex justify-end '>
        <p className=' w-full max-w-6xl heading-5 lg:heading-2'>Hello!! I am Sk. MD. Golam Arman, a passionate full stack web developer. Hardworking by nature, I thrive on challenges and continuously seek to expand my skill set in the ever-evolving field of web development. I bring digital concepts to life with precision and creativity.</p>
        <p className='md:hidden  max-w-6xl heading-5 lg:heading-2'>Hello!! I am Sk. MD. Golam Arman, a passionate full stack web developer. I bring digital concepts to life with precision and creativity.</p>

        </div>
        
        
        <div className='w-full flex-1   flex  items-center justify-center'>
          <div className='max-w-3xl w-full flex flex-wrap justify-center gap-12'>
            {
              skills.map((skill,index)=>(
                <SkillCard key={index} skill={skill}/>
              ))
            }
          

          </div>

         
          
          
          
        </div>
      </div> */}
    </section>
  )
}

const SkillCard = ({ skill }) => {
  return (
    <div className='glassEffect flex h-fit w-fit items-center gap-2 rounded-lg px-6 py-4 shadow-lg md:px-10 md:py-6'>
      <Image src={skill.image} width={40} height={40} alt={skill.name} />
      <span className=' heading-6 md:heading-5   '>{skill.name}</span>
    </div>
  )
}

export default AboutMe
