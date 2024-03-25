"use client"
import React from 'react'
import {motion} from "framer-motion"

 const letterAnimation={
    initial:{
        opacity:0,
        
    },
    whileInView:(index)=>({
        opacity:1 ,
        
        transition:{
            type:"tween",
            delay:0.015 * index,
            ease:"linear"

        } 
    }),
     exit:(index)=>({
        opacity:0 ,
        
        transition:{
            delay:0.015 * index,
            ease:"easeInOut"

        } 
    })
}

const RevealText1 = ({text,className}) => {
  return (
    <motion.h1
      className="relative flex flex-wrap  "
     
    >
      {[...text].map((letter, index) => (
        <motion.p
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={className}
          variants={letterAnimation}
          initial="initial"
          whileInView="whileInView"
        //   viewport={{
        //     once:true
        //   }}
          custom={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.p>
      ))}
    </motion.h1>
  )
}

export default RevealText1