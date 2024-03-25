"use client"
import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function FramerMagnetic({children,index}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            initial={{scale:0}}
            animate={{scale:1,x, y}}
            transition={{scale:{delay:4+(0.15*index),duration:0.3,ease:[0.33, 1, 0.68, 1]},type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
            className='cursor-pointer p-2'
        >
            {children}
        </motion.div>
    )
}