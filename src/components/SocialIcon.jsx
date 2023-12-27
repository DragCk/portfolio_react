import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ui>
        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
      </ui>
    </div>
  );
};

export default SocialIcon;
