import React from "react";

const VideoBanner = () => {
  return (
    <div className="video-container h-[600px] ">
      <video autoPlay loop muted className="w-full object-cover h-full">
        <source src="/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
