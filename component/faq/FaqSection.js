"use client";
import { faqData } from "@/data/Data";
import React, { useState } from "react";

const FaqSection = ({ img }) => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionBtn = (itemId) => {
    setOpenAccordion((prevState) => (prevState === itemId ? null : itemId));
  };
  return (
    <section className="tf__faq mt_100 pt_95 xs_pt_100 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__faq_img">
              <img
                src="https://res.cloudinary.com/dzkzewyh8/image/upload/v1753378826/faq-700x700_jtscqo.webp"
                alt="уроки по астрологии"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__faq_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>обучение астрологии в школе InGenium</h5>
                <h2>
                  Уникальные курсы астрологии, на которых дают полезные
                  практические знания
                </h2>
              </div>
              <p className="description"></p>
              <div className="tf__faq_accordion">
                <div className="accordion" id="accordionExample">
                  {faqData.map((item) => (
                    <div
                      className={`accordion-item ${item.color}`}
                      key={item.id}
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button ${
                            openAccordion === item.id ? "" : "collapsed"
                          }`}
                          onClick={() => handleAccordionBtn(item.id)}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${
                          openAccordion === item.id ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
