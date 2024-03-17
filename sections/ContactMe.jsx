import Image from 'next/image.js'
import Link from 'next/link.js'
import React from 'react'
import logo from '@/public/assets/logo.png'
import { Copyright, Facebook, Linkedin, LinkedinIcon } from 'lucide-react'

const ContactMe = () => {
  return (
    <div className='h-screen w-full px-4  py-4 sm:px-8 lg:px-[2rem] xl:px-[4rem] flex flex-col'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='relative'>
          <Image
            src={logo}
            height='40'
            width='200'
            alt='logo'
            className='object-cover'
          />
        </Link>
        <span className='body sm:heading-5 font-medium'>Open for work</span>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <span className='display-3 md:display-2 xl:display-0 text-center '>Want to Hire?</span>
        <div className='flex flex-col items-center justify-center'>
          <span className='body'>Drop me an email:</span>
          <span className='heading-5'>sheikharman100@gmail.com</span>
        </div>

      </div>
      <div className='flex items-center justify-between'>
       <span className='body font-medium'>Dhaka,Bangladesh</span>
       <button>Scroll to top</button>
       <div className='flex items-center gap-x-1 body font-medium'><Copyright/><span>March,2024</span></div>
      </div>
    </div>
  )
}

export default ContactMe
