import { useState, useEffect } from "react";
import { FaHome, FaAddressCard, } from "react-icons/fa";
import { Code2Icon, } from "lucide-react";
import { IoMdPaperPlane } from "react-icons/io";

const iconMap = {
  home: FaHome,
  about: FaAddressCard,
  projects: Code2Icon,
  contact: IoMdPaperPlane,
};

const NavItem = ({ type, label }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 786);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Icon = iconMap[type.toLowerCase()];

  return <span>{isMobile && Icon ? <Icon className="text-xl" /> : label}</span>;
};

export default NavItem;
