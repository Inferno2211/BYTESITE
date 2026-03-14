import React, { useEffect } from 'react';
import gsap from 'gsap';

const HeroMid = () => {
  useEffect(() => {
    const textNode = document.querySelector(".hero-mid-text");
    const containerNode = document.querySelector(".hero-mid-container");

    if (!textNode || !containerNode) return;

    const textWidth = textNode.offsetWidth;
    const containerWidth = containerNode.offsetWidth;

    gsap.fromTo(
      ".hero-mid-text",
      { x: containerWidth },
      {
        x: -textWidth,
        duration: 20, // Adjust the duration for speed
        ease: "none",
        repeat: -1, // Infinite loop
        repeatDelay: 0,
      }
    );
  }, []);

  return (
    <div className="hero-mid-container overflow-hidden text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white px-4">
      <div className="hero-mid-text inline-block whitespace-nowrap">
     We are Byte , Harvesting Insights from Diligent endeavours 
      {/* <span className="text-[#4afaab]">BYTE</span> where innovation meets action */}
      </div>
    </div>
  );
};

export default HeroMid;
