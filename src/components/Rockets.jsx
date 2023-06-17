import React from "react";
import RocketCard from "./RocketCard";
import { rocketData } from "../assets/data.js";

const Rockets = () => {
  return (
    <>
      <section id="rockets" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <p className="text-center text-2xl">
          <small>(None of the pictures are Rockets...... or are they?)</small>
        </p>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          {rocketData.map((rocket, index) => (
            <RocketCard
              key={index}
              imageSrc={rocket.imageSrc}
              headingText={rocket.headingText}
              paragraphTextOne={rocket.paragraphTextOne}
              paragraphTextTwo={rocket.paragraphTextTwo}
            />
          ))}
        </ul>
      </section>
      <hr className="w-1/2 mx-auto bg-black dark:bg-white" />
    </>
  );
};

export default Rockets;
