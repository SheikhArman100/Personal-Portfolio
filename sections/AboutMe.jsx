/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image.js'
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

const AboutMe = () => {
  return (
    <article className='flex min-h-screen w-full flex-col justify-center  '>
      <section className='w-full  px-4 py-4 sm:px-8 md:flex md:gap-x-4 lg:gap-x-[4rem] lg:px-[2rem] xl:px-[4rem] '>
        <h1 className='heading-1 text-left '> About</h1>
        <div className='flex-1'>
          <p className='body text-left'>
            My Name is Sheikh MD Arman.I have been studying ReactJS for over a
            year now. Through an Udemy course, I began to learn ReactJS. Since
            then, I've always tried to stay up-to-date with the latest
            technology related to Reactjs. I gained a lot of expertise in
            packages like Nextjs, Tailwind CSS, Typescript, NextAuth, Redux,
            Zustand, Framer-Motion, Tanstack Query, and Zod. For your
            information, I have updated myself to the current release of NextJS
            14. You can see some of my projects on GitHub. I recently graduated
            from Brac University, where I also studied Python-related topics
            such as competitive programming, machine learning, and data
            analysis.
          </p>
          <div className=' mx-auto mt-6 grid w-fit  grid-cols-1 gap-3   sm:grid-cols-2  '>
            <Contact icon={email} label='sheikharman100@gmail.com' />
            <Contact icon={phone} label='+8801892555458' />
            <Contact icon={github} label='github.com/SheikhArman100' />
            <Contact icon={linkedin} label='linkedin.com/in/sheikharman100' />
          </div>
        </div>
      </section>
      <section className='flex  w-full   flex-col px-4  py-4  sm:px-8 md:flex-row md:justify-center lg:gap-x-[4rem] lg:px-[2rem]  xl:gap-x-[8rem] xl:px-[4rem] '>
        <div className='relative mx-auto mt-4 h-80 w-80 md:mx-0'>
          <Image
            fill
            src={profile}
            alt='profile'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='mx-auto mt-4 flex max-w-xl flex-1 flex-wrap justify-center lg:mx-0  '>
          <Skill icon={react} title='React.js' />
          <Skill icon={next} title='Next.js' />
          <Skill icon={node} title='Node.js' />
          <Skill icon={mongodb} title='MongoDB' />
          <Skill icon={prisma} title='Prisma' />
          <Skill icon={supabase} title='Supabase' />
          <Skill icon={stripe} title='Stripe' />
          <Skill icon={tailwind} title='Tailwind' />
          <Skill icon={typescript} title='Typescript' />
          <Skill icon={mysql} title='Mysql' />
        </div>
      </section>
    </article>
  )
}

const Skill = ({ icon, title }) => {
  return (
    <div className='flex w-fit items-center gap-x-2 px-4 py-2'>
      <Image src={icon} height='40' width='40' alt={title} />
      <h5 className='heading-5 font-medium'>{title}</h5>
    </div>
  )
}
const Contact = ({ icon, label }) => {
  return (
    <div className='flex items-center gap-x-4'>
      <Image src={icon} height='24' width='24' alt={label} />
      <label className='body whitespace-wrap font-semibold'>{label}</label>
    </div>
  )
}

export default AboutMe
