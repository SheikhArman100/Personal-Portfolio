export const revealContainer = {
    initial: {},
    animate: {
      transition: {
        delayChildren:0.3,
        staggerChildren: 0.2,
      },
    },
  };
  export const revealTitleAnimation ={
    initial: { y: "100%" },
    animate: {
      y: "0",
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }
 export  const revealImageAnimation={
  initial:{
    scaleY:1
  },
  animate:{
    scaleY:0,
    transition:{
      duration:1
    }

  }
 }