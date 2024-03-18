'use client'
import { gallery } from '@/libs/data.js'
import { useScroll, useTransform, } from 'framer-motion'
import Image from 'next/image.js'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const galleryRef = useRef(null)
  const [dimension, setDimension] = useState({width:0, height:0});
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start']
  })

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.4])

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }
    window.addEventListener("resize", resize)
    resize();

  
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])
  
  return (
    <section
    ref={galleryRef}
      className='h-[175vh] overflow-hidden bg-[rgb(45_45_45)] '
    >
      <div  className='relative top-[-12.5vh] flex h-[200vh] gap-2 p-2'>
        <Column images={[gallery[0], gallery[1], gallery[2]]} y={y} />

        <Column images={[gallery[3], gallery[4], gallery[5]]} y={y2}/>

        <Column images={[gallery[6], gallery[7], gallery[8]]} y={y3}/>

        <Column images={[gallery[9], gallery[10], gallery[11]]} y={y4}/>
      </div>
    </section>
  )
}
const Column = ({ images ,y}) => {
  return (
    <motion.div className=' relative flex h-full w-[25%] min-w-[250px] flex-col gap-2 whitespace-nowrap column' style={{y}}>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className=' relative h-[30%] w-full overflow-hidden rounded-lg'
          >
            <Image src={image} alt='image' placeholder='blur' fill className='object-cover' />
          </div>
        )
      })}
    </motion.div>
  )
}
export default Gallery
