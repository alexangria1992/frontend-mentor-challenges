import React from "react";
import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

const State = () => {
  return (
    <>
      <section className="px-5 py-10 text-center state text-white relative z-10">
        <div className="pt-80 px-5">
          <h2 className="text-center text-3xl text-white mb-5 lg:text-4xl 2xl:text-5xl">
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
        <div>
          <div>
            <img src={circles} alt="" className="state-img circles" />
          </div>
          <div>
            <img src={phones} alt="" className="state-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default State;
