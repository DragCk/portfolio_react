import { useState } from "react";
import SocialIcon from "./SocialIcon";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavChange = () => setNav(!nav);

  return (
    <div
      className="fixed 
    w-full h-[80px] 
    flex 
    justify-between 
    items-center 
    px-4
     bg-[#08192F]
     text-gray-300
    "
    >
      {/* ======Logo======*/}
      <div>
        <Logo />
      </div>

      {/* ======Menu======*/}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      {/* ======hamburger======*/}
      <div onClick={handleNavChange} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* ======Mobile Menu======*/}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen  bg-[#08192F] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Project</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* ======Social icons======*/}
      <SocialIcon />
    </div>
  );
};

export default Navbar;
