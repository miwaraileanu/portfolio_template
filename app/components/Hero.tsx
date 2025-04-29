"use client";

import Image from "next/image";
import { FC } from "react";
import profileImage from "@/public/your-image.png"; // replace with your image file

const HomeSlide: FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-white px-6 md:px-16 py-10 relative z-10">
      <div className="flex flex-col justify-center items-center md:items-start flex-1 text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hi! I&rsquo;m <span className="text-[#80ed99]">Your Name</span>,
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#80ed99] mb-4">
          Your Role or Title
        </h2>
        <p className="text-base md:text-lg font-light leading-relaxed mb-6">
          A short introduction about yourself. Describe what you do, what you’re passionate about, and invite visitors to explore your work.
        </p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a href="#about">
            <button className="bg-white text-[#1b1e22] px-6 py-2 rounded font-semibold transition duration-300 hover:scale-105">
              About Me
            </button>
          </a>
          <a href="#contact">
            <button className="bg-[#80ed99] text-[#1b1e22] px-6 py-2 rounded font-semibold transition duration-300 hover:bg-[#66c987] hover:scale-105">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Image Block */}
      <div className="relative w-full md:w-[30%] max-w-xs mt-10 md:mt-0 md:ml-12 hidden md:flex justify-center items-center">
        <div className="absolute -top-12 -right-12 rotate-90">
          <hr className="w-[150px] h-[10px] bg-[#80ed99] border-none rounded-tr" />
          <hr className="w-[10px] h-[120px] bg-[#80ed99] border-none rounded-br" />
        </div>

        <div className="relative shadow-2xl rounded-lg overflow-hidden w-96">
          <Image
            src={profileImage}
            alt="Profile Image"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#343a40] to-transparent" />
        </div>

        <div className="absolute -bottom-12 -left-12 -rotate-90">
          <hr className="w-[150px] h-[10px] bg-[#80ed99] border-none rounded-tr" />
          <hr className="w-[10px] h-[120px] bg-[#80ed99] border-none rounded-br" />
        </div>
      </div>
    </section>
  );
};

export default HomeSlide;