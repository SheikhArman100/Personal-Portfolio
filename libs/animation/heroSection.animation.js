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
      staggerChildren: 0.4
    }
  }
}
export const heroDiv = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}
export const logoAnimation = {
  hidden: {
    scaleX: 1
  },
  show: {
    scaleX: 0,
    transition: {
      duration: 2
    }
  }
}
