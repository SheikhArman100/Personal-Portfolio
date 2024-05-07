import React from 'react'

const Navbar = () => {
  return (
    <ul className='fixed left-[50%] -translate-x-[50%] bottom-5 flex items-center glassEffect py-4 px-2 sm:px-8 gap-x-1 sm:gap-x-4 text-whiteColor '>
      <li className='py-2 px-4 glassEffect body'>Home</li>
      <li className='py-2 px-4  body'>About</li>
      <li className='py-2 px-4 body'>Work</li>
      <li className='py-2 px-4 body'>Contact</li>

    </ul>
  )
}

export default Navbar