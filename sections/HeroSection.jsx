import FollowMe from '@/components/FollowMe.jsx'
import { MotionDiv } from '@/components/MotionDiv.jsx'
import {
  heroContainer,
  heroDiv,
  heroRevealContainer,
  heroRevealDiv,
  logoAnimation
} from '@/libs/animation/heroSection.animation.js'
import logo from '@/public/assets/logo.png'
import vector1 from '@/public/assets/vector1.png'
import Image from 'next/image.js'
import Link from 'next/link.js'
const HeroSection = () => {
  return (
    <section className='relative h-screen w-full bg-white'>
      <MotionDiv
        variants={heroRevealContainer}
        initial='hidden'
        animate='show'
        className='  grid h-full w-full grid-rows-4'
      >
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-[#868d81]'
        />
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-[#868d81]'
        />
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-[#868d81]'
        />
        <MotionDiv
          variants={heroRevealDiv}
          className='origin-left bg-[#868d81]'
        />
      </MotionDiv>
      <MotionDiv variants={heroContainer} initial="hidden" animate="show" className='absolute left-0 top-0 flex h-full w-full flex-col justify-between px-4  py-4 sm:px-8 lg:px-[2rem] xl:px-[4rem]'>
        <MotionDiv variants={heroDiv} className='flex items-center justify-between'>
          {/* <h4 className='heading-4 font-cursive'>Sheikh Arman</h4> */}
          <Link href='/' className='relative'>
            
            <Image
              src={logo}
              height='40'
              width='200'
              alt='logo'
              className='object-cover'
            />
          </Link>

          <button className='rounded-3xl border border-black p-3 md:px-5 md:py-3'>
            Contact me
          </button>
        </MotionDiv>

        <div className='mx-auto flex max-w-[1000px] flex-col xl:max-w-[1200px] xl:gap-y-3 '>
          <span className='display-3 sm:display-2 md:display-1 xl:display-0  whitespace-nowrap text-center md:mr-[3rem] md:text-right '>
            Full Stack
          </span>
          <div className='flex w-full items-center justify-center gap-x-6 lg:gap-x-12 xl:gap-x-[5rem]'>
            <p className='body mx-auto hidden  max-w-xs text-center md:block xl:mx-0'>
              Full-stack developer with expertise in Reactjs and Nodejs.I also
              have a strong foundation in programming languages such as Python
              and Javascript
            </p>
            <div className='relative h-[120px] w-[120px] lg:h-[140px] lg:w-[140px]'>
              <Image
                src={vector1}
                fill
                className='h-full w-full object-cover'
                alt='hero section vector'
              />
            </div>
            <span className='display-3 sm:display-2 md:display-1 xl:display-0 whitespace-nowrap text-right'>
              Web
            </span>
          </div>

          <span className='display-3 sm:display-2 md:display-1 xl:display-0 whitespace-nowrap text-center  '>
            Developer
          </span>
          <p className='body mx-auto mt-3 max-w-xs text-center md:hidden '>
            Full-stack developer with expertise in Reactjs and Nodejs.I also
            have a strong foundation in programming languages such as Python and
            Javascript
          </p>
        </div>

        <div className='flex items-center justify-between '>
          <button></button>
          <FollowMe />
        </div>
      </MotionDiv>
    </section>
  )
}

export default HeroSection
