"use client";


import { motion, useInView } from "framer-motion";
import { useRef } from "react";

 const revealContainer = {
  initial: {},
  animate: {
    transition: {
      
      staggerChildren: 0.5,
    },
  },
};

 const revealTitleAnimation = {
  initial: { y: "100%" },
  animate: {
    y: "0",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const RevealTitle = ({ phrases,  phraseStyle }) => {
  const containerRef=useRef(null)
  const isInView=useInView(containerRef)

  return (
    <motion.div ref={containerRef} variants={revealContainer} initial="initial" animate={isInView?"animate":"initial"}  viewport={{ once: true }}  className=" ">
      {phrases.map((phrase, index) => {
        return (
          <motion.div variants={revealContainer} initial="initial" animate={isInView?"animate":"initial"}  viewport={{ once: true }} key={index} className="flex gap-2 leading-0 overflow-hidden">
           {phrase.split(" ").map((word,index)=>(
             <motion.h2
             key={index}
             className={`m-0 ${phraseStyle}`}
             variants={revealTitleAnimation}
             initial="initial" animate={isInView?"animate":"initial"} 
             viewport={{ once: true }}
           >
             
             {word}
           </motion.h2>
           ))}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default RevealTitle;