import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="https://res.cloudinary.com/dzkzewyh8/image/upload/v1753286596/tf_about_top-460x250_zs1jmr.webp"
                  alt="школа астрологии"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h2>Хотите стать востребованным астрологом?</h2>
                  <p>
                    Записывайтесь на занятия по тел.: +38 094 490-75-26 или
                    пишите на WhatsApp. С нами Вы научитесь техникам чтения
                    натальной карты, синтеза и анализа гороскопа.
                  </p>
                </div>
                <a
                  href="https://wa.me/66804704182?text=Здравствуйте,%20я%20хочу%20задать%20вопрос"
                  className="common_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в WhatsApp"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h2>
                  Получите ответы на волнующие вас вопросы: пройдите курс
                  астрологии
                </h2>
              </div>
              <p>Примеры вопросов, ключи к ответам на которые Вы получите: </p>
              <ul>
                <li>В чем мое предназначение?</li>
                <li>Как избавиться от одиночества?</li>
                <li>Почему деньги уходят сквозь пальцы?</li>
                <li>Как найти прибыльную нишу?</li>
                <li>Как безопасно начать свой проект?</li>
                <li>Как свое увлечение превратить в доходный бизнес?</li>
                <li>Как развить таланты моего ребенка?</li>
                <li>Как проработать напряженную планету/аспект/Дом?</li>
                <li>Как избавиться от болезней?</li>
              </ul>
              <Link href="/courses" className="common_btn">
                каталог курсов
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="https://res.cloudinary.com/dzkzewyh8/image/upload/v1753290258/about-570x600_c4pmwp.webp"
                alt="обучение астрологии"
                className="img-fluid w-100"
              />
              <div className="text">
                <i className="far fa-check-circle"></i>
                <h3>37+</h3>
                <p>курсов по астрологии</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
