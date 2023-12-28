import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#08192F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
              iure?
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              non culpa sapiente dignissimos harum! Maiores fugiat perferendis
              cum, quidem iure autem eum voluptates harum incidunt id blanditiis
              earum optio doloribus praesentium, laborum amet assumenda, eius
              quisquam temporibus inventore. Nisi accusamus odit adipisci,
              provident mollitia nobis natus. Reiciendis veniam facere rem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
