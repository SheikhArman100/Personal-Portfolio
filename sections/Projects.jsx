import Grid from '@/components/Grid.jsx'
import Link from 'next/link.js'
import React from 'react'
import Video from 'next-video'
import photographerVideo from '/videos/Photographer Portfolio.mp4'
import { projects } from '@/libs/data.js'

const Projects = () => {
  return (
    <article className='relative'>
      <MarqueeTitle />
      <Grid />
      <section className='hidden-scroll absolute left-0 top-[7.5rem] h-[calc(100vh-7.5rem)] w-full  overflow-hidden overflow-y-auto'>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </section>
    </article>
  )
}

export default Projects

const MarqueeTitle = () => {
  return (
    <div className='flex h-[7.5rem] w-full items-center justify-end bg-black px-4 text-white sm:px-8 lg:px-[2rem] xl:px-[4rem]'>
      <h1 className='heading-1 '> Projects</h1>
    </div>
  )
}
const Project = ({ project }) => {
  return (
    <div className='flex h-[calc(100vh-7.5rem)] w-full items-center justify-center '>
      <div className='flex flex-col gap-3 md:flex-row md:items-center md:gap-x-8 lg:gap-x-[5rem] xl:gap-x-[8rem]'>
        <div className='relative mx-auto flex aspect-[1/1.2] w-80 items-center justify-center bg-zinc-800 lg:w-[25rem]'>
          <Video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className='h-[80%] w-[80%]'
          />
        </div>
        <div className='relative mx-auto  h-full w-full max-w-[20rem] flex-1 '>
          <div className='absolute h-full w-1  bg-black' />
          <div className='ml-8 lg:ml-12   '>
            <h3 className='heading-4 md:heading-3'>{project.title}</h3>
            <p className='body '>{project.description}</p>
            <div className='mt-3 flex items-center gap-x-3'>
              <Link
                href={project.github}
                className='rounded-full bg-black p-4 text-white'
              >
                Github Repo
              </Link>
              <Link
                href={project.preview}
                className='rounded-full border border-black p-4'
              >
                Preview Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
