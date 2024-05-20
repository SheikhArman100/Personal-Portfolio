'use client'
import CloudinaryVideo from '@/components/CloudinaryVideo.jsx'
import { projects } from '@/libs/data.js'
import { useScroll, useTransform } from 'framer-motion'

import Button1 from '@/components/Button1.jsx'
import { motion } from 'framer-motion'
import Image from 'next/image.js'
import { useRef } from 'react'
const Projects = () => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start start', 'end end']
  })
  return (
    <section
      id='project'
      ref={container}
      className='relative bg-greenColor text-whiteColor '
    >
      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05
        return (
          <Project
            key={project.id}
            project={project}
            index={index}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  )
}

export default Projects

const Project = ({ project, index, progress, range, targetScale }) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  return (
    <div
      ref={container}
      className=' sticky top-0 flex h-screen w-full items-center justify-center px-3'
    >
      <motion.div
        style={{
          backgroundColor: project.color,
          top: `calc(-5vh + ${index * 25}px)`,
          scale
        }}
        className='relative flex w-fit max-w-5xl flex-col gap-3 rounded-xl px-3 py-6 sm:px-8 md:w-full md:flex-row md:items-center md:justify-center md:px-10 md:py-[5rem] xl:py-[8rem]  '
      >
        <div
          style={{ scale: imageScale }}
          className='glassEffect relative mx-auto flex aspect-[1/0.7]  w-80 items-center justify-center p-2 lg:w-[25rem]'
        >
          <CloudinaryVideo video={project.video} photo={project.photo} />
        </div>
        <div className='relative mx-auto  h-full w-full max-w-[20rem] flex-1 '>
          <div className='absolute h-full w-1  bg-black' />
          <div className='ml-8 lg:ml-12   '>
            <h3 className='heading-4 md:heading-3 font-medium text-white'>
              {project.title}
            </h3>
            <p className='body font-thin text-zinc-400'>
              {project.description}
            </p>
            <div className='mt-2 flex items-center gap-x-2'>
              {project.languages.map((language, index) => (
                <div
                  key={index}
                  className='glassEffect flex items-center gap-x-1 rounded-full px-3 py-1 '
                >
                  <Image
                    height='16'
                    width='16'
                    src={language.icon}
                    alt={language.title}
                  />
                  <p className='label font-medium text-white'>
                    {language.title}
                  </p>
                </div>
              ))}
            </div>
            <div className='mt-3 flex items-center gap-x-3'>
              <Button1 href={project.github} text='Github Repo' />
              <a
                href={project.preview}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full border border-black p-4 text-black transition duration-300  ease-in hover:shadow-[5px_5px_0px_0px_#000]'
              >
                Preview Link
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
