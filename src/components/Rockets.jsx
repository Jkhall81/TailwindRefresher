import React from "react";
import RocketCard from "./RocketCard";

const rockets = () => {
  return (
    <>
      <section id="rockets" className="p-6 my-12">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <RocketCard
            imageSrc="https://picsum.photos/200/300?random=1"
            headingText="Explorer"
            paragraphTextOne="$"
            paragraphTextTwo="Affordable Exploration"
          />
          <RocketCard
            imageSrc="https://picsum.photos/200/300?random=2"
            headingText="Adventurer"
            paragraphTextOne="$$"
            paragraphTextTwo="Best Selling Rocket"
          />
          <RocketCard
            imageSrc="https://picsum.photos/200/300?random=3"
            headingText="Infinity"
            paragraphTextOne="$$$"
            paragraphTextTwo="Luxury Starship"
          />
        </ul>
      </section>
      <hr className="w-1/2 mx-auto bg-black dark:bg-white" />
    </>
  );
};

export default rockets;
