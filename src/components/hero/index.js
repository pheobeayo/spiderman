import React from 'react';
import heroimage from "../../assets/heroimage.svg";


const Hero = () => {
  return (
    <div className='w-[100vw] md:w-[100%]'>
      <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">

        <img src={heroimage} alt="heroimage" />
        <figcaption class="absolute px-16 text-lg text-white bottom-40 mx-8">
          <h1 class='text-white text-8xl'>Create
            <br></br>Monetize.
            <br></br>Prosper.</h1>
          <h2 class='text-4xl text-white'>
            An Independent
            <br></br>Subscription platform.
          </h2>
          <h3 class='text-2xl text-[#1AB20D]'>
            Free <span class='text-white text-lg'>Today for musicians,
            <br></br>Visual artists and educators</span>
          </h3>
        </figcaption>
      </figure>
    </div>

  );
};

export default Hero;
