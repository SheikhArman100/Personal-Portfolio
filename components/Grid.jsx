import React from 'react'

const Grid = () => {
  return (
    <div className='h-screen w-full grid grid-cols-6 md:grid-cols-10 grid-rows-8 '>
      {Array.from({ length: 48 }, (_, index) => (
        <div
          key={index}
          className='md:hidden border-r-[0.5px] border-t-[0.5px] border-zinc-400'
        />
      ))}
      {Array.from({ length: 80 }, (_, index) => (
        <div
          key={index}
          className='hidden md:block border-r-[0.5px] border-t-[0.5px] border-black/40'
        />
      ))}
    </div>
  )
}

export default Grid
