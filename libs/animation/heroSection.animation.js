import { delay, transform } from "framer-motion"
import { Diameter } from "lucide-react"

export const heroRevealContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}
export const heroRevealDiv = {
  hidden: {
    scaleX: 0
  },
  show: {
    scaleX: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}
export const heroContainer = {
  hidden: {
    opacity:0
  },
  show: {
    opacity:1,
    transition: {
      delay: 1.4,
    }
  }
}
export const logoReveal = {
  hidden: {
    scaleX:1
  },
  show: {
    scaleX:0,
    transition: {
      delay:1.4,
      duration:0.7,
      ease:"linear"
    }
  }
}
export const availableReveal={
  hidden:{
    scaleX:0
  },
  show:{
    scaleX:1,
    transition:{
      delay:1.7,
      duration:0.5,
      
      ease:"linear"
    }
  }
}
export const availableText={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      delay:2.2,
    ease:"linear"

    }
    
  }
}

export const revealTitleAnimation =(index)=>( {
  hidden: { y: "100%" },
  show: {
    y: "0",
    transition: {
      delay:1.6+(index*0.1),
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
});
export const revealVectorAnimation={
  hidden: {
    scale:0
  },
  show: {
    scale:1,
    rotate:260,
    transition: {
      scale:{
        delay:2,
        duration:0.4,
        ease: [0.33, 1, 0.68, 1],
      },
      rotate:{
        delay:2.4,
        duration:0.8,
        type:"tween",
        ease: [0.33, 1, 0.68, 1],
      }
      
    }
  }
  
}
export const wordAnimation=(index)=>({
  hidden:{opacity:0},
  show:{opacity:1,transition:{
    delay:2+(0.08 * index),
    ease: [0.33, 1, 0.68, 1],
  }}
})

export const downloadButtonAnimation={
  hidden:{
    scaleX:0
  },
  show:{
    scaleX:1,
    transition:{
      delay:2.2,
      duration:0.4,
      ease:"linear"
    }
  }
}
export const downloadButtonTextAnimation={
  hidden:{opacity:0},
  show:{opacity:1,
    transition:{delay:2.6,duration:0.3}}
}
export const navbarReveal={
  hidden:{
    scaleX:0,
    x: "-50%",
  },
  show:{
    scaleX:1,
    x: "-50%",
    transition:{
      delay:2.6,
      duration:0.7,
      ease:"linear"
    }
  }
}
export const navbarText={
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      delay:3.3,
      duration:0.4,
      staggerChildren:0.3,
      ease:"linear"
    }
  }
}
