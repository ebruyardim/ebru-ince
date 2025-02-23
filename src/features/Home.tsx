import React from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
const Home = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-700 to-green-600 leading-relaxed pb-10">
            Hi, I'm Ebru!
          </h1>
          <p className="text-xl mb-6 font-semibold bg-gradient-to-r from-purple-800 via-blue-700 to-green-600 text-transparent bg-clip-text animate-gradient leading-relaxed">
            "I'm a frontend developer who loves turning ideas into interactive
            and responsive web experiences. I specialize in React, TypeScript,
            Tailwind, and Redux to build fast and efficient applications.
          </p>
          <p className="text-xl mb-6 font-semibold bg-gradient-to-r from-purple-800 via-blue-700 to-green-600 text-transparent bg-clip-text animate-gradient leading-relaxed">
            I focus on writing clean, maintainable code and creating smooth user
            interfaces. My goal is to make the web more intuitive and enjoyable
            for everyone."
          </p>
        </div>
        <div className="flex-1 animate-fade-in-scale">
          <img
            src="/profil.jpeg?height=400&width=400"
            alt="Profile"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
