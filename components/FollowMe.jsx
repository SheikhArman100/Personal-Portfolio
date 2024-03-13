import { Facebook, Instagram, Twitter } from 'lucide-react'
import FramerMagnetic from './FramerMagnetic.jsx'

const FollowMe = () => {
  return (
    <div className=' flex  items-center justify-center gap-x-4 '>
      <FramerMagnetic>
        <Facebook strokeWidth='2' className=' stroke-black' />
      </FramerMagnetic>

      <FramerMagnetic>
        <Instagram strokeWidth='2' className='  stroke-black' />
      </FramerMagnetic>

      <FramerMagnetic>
        <Twitter strokeWidth='2' className='  stroke-black' />
      </FramerMagnetic>
    </div>
  )
}

export default FollowMe
