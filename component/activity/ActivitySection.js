import React from "react";

const ActivitySection = () => {
  return (
    <section className="tf__activities mt_100 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__heading_area tf__heading_area_left mb_20">
              <h5>обучение астрологии</h5>
              <h2>
                Освойте новую профессию – станьте сертифицированным астрологом
              </h2>
            </div>
            <div className="tf__activities_text">
              <p>
                По окончании курсов астрологии каждому участнику выдается
                именной сертификат. Если захотите проверить свои знания – сдайте
                экзамен и получите сертификат InGenium с указанием уровня
                подготовки.
              </p>
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  <div className="tf__activities_item light_blue">
                    <span>
                      <i className="fa fa-book"></i>
                    </span>
                    <h3>Онлайн занятия</h3>
                  </div>
                  <div className="tf__activities_item orange">
                    <span>
                      <i className="fa fa-university"></i>
                    </span>
                    <h3>Раздаточный материал</h3>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6 xs_mt_0 mt_30 md_margin">
                  <div className="tf__activities_item green">
                    <span>
                      <i className="fa fa-graduation-cap"></i>
                    </span>
                    <h3>Заочное обучение</h3>
                  </div>
                  <div className="tf__activities_item blue">
                    <span>
                      <i className="fa fa-book-medical"></i>
                    </span>
                    <h3>Практические занятия</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInRight">
            <div className="tf__activities_img">
              <img
                src="https://res.cloudinary.com/dzkzewyh8/image/upload/v1753374406/sertifikat-S-815x730_xtrjuc.webp"
                alt="уроки по астрологии"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
