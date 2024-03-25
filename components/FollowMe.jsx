import { Facebook, Instagram, Twitter } from 'lucide-react'
import FramerMagnetic from './FramerMagnetic.jsx'

const FollowMe = () => {
  return (
    <div className=' flex  items-center justify-center gap-x-4 '>
      <FramerMagnetic index="1">
        <Facebook strokeWidth='2' className=' stroke-black' />
      </FramerMagnetic>

      <FramerMagnetic index="2">
        <Instagram strokeWidth='2' className='  stroke-black' />
      </FramerMagnetic>

      <FramerMagnetic index="3">
        <Twitter strokeWidth='2' className='  stroke-black' />
      </FramerMagnetic>
    </div>
  )
}

export default FollowMe
