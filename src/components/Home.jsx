import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#08192F]">
      {/* ====== Container ======*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Julio Tsai
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          distinctio qui rem. Maiores, consectetur. Ad consequatur fugit ea enim
          suscipit delectus repellendus, quam itaque debitis quas sequi eveniet,
          non sapiente nostrum similique! Maiores, corporis atque ab deserunt
          numquam repellat dolore officia. Dolor aliquid, praesentium aut
          possimus blanditiis incidunt ab temporibus.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <HiArrowNarrowRight className="ml-4 group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
