import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import FramerMagnetic from './FramerMagnetic.jsx'
import Link from 'next/link'

const FollowMe = () => {
  return (
    <div className=' flex  items-center justify-center gap-x-2 sm:gap-x-4 '>
      <FramerMagnetic index="1">
        <Link href="https://www.facebook.com/arman.abir.58/"><Facebook strokeWidth='2' className='size-6 stroke-yellowColor' /></Link>
      </FramerMagnetic>

      <FramerMagnetic index="2">
        <Link href="https://www.instagram.com/_arman100__/"><Instagram strokeWidth='2' className='size-6  stroke-yellowColor' /></Link>
        
      </FramerMagnetic>

      <FramerMagnetic index="3">
        <Link href="https://www.linkedin.com/in/sheikharman100/"><Linkedin strokeWidth='2' className='size-6  stroke-yellowColor' /></Link>
        
      </FramerMagnetic>
    </div>
  )
}

export default FollowMe
