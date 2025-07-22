import React from "react";

const CategorySection = () => {
  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h2>Учиться в нашей школе астрологии легко и интересно</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category light_blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Материалы</h3>
                <p>
                  Предоставляем уникальные авторские методические пособия,
                  чек-листы, таблицы для более простого восприятия теории
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Практика</h3>
                <p>
                  Разбираем натальные карты учеников в ходе обучения астрологии
                  и рассказываем о профессиональных секретах
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category green">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Канал в Telegram</h3>
                <p>
                  Приглашаем вступить в наше сообщество, чтобы получить доступ к
                  интересному контенту и общаться с единомышленниками
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category gray">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Записи занятий</h3>
                <p>
                  Даем постоянный доступ ко всем записям – можно пересмотреть
                  какой-либо урок в любой момент
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category orange">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Связь с куратором</h3>
                <p>
                  Предлагаем задавать вопросы по пройденным лекциям – можно
                  позвонить по телефону или написать через мессенджеры
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category red">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Встречи вне программы</h3>
                <p>
                  Проводим дополнительные онлайн встречи в рамках авторского
                  канала Павла Дементьева для закрепления материала
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
