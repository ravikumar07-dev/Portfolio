import NavItem from "./NavItem";
import Profilepic from "../assets/IMG_9440.JPG";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="flex flex-row justify-between text-white bg-[#212121] w-full h-16 items-center sticky top-0 z-50">
      <div className="flex flex-row justify-center items-center space-x-2 ml-5 md:pl-20">
        <img className=" h-10 rounded-full  " src={Profilepic} />
        <span className="md:text-[1.6rem] sm:text-2xl text-xl w-full">
          Ravi Kumar
        </span>
      </div>
      
      {/* For Navigation Links */}
      <div className="flex flex-row items-center space-x-4 md:space-x-12 text-xl pr-7 md:px-20 ">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#7b7b7b]"
          offset={-70}
          
        >
          <NavItem type="home" label="Home" />
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#7b7b7b]"
          offset={-70}
        >
          <NavItem type="about" label="About" />
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#7b7b7b]"
          offset={-70}
        >
          <NavItem type="projects" label="Projects" />
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#7b7b7b]"
          offset={-70}
        >
          <NavItem type="contact" label="Contact" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
