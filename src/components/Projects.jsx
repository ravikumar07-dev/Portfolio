import React from "react";
import imgProject from "../assets/PasteApp.webp";
import PortfolioPic from "../assets/Portfolio.webp";
import img from "../assets/RandomNumber.webp";
import passImg from "../assets/Password.webp";

const Projects = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mt-5">
      {/* Heading */}
      <div>
        <h1 className="text-4xl md:text-5xl text-white">Projects</h1>
      </div>

      {/* Project Card */}
      <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:py-5 md:px-10 md:gap-5 mt-5">
        {/* Project 1 */}
        <div className="md:w-full p-6 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
          <div className=" relative flex flex-col justify-center">
            <img
              src={PortfolioPic}
              class=" w-50 h-30 md:w-full rounded-t-md object-cover transition-all duration-300"
              alt="img"
              loading="lazy"
            />
            <a
              href="https://ravikumar07-portfolio.netlify.app/"
              className="w-50 h-30 md:w-full absolute inset-0 bg-zinc-900/70 backdrop-blur-sm flex justify-center items-center text-white text-base font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-t-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Portfolio
            </a>
          </div>
          <div className="w-50 h-30 md:w-full p-4 sm:p-5 space-y-3 bg-[#1a1c1e] text-gray-300 rounded-b-md">
            <p className="text-left text-sm text-wrap sm:text-base">
              Interactive Portfolio showcasing my projects with smooth
              animations and responsive design.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className=" bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                React
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md text-xs px-2 py-1 rounded-full">
                JavaScript
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md text-xs px-2 py-1 rounded-full">
                Responsive Design
              </span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="md:w-full flex-col p-6 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
          <div className=" relative flex flex-col justify-center">
            <img
              src={imgProject}
              class=" w-50 h-30 md:w-full rounded-t-md object-cover transition-all duration-300"
              alt="img"
              loading="lazy"
            />
            <a
              href="https://clipboard-manager-six.vercel.app/"
              className="w-50 h-30 md:w-full absolute inset-0 bg-zinc-900/70 backdrop-blur-sm flex justify-center items-center text-white text-base font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-t-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit PasteApp
            </a>
          </div>
          <div className="w-50 h-30 md:w-full p-4 sm:p-5 space-y-3 bg-[#1a1c1e] text-gray-300 rounded-b-md">
            <p className="text-left text-sm text-wrap sm:text-base">
              Paste App is a small web application where you can paste any text
              or code, save it, and view it later.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className=" bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                React
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                Local Store
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                State Function
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                TailWind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Project 3*/}
        <div className="md:w-full flex-col p-6 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
          <div className=" relative flex flex-col justify-center">
            <img
              src={img}
              class=" w-50 h-30 md:w-full rounded-t-md object-cover transition-all duration-300"
              alt="img"
              loading="lazy"
            />
            <a
              href="https://random-number-one-theta.vercel.app/"
              className="w-50 h-30 md:w-full absolute inset-0 bg-zinc-900/70 backdrop-blur-sm flex justify-center items-center text-white text-base font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-t-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Random Number Generator
            </a>
          </div>
          <div className="w-50 h-30 md:w-full p-4 sm:p-5 space-y-3 bg-[#1a1c1e] text-gray-300 rounded-b-md">
            <p className="text-left text-sm text-wrap sm:text-base">
              R N Generator is a simple and responsive web & mobile-friendly
              app. It lets you generate random numbers and view the previously
              generated results.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className=" bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                React
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                State Function
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                TailWind CSS
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                Responsive
              </span>
            </div>
          </div>
        </div>

        {/* Project 4*/}
        <div className="md:w-full flex-col p-6 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
          <div className=" relative flex flex-col justify-center">
            <img
              src={passImg}
              class=" w-50 h-30 md:w-full rounded-t-md object-cover transition-all duration-300"
              alt="img"
              loading="lazy"
            />
            <a
              href="https://password-generator-red-sigma.vercel.app/"
              className="w-50 h-30 md:w-full absolute inset-0 bg-zinc-900/70 backdrop-blur-sm flex justify-center items-center text-white text-base font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-t-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Password Generator
            </a>
          </div>
          <div className="w-50 h-30 md:w-full p-4 sm:p-5 space-y-3 bg-[#1a1c1e] text-gray-300 rounded-b-md">
            <p className="text-left text-sm text-wrap sm:text-base">
              Instantly generate strong, customizable passwords with just one
              click. Choose length, character types & copy securely with
              toast notification.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className=" bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                React
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                State Function
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                TailWind CSS
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                Responsive
              </span>
              <span className="bg-white/10 backdrop-blur-sm shadow-md  text-xs px-2 py-1 rounded-full">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Github Link Section */}
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
