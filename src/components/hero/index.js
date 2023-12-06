import React from 'react';
import heroimage from "../../assets/heroimage.svg";


const Hero = () => {
  return (
    <div className='w-[100vw] md:w-[100%]'>
    <img src={heroimage} alt="heroimage"/>
</div>

  );
};

export default Hero;
