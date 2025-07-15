import Img from "../assets/IMG_9440.JPG";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub, FaJs, FaLinkedinIn, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { Mail } from "lucide-react";

const About = () => {
  return (
    <section className="w-full h-full flex flex-col mt-5 text-white">
      <div className="flex flex-col justify-between lg:flex-row items-center w-full h-full mt-6 px-6 sm:px-6 md:px-10 lg:px-20 sm:mt-6 md:mt-10 lg:mt-15 gap-5">
        <div className="w-full lg:w-[60%] h-full mx-4 mt-6 p-4 sm:p-6 rounded-2xl flex flex-col items-start cursor-pointer">
          <h1 className="text-left text-4xl md:text-5xl">About Me</h1>
          <p className="text-justify mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] ">
            Hi, I'm Ravi Kumar, a passionate and dedicated Frontend Developer
            based in Agra. I have a solid foundation in building responsive and
            user-friendly web applications using modern web technologies. As I
            progressed in my learning journey, I began working with React and
            explored powerful libraries like Redux and Tailwind CSS to create
            more dynamic and efficient user interfaces. I enjoy turning ideas
            into reality through code, constantly learning new tools, and
            staying updated with the latest trends in frontend development.
          </p>

          {/* Contact */}
          <div className="flex mt-8 gap-8 bg-white/10 backdrop-blur-sm shadow-md  ">
            <button className="w-24 text-center bg-white/10 backdrop-blur-sm shadow-md">
              Connect
            </button>
            <div className="flex space-x-8 items-center p-2 ">
              <a
                className="flex gap-2 items-center"
                href="https://github.com/ravikumar07-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="size-5 hover:text-black transition duration-300 ease-in-out 
                   hover:drop-shadow-[0_0_10px_#000000] hover:scale-110"
                />
                <span className="hidden sm:block">Github</span>
              </a>
              <a
                className="flex gap-2 items-center"
                href="https://www.linkedin.com/in/ravi-kumar-a45295354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="size-5 hover:text-blue-500 transition duration-300 ease-in-out 
                   hover:drop-shadow-[0_0_10px_#3b82f6] hover:scale-110"
                />
                <span className="hidden sm:block">Linked In</span>
              </a>
              <a
                className="flex gap-2 items-center"
                href="mailto:ravip2886@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail
                  className="size-5 hover:text-red-500 transition duration-300 ease-in-out 
                   hover:drop-shadow-[0_0_10px_#FF0000] hover:scale-110"
                />
                <span className="hidden sm:block">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* img  */}
        <div className="w-[40%] items-end flex justify-center">
          <img
            src={Img}
            className=" w-1/2 rounded-xl mt-6 hidden lg:block cursor-pointer"
            loading="lazy"
            alt="myPic"
          />
        </div>
      </div>

      {/* for icons skills */}
      <div className="w-full md:w-[100%] h-full  md:mx-0 md:px-24 md:py-24 rounded-2xl flex flex-col justify-center px-7 ">
        <div className="text-left md:text-center text-4xl md:text-5xl px-3">
          <h1>Skills</h1>
          <div className="flex gap-x-3 flex-wrap md:flex-row cursor-pointer md:justify-center mt-2 md:mt-4">
            <span className=" mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] px-3 py-1 bg-white/10 backdrop-blur-sm shadow-md">
              #Html
            </span>
            <span className=" mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] px-3 py-1 bg-white/10 backdrop-blur-sm shadow-md">
              #CSS
            </span>
            <span className=" mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] px-3 py-1 bg-white/10 backdrop-blur-sm shadow-md">
              #JavaScript
            </span>
            <span className=" mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] px-3 py-1 bg-white/10 backdrop-blur-sm shadow-md">
              #React
            </span>
            <span className=" mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] px-3 py-1 bg-white/10 backdrop-blur-sm shadow-md">
              #Tailwind
            </span>
            <span className=" mt-2 md:mt-4 text-sm md:text-lg text-[#dbdbdb] px-3 py-1 bg-white/10 backdrop-blur-sm shadow-md">
              #Redux
            </span>
          </div>
        </div>

        {/* icons */}
        <div className="flex flex-wrap justify-start md:justify-center mt-5 p-3 gap-8 shrink">
          <div className="flex flex-col justify-center items-center w-20 h-20 md:w-32 md:h-32   px-3 py-3 bg-white/10 backdrop-blur-sm shadow-md">
            <SiHtml5 className="fill-red-500 size-10 lg:size-14 " />
            <span>HTML</span>
          </div>

          <div className="flex flex-col justify-center items-center w-20 h-20 md:w-32 md:h-32 px-3 py-3 bg-white/10 backdrop-blur-sm shadow-md">
            <IoLogoCss3 className=" fill-blue-700 size-12 lg:size-14" />
            <span>CSS</span>
          </div>

          <div className=" flex flex-col justify-center items-center w-20 h-20 md:w-32 md:h-32 px-3 py-3 bg-white/10 backdrop-blur-sm shadow-md">
            <FaJs className="fill-yellow-500 size-12 lg:size-14" />
            <span>JavaScript</span>
          </div>

          <div className="flex flex-col justify-center items-center w-20 h-20 md:w-32 md:h-32 px-3 py-3 bg-white/10 backdrop-blur-sm shadow-md">
            <FaReact className="fill-sky-400 size-12 lg:size-14" />
            <span>React</span>
          </div>

          <div className="flex flex-col justify-center items-center w-20 h-20 md:w-32 md:h-32 px-3 py-3 bg-white/10 backdrop-blur-sm shadow-md">
            <RiTailwindCssFill className="fill-sky-400 size-12 lg:size-14" />
            <span>Tailwind</span>
          </div>

          <div className="flex flex-col justify-center items-center w-20 h-20  md:w-32 md:h-32 px-3 py-3 bg-white/10 backdrop-blur-sm shadow-md">
            <TbBrandRedux className="text-[#593d88] size-12 lg:size-14" />
            <span>Redux</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
