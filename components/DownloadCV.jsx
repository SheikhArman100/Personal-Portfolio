'use client'

import {
  downloadButtonAnimation,
  downloadButtonTextAnimation
} from '@/libs/animation/heroSection.animation.js'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link.js'

const DownloadCV = () => {
  return (
    <Link href='/sk_md_golam_arman_cv.pdf' download='sk_md_golam_arman_cv.pdf'>
      <motion.button
        variants={downloadButtonAnimation}
        className='group flex origin-bottom  items-center gap-x-1  rounded-3xl border border-yellowColor py-2 px-4 sm:p-3   md:px-5'
      >
        <motion.p
          variants={downloadButtonTextAnimation}
          className=' label sm:body '
        >
          Download CV
        </motion.p>
        <div className='flex h-8  items-center justify-center'>
          <span className='inline-flex h-0 w-0 -rotate-180 transform items-center justify-center rounded-full bg-yellowColor transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:p-[0.8rem] group-hover:w-[0.9rem] group-hover:h-[0.9rem] overflow-hidden'><MoveRight className="size-4 stroke-white"/></span>
        </div>
      </motion.button>
    </Link>
  )
}

export default DownloadCV
