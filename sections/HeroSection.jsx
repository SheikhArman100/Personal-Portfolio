import DownloadCV from '@/components/DownloadCV.jsx'
import FollowMe from '@/components/FollowMe.jsx'
import { MotionDiv } from '@/components/MotionDiv.jsx'
import {
  availableReveal,
  availableText,
  heroContainer,
  heroRevealContainer,
  heroRevealDiv,
  logoReveal,
  revealTitleAnimation,
  revealVectorAnimation,
  wordAnimation
} from '@/libs/animation/heroSection.animation.js'
import vector1 from '@/public/assets/vector1.png'
import { Dot } from 'lucide-react'
import Image from 'next/image.js'
import Link from 'next/link.js'
const HeroSection = () => {
  const paragraph =
    'Full stack web developer with expertise in Reactjs and Nodejs. I also have a strong foundation in programming languages such as Python and Javascript'
  return (
    <section className='relative h-screen w-full bg-white'>
      <MotionDiv
        variants={heroRevealContainer}
        initial='hidden'
        animate='show'
        className='  grid h-full w-full grid-rows-4 gap-0'
      >
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-greenColor'
        />
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-greenColor'
        />
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-greenColor'
        />
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-greenColor'
        />
      </MotionDiv>
      <MotionDiv
        variants={heroContainer}
        initial='hidden'
        animate='show'
        className='absolute left-0 top-0 flex h-full w-full flex-col justify-between px-4  py-4 text-whiteColor sm:px-8 lg:px-[2rem] xl:px-[4rem]'
      >
        <div className='flex items-center justify-between'>
          <Link href='/' className='relative'>
            <h4 className='heading-4 text-yellowColor '>Sheikh Arman</h4>
            <MotionDiv
              variants={logoReveal}
              className='absolute left-0 top-0 h-full w-full origin-right  bg-greenColor'
            />
          </Link>

          <MotionDiv
            variants={availableReveal}
            className=' glassEffect origin-left px-4 py-2'
          >
            <MotionDiv variants={availableText} className='flex items-center gap-1'>
              <Dot
                strokeWidth={8}
                className='animate-pulse stroke-green-400 '
              />
              <h6 className='body hidden sm:block'>Available for work</h6>
              <h6 className='body sm:hidden'>Available</h6>
            </MotionDiv>
          </MotionDiv>
        </div>

        <div className='mx-auto flex max-w-[1000px] flex-col xl:max-w-[1200px] xl:gap-y-3 '>
          <span className='overflow-hidden'>
            <MotionDiv
              variants={revealTitleAnimation(1)}
              className='display-2 md:display-1 xl:display-0 2xl:display-00  m-0 whitespace-nowrap text-center md:mr-[3rem] md:text-right '
            >
              Full Stack
            </MotionDiv>
          </span>
          <div className='flex w-full items-center justify-center gap-x-6 lg:gap-x-12 xl:gap-x-[5rem] 2xl:gap-x-[8rem]'>
            <div className='mx-auto hidden  max-w-xs flex-wrap justify-center gap-x-2 text-center md:flex xl:mx-0'>
              {paragraph.split(' ').map((word, index) => (
                <MotionDiv
                  key={index}
                  className='body font2 font-[400] uppercase'
                  variants={wordAnimation(index)}
                >
                  {word}
                </MotionDiv>
              ))}
            </div>

            <MotionDiv
              variants={revealVectorAnimation}
              className='relative h-[120px] w-[120px] lg:h-[140px] lg:w-[140px] 2xl:h-[180px] 2xl:w-[180px]'
            >
              <Image
                src={vector1}
                fill
                className='h-full w-full object-cover'
                alt='hero section vector'
              />
            </MotionDiv>
            <span className='overflow-hidden'>
              <MotionDiv
                variants={revealTitleAnimation(2)}
                className='display-2 md:display-1 xl:display-0 2xl:display-00 m-0 whitespace-nowrap text-right '
              >
                Web
              </MotionDiv>
            </span>
          </div>

          <span className='overflow-hidden'>
            <MotionDiv
              variants={revealTitleAnimation(3)}
              className='display-2 md:display-1 xl:display-0 2xl:display-00 m-0 whitespace-nowrap text-center '
            >
              Developer
            </MotionDiv>
          </span>
          <div className='mx-auto mt-3 flex max-w-xs flex-wrap    justify-center  gap-x-1 text-center md:hidden xl:mx-0'>
            {paragraph.split(' ').map((word, index) => (
              <MotionDiv
                key={index}
                className='body font2 font-[400] uppercase'
                variants={wordAnimation(index)}
              >
                {word}
              </MotionDiv>
            ))}
          </div>
        </div>

        <div className='flex items-center justify-between '>
          {/* <Link href='#contactMe' className='body font-semibold flex items-center gap-x-1 border-b border-blackColor group'>Get in touch <ArrowRight className='size-4 group-hover:w-8'/> </Link> */}
          <DownloadCV />
          <FollowMe />
        </div>
      </MotionDiv>
    </section>
  )
}

export default HeroSection
