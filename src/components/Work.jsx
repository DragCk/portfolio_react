import MoviePlanetImg from "../assets/movieplanet.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#08192F]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6">Check out my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${MoviePlanetImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* ======Hover Effect======*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React jhvj jhvvs
              </span>
              <div className="pt-8 text-center">
                <a href="https://full-stack-react-movie-app.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/DragCk/Full-stack-React-Movie-App">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
