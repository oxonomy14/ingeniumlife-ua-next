"use client";
import React from "react";
import TestimonialSlider from "../slider/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="tf___testimonial mt_100 pt_95 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_50">
              <h5>Школа астрологии InGenium Life</h5>
              <h2>Отзывы об обучении в нашей школе астрологии</h2>
            </div>
          </div>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
