"use client"
import ReactLenis from '@studio-freight/react-lenis'
import React from 'react'

const SmoothScroll = ({children}) => {
  return (
    <ReactLenis root  options={{  wheelMultiplier:1.2, smoothTouch: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll