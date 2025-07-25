"use client";
import React from "react";
import { useEduorContext } from "@/context/EduorContext";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";

const NavigationSection = ({ position, btnPosition, navRef }) => {
  const { isMobileNavOpen } = useEduorContext();
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <Navlink href="/about">О нас</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/courses">Курсы</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/blog">Блог</Navlink>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            pages <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/courses/development-theory-learn">
                courses details
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/blog/learn-with-these-award-winning-best-blog-collage-courses">
                blog details
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events">event</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events/outdoor-this-games">
                event details
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/team">team</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/team/john-smith">team details </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/faq">FAQs</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-in">sign in</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-up">sign up</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/terms-condition">
                terms and condition
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/privacy-policy">privacy policy</SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="/contact">Контакты</Navlink>
        </li>
        {btnPosition ? null : (
          <li className="nav-item">
            <a
              className="nav-link common_btn"
              href="https://wa.me/66804704182?text=Здравствуйте,%20я%20хочу%20задать%20вопрос"
              aria-label="задать вопрос"
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в WhatsApp
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a
          className="common_btn_2 ms-auto"
          href="https://wa.me/66804704182?text=Здравствуйте,%20я%20хочу%20задать%20вопрос"
          aria-label="задать вопрос"
          rel="noopener noreferrer"
        >
          Написать в WhatsApp
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;
