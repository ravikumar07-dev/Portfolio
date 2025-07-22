import Resume from "../assets/Ravi Kumar.pdf";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Vector from "../assets/vector.png";

const Home = () => {
  return (
    <>
      <section className="bg-transparent w-full h-full flex flex-col md:flex-row sm:flex-row justify-between text-white lg:mb-20">
        <div className="w-[100%] md:w-[60%] flex flex-col px-10 md:px-24 text-start mt-6 md:mt-20">
          <h1 className=" font-semibold text-[3rem] md:text-5xl">Ravi Kumar</h1>
          <p className="text-xl text-[#7b7b7b] ">Frontend Developer</p>
          <p className="text-bsse mt-3">
            Driven frontend developer focused on building fast, modern, and
            responsive web interfaces using React.js and Tailwind CSS. Looking
            to join a forward-thinking team where I can solve real-world
            problems, contribute meaningfully, and grow my skills through
            hands-on experience.
          </p>

          <div className="flex flex-row mt-10">
            <button className="bg-gray-300 text-black w-28 h-9 hover:bg-blue-500 hover:text-white duration-300 ease-in-out ">
              <a
                className="flex flex-row justify-center gap-2 place-items-center text-center"
                href={Resume}
                download="Ravi Kumar"
              >
                Resume
                <Download className="size-4" />
              </a>
            </button>

            <a
              className="bg-slate-100 text-black w-10 h-9  flex justify-center place-items-center hover:bg-red-700 hover:text-white duration-300 ease-in-out"
              href="mailto:ravip2886@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="size-5" />
            </a>

            <a
              className="bg-slate-100 text-black w-10 h-9  flex justify-center place-items-center hover:bg-black hover:text-white duration-300 ease-in-out"
              href="https://github.com/ravikumar07-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-5" />
            </a>

            <a
              className="bg-slate-100 text-black w-10 h-9  flex justify-center place-items-center hover:bg-blue-700 hover:text-white duration-300 ease-in-out"
              href="https://www.linkedin.com/in/ravi-kumar-a45295354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="size-5" />
            </a>
          </div>
        </div>

        <div className=" md:w-[50%] w-full flex justify-center items-center mt-5 ">
          <img
            src={Vector}
            className="w-[70%] md:w-[70%] mt-10"
            loading="eager"
            alt="vector"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
