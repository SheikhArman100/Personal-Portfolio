"use client"

import { downloadButtonAnimation, downloadButtonTextAnimation } from '@/libs/animation/heroSection.animation.js'
import { motion } from "framer-motion"
import Link from 'next/link.js'

const DownloadCV = () => {
  return (
    <Link href="/sk_md_golam_arman_cv.pdf" download="sk_md_golam_arman_cv.pdf">
     <motion.button variants={downloadButtonAnimation}  className='rounded-3xl border border-blackColor p-3 md:px-5 origin-bottom'>
           <motion.p variants={downloadButtonTextAnimation} className='body font-medium'>Download CV</motion.p> 
    </motion.button>
    </Link>
   
  )
}

export default DownloadCV