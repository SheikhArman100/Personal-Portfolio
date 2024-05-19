export const sectionAnimation = {
    hidden: {},
    show: {
        
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  export const logoReveal = {
    hidden: {
      scaleX:1
    },
    show: {
      scaleX:0,
      transition: {
        delay:0,
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
        delay:0.7,
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
        delay:1.2,
        ease:"linear"
  
      }
      
    }
  }

  

  export const revealTitleAnimation =(index)=>( {
    hidden: { y: "100%" },
    show: {
      y: "0",
      transition: {
        delay:1+(index*0.1),
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  });
  export const dropTextAnimation={
    hidden: { opacity:0},
    show: {
      opacity:1,
      transition: {
        delay:1.6,
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  export const mailAnimation={
    hidden: {
      scaleX:1
    },
    show: {
      scaleX:0,
      transition: {
        delay:1.9,
        duration:0.7,
        ease:"linear"
      }
    }
  }
  export const bottomTextAnimation={
    hidden: { opacity:0},
    show: {
      opacity:1,
      transition: {
        delay:2.6,
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }
