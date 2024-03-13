import Grid from '@/components/Grid.jsx'
import Link from 'next/link.js'
import React from 'react'

const Projects = () => {
  return (
    <article className='relative h-screen w-full overflow-hidden'>
      <Grid />
      <section className='absolute left-0 top-0 flex min-h-screen w-full flex-col'>
        <MarqueeTitle />
        <div className='flex w-full flex-1 flex-col o overflow-y-auto overflow-scroll'>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
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
    <div className='flex w-full flex-1 flex-col md:flex-row px-[3.5rem] py-8'>
      <div className='aspect-[1/1.2] w-80 bg-black mx-auto'></div>
      <div className='relative mt-3 h-full w-full max-w-[20rem] mx-auto flex-1 '>
        <div className='absolute h-full w-1  bg-black' />
        <div className='ml-4   '>
          <h4 className='heading-4'>Baking Shop</h4>
          <p className='body '>
            This is baking shop website where you cake,cupcake, chocolate etc
            the main purpose of this website is to show animated interaction
            with some advanced functionalities
          </p>
          <div className='flex items-center gap-x-3 mt-3'>
            <Link href="/" className='p-4 bg-black text-white rounded-full'>Github Repo</Link>
            <Link href="/" className='p-4 border border-black rounded-full'>Preview Link</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
