import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flexCenter relative h-screen w-screen bg-cover bg-center hide-scrollbar" style={{backgroundImage: "url('/hero-bg.png')"}}>
      
      <div className="absolute text-center bottom-36 gap-12 font-extrabold text-xl md:text-4xl text-white z-10">WATCH MOVIES FROM 
      <br/><span className="break-all text-3xl md:text-6xl underline decoration-red-700">YOUR IMAGINATION</span>
      <br/><span className="break-words mx-4 leading-3 gap-0 font-thin text-xs md:text-sm ">Search movies with generative AI prompt that able to assist your preferences on movies, series, documentary, and many more. Sit tight, ready your popcorn, binge watch!</span>
      </div>

      <div className="flex flex-col absolute bottom-16 z-10">
      <Image src="/arrow-down.svg"
      alt="arrow-down"
      width={50}
      height={50}
      />
      </div>


      <div className="flexCenter absolute bottom-0 h-screen w-screen bg-gradient-to-t from-black bg-opacity-90"></div>
          
    </section>
  );
};

export default Hero;
