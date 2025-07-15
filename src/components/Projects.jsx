import React from "react";
import imgProject from "../assets/ImgProject.png";

const Projects = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mt-5">
      <div>
        <h1 className="text-4xl md:text-5xl text-white">Projects</h1>
      </div>
      <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
        <div className=" relative flex flex-col justify-center">
          <img
            src={imgProject}
            class=" w-50 h-30 md:w-90 md:h-80 rounded-t-md object-cover transition-all duration-300"
            alt="img"
            loading="lazy"
          />
          <a
            href="https://clipboard-manager-six.vercel.app/"
            className="absolute inset-0 bg-zinc-900/70 backdrop-blur-sm flex justify-center items-center text-white text-base font-semibold opacity-0 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit PasteApp
          </a>
        </div>
        <div className="w-50 h-30 p-4 sm:p-5 space-y-3 bg-red-50 rounded-b-md">
          <p className="text-left text-black text-sm sm:text-base">
            Paste App is a small web application where you can paste any text or code, save it, and view it later.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className=" bg-white/10 backdrop-blur-sm shadow-md text-black text-xs px-2 py-1 rounded-full">
              React
            </span>
            <span className="bg-white/10 backdrop-blur-sm shadow-md text-black text-xs px-2 py-1 rounded-full">
              Local Store
            </span>
            <span className="bg-white/10 backdrop-blur-sm shadow-md text-black text-xs px-2 py-1 rounded-full">
              State Function
            </span>
            <span className="bg-white/10 backdrop-blur-sm shadow-md text-black text-xs px-2 py-1 rounded-full">
              TailWind CSS  
            </span>
          </div>
        </div>
      </div>
      <div className="text-white mt-5 mb-5 flex flex-col ">
        <h1 className="text-lg">Want To See More?</h1>
        <a
          href="https://github.com/ravikumar07-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" bg-white/20 backdrop-blur-sm shadow-md hover:bg-white/50 text-white text-lg rounded-md px-8 py-2 mt-2">
            Visit My GitHub
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
