'use client'
import {
  navbarReveal,
  navbarText
} from '@/libs/animation/heroSection.animation.js'
import { motion } from 'framer-motion'
import Link from 'next/link.js'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('hero')

  useEffect(() => {

    let hero = document.getElementById('hero')
    let about = document.getElementById('about')
    let project = document.getElementById('project')
    let contact = document.getElementById('contact')

    let sections = [hero,about,project,contact]

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };


  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if (entry.target.id == 'hero'){
              setActiveLink('hero')
            }
            if (entry.target.id == 'about'){
              setActiveLink('about')
            }
            if (entry.target.id == 'project'){
              setActiveLink('project')
            }
            if (entry.target.id == 'contact'){
              setActiveLink('contact')
            }
        }
    })
}, observerOptions)

sections?.forEach(section => {
  section && observer.observe(section)
})
}, [])

  return (
    <motion.div
      variants={navbarReveal}
      initial='hidden'
      animate='show'
      className='glassEffect fixed   bottom-10 left-[50%] origin-left px-2 py-4 sm:px-8'
    >
      <motion.ul
        variants={navbarText}
        className=' flex items-center  gap-x-1 text-whiteColor sm:gap-x-4 '
      >
        <li className={`${activeLink==="hero"?"glassEffect":"bg-transparent"} body px-4 py-2`}><Link href='#hero'>Home</Link></li>
        <li className={`${activeLink==="about"?"glassEffect":"bg-transparent"} body px-4 py-2`}><Link href='#about'>About</Link></li>
        <li className={`${activeLink==="project"?"glassEffect":"bg-transparent"} body px-4 py-2`}><Link href='#project'>Project</Link></li>
        <li className={`${activeLink==="contact"?"glassEffect":"bg-transparent"} body px-4 py-2`}><Link href='#contact'>Contact</Link></li>
      </motion.ul>
    </motion.div>
  )
}

export default Navbar
