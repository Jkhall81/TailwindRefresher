import React from "react";
import TestimonialCard from "./TestimonialCard.jsx";
import { TestimonialData } from "../assets/data.js";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Testimonials
        </h2>
        {TestimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quoteText={testimonial.quoteText}
            person={testimonial.person}
          />
        ))}
        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />
      </section>
    </>
  );
};

export default Testimonials;
