"use client";
import { CldImage, CldVideoPlayer } from "next-cloudinary";

import "next-cloudinary/dist/cld-video-player.css";
import { useState } from "react";

const CloudinaryVideo = ({ video,photo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '100%', height: 'auto' }}
    >
      {!isHovered ? (
        <CldImage
        
          src={photo}
          fill
          alt="Thumbnail"
          
        />
      ) : (
        <CldVideoPlayer
          
          src={video}
          width="1920"
          height="1080"
          loop
          muted
          autoPlay
          playsInline
        />
      )}
    </div>
  );
};

export default CloudinaryVideo;