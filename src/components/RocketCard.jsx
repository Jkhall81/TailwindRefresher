import React from "react";

const RocketCard = ({
  imageSrc,
  headingText,
  paragraphTextOne,
  paragraphTextTwo,
}) => {
  return (
    <>
      <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid dark:bg-black border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
        <img className="w-1/2 mb-6" src={imageSrc} alt="random image" />
        <h3 className="text-3xl text-center text-slate-900 dark:text-white">
          {headingText}
        </h3>
        <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
          {paragraphTextOne}
        </p>
        <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
          {paragraphTextTwo}
        </p>
      </li>
    </>
  );
};

export default RocketCard;
