import CssImg from "../assets/css.png";
import GithubImg from "../assets/github.png";
import HtmlImg from "../assets/html.png";
import JavaScriptImg from "../assets/javascript.png";
import MongoImg from "../assets/mongo.png";
import NodeImg from "../assets/node.png";
import ReactImg from "../assets/react.png";
import TailwindImg from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#08192F] text-gray-300">
      {/* ======Container======*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">Skills I have</p>
        </div>

        {/* ======Icon Container======*/}
        <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={HtmlImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={CssImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={JavaScriptImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={MongoImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={NodeImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={ReactImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={TailwindImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">TailwindCss</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={GithubImg} alt="HTML" className="w-20 mx-auto my-4" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
