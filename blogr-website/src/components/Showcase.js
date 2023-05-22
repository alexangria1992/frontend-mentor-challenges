import React from "react";

const Showcase = () => {
  return (
    <>
      <section className="showcase  ">
        <div className="overlay border-2 border-green-400 px-5 items-center flex flex-col  justify-center text-center">
          <h1 className="font-bold mb-5 text-4xl text-white md:text-5xl xl:text-6xl 2xl:text-7xl">
            A modern publishing platform
          </h1>
          <p className="text-white">
            Grow your audience and build your online brand
          </p>
          <ul className="flex items-center">
            <li className="mx-1 my-5">
              <button className="btn-light px-4 bg-white py-2 rounded-full ">
                Start for Free
              </button>
            </li>
            <li className="mx-1 my-5">
              <button className="border border-white py-2 px-4 rounded-full text-white">
                Learn more
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Showcase;
