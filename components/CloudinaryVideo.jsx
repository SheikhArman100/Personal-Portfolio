"use client";
import { CldVideoPlayer } from "next-cloudinary";

import "next-cloudinary/dist/cld-video-player.css";

const CloudinaryVideo = (props) => {
  return (
    <CldVideoPlayer {...props}/>
  )
}

export default CloudinaryVideo