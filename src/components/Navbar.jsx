import { useState } from "react";
import SocialIcon from "./SocialIcon";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavChange = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192F] text-gray-300">
      {/* ======Logo======*/}
      <div>
        <Logo />
      </div>

      {/* ======Menu======*/}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavChange}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavChange}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavChange}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavChange}
            to="work"
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavChange}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* ======Social icons======*/}
      <SocialIcon />
    </div>
  );
};

export default Navbar;
