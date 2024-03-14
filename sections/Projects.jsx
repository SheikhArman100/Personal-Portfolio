import Grid from '@/components/Grid.jsx'
import Link from 'next/link.js'
import React from 'react'

const Projects = () => {
  return (
    <article className='relative'>
      
      
      <MarqueeTitle/>
      <Grid/>
      <section className='absolute top-[7.5rem] left-0 hidden-scroll h-[calc(100vh-7.5rem)] w-full  overflow-hidden overflow-y-auto'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
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
const Project = () => {
  return (
    <div className='flex h-[calc(100vh-7.5rem)] w-full items-center justify-center '>
      <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-x-8 lg:gap-x-[5rem] xl:gap-x-[8rem]'>
        <div className='mx-auto aspect-[1/1.2] w-80 lg:w-[25rem] bg-black'></div>
        <div className='relative mx-auto  h-full w-full max-w-[20rem] flex-1 '>
          <div className='absolute h-full w-1  bg-black' />
          <div className='ml-8 lg:ml-12   '>
            <h3 className='heading-3'>Baking Shop</h3>
            <p className='body '>
              This is baking shop website where you cake,cupcake, chocolate etc
              the main purpose of this website is to show animated interaction
              with some advanced functionalities
            </p>
            <div className='mt-3 flex items-center gap-x-3'>
              <Link href='/' className='rounded-full bg-black p-4 text-white'>
                Github Repo
              </Link>
              <Link href='/' className='rounded-full border border-black p-4'>
                Preview Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
