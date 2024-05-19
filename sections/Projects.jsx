import CloudinaryVideo from '@/components/CloudinaryVideo.jsx'
import Grid from '@/components/Grid.jsx'
import { projects } from '@/libs/data.js'

import Image from 'next/image.js'
import Link from 'next/link.js'

const Projects = () => {
  return (
    <section className='relative bg-greenColor text-whiteColor'>
      

     
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      
    </section>
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
    <div className='relative flex h-screen w-full items-center justify-center '>
      <div className='absolute  flex flex-col gap-3 md:flex-row md:items-center md:gap-x-8 lg:gap-x-[5rem] xl:gap-x-[8rem] glassEffect w-full max-w-6xl p-3 md:p-10'>
        <div className='relative mx-auto flex aspect-[1/1.2] w-80 items-center justify-center bg-zinc-800 lg:w-[25rem]'>
          <CloudinaryVideo width='1920' height='1080' src={project.video} autoplay="on-scroll" loop muted playsinline />
        </div>
        <div className='relative mx-auto  h-full w-full max-w-[20rem] flex-1 '>
          <div className='absolute h-full w-1  bg-black' />
          <div className='ml-8 lg:ml-12   '>
            <h3 className='heading-4 md:heading-3'>{project.title}</h3>
            <p className='body '>{project.description}</p>
            <div className='mt-2 flex items-center gap-x-2'>
              {project.languages.map((language, index) => (
                <div
                  key={index}
                  className='flex items-center gap-x-1 rounded-full border border-black px-3 py-1 '
                >
                  <Image
                    height='16'
                    width='16'
                    src={language.icon}
                    alt={language.title}
                  />
                  <p className='label font-medium'>{language.title}</p>
                </div>
              ))}
            </div>
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
