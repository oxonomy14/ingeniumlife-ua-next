"use client";
import { useEduorContext } from "@/context/EduorContext";
import React from "react";

const VideoSection = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__video mt_100">
      <div className="tf__video_overlay pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto wow fadeInUp">
              <div className="tf__video_text">
                <a
                  className="venobox play_btn"
                  role="button"
                  onClick={handleVideoShow}
                >
                  <i className="fas fa-play"></i>
                </a>
                <h4>Посмотрите первый урок из курса натальной астрологии</h4>
                <p>
                  чтобы познакомиться с нашей школой и методикой преподавания.
                  Вы получите базовые знания: Как работает астрология? Главные
                  мифы об астрологии, Основы чтения натальной карты, Уровни
                  чтения натальной карты, Строение гороскопа.
                </p>
                <a className="common_btn" href="#">
                  Подать заявку на доступ к системе обучения
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
