import React from "react";
import profileImage from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 p-8 md:p-20">
      {/* Text Side - Centered */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="max-w-md space-y-6 text-center md:text-left">
          <p className="text-pink-500 font-medium text-lg">📍 Curitiba, PR, Brasil</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I Build Custom <br />
            <span className="text-sky-500">Website Solutions</span> <br />
            That Help Your <br />
            <span className="text-sky-500">Business Grow</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I help you increase conversion and performance in every possible way.
          </p>
        </div>
      </div>

      {/* Image Side - Centered */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-12 md:mt-0">
        {/* Purple Circle Behind Image */}
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-100 rounded-full -z-10" />

        {/* Profile Image */}
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg bg-blue-100">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}