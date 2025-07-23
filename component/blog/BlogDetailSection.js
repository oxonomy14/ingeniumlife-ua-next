"use client";
//import { blogData } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import { useEffect } from "react";

const BlogDetailSection = ({ blogDesc, postsData }) => {
  useEffect(() => {
    if (!blogDesc?._id) return;

    fetch(
      `https://nodejs-ingenium-life-ua.onrender.com/blog/${blogDesc._id}/increment-views`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Views incremented:", data);
      })
      .catch((err) => {
        console.error("Error incrementing views:", err);
      });
  }, [blogDesc._id]);

  return (
    <section id="read" className="tf__blog_details_page mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tf__blog_details_area">
              <article>
                <div className="tf__blog_details_img wow fadeInUp">
                  <img
                    src={`${blogDesc.imgSrcPostTop}`}
                    alt={`${blogDesc.keyWordImgSrcPostTop}`}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__blog_details_text wow fadeInUp">
                  <ul className="date d-flex flex-wrap">
                    <li>
                      <i className="far fa-user-edit"></i> {blogDesc.author}
                    </li>
                    <li>
                      <i className="fal fa-calendar-alt"></i>
                      {format(new Date(blogDesc.date), "dd.MM.yyyy")}
                    </li>
                  </ul>
                  <h2>{blogDesc.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: blogDesc.longDesc }}
                  />
                </div>

                {/* <div className="tf__blog_comment mt_60 wow fadeInUp">
                <h3>Comments (3)</h3>
                <div className="tf__single_comment">
                  <div className="tf__single_comment_img">
                    <img
                      src="/images/client_img_1.png"
                      alt="client"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_comment_text">
                    <h4>Rubel Merat</h4>
                    <p>
                      Lorem ipsum is simply free textdolor sit amet, consectetur
                      notted adipisicing elit sed do iusmod tempor incididu.
                    </p>
                    <span>
                      31 jan 2023 at 03.16 pm <a href="#">reply</a>
                    </span>
                  </div>
                </div>
                <div className="tf__single_comment reply">
                  <div className="tf__single_comment_img">
                    <img
                      src="/images/client_img_2.png"
                      alt="client"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_comment_text">
                    <h4>Korat Berata</h4>
                    <p>
                      Lorem ipsum is simply free textdolor sit amet, consectetur
                      notted adipisicing elit sed do iusmod tempor incididu.
                    </p>
                    <span>
                      31 jan 2023 at 03.16 pm <a href="#">reply</a>
                    </span>
                  </div>
                </div>
                <div className="tf__single_comment">
                  <div className="tf__single_comment_img">
                    <img
                      src="/images/client_img_3.png"
                      alt="client"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_comment_text">
                    <h4>Norat Berata</h4>
                    <p>
                      Lorem ipsum is simply free textdolor sit amet, consectetur
                      notted adipisicing elit sed do iusmod tempor incididu.
                    </p>
                    <span>
                      31 jan 2023 at 03.16 pm <a href="#">reply</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="tf__comment_reply mt_65 wow fadeInUp">
                <h3>leave a Comment</h3>
                <form>
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-xl-6">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-xl-12">
                      <textarea rows="5" placeholder="Comment..."></textarea>
                      <button type="submit">submit</button>
                    </div>
                  </div>
                </form>
              </div> */}
              </article>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit" aria-label="поиск">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="tf__sidebar_certificate">
                <span>
                  <i className="fas fa-share-alt"></i>
                </span>
                <h3>Online Certificates</h3>
                <p>
                  We can provide you with a reliable handyan in London. you need
                  to included the today.
                </p>
                <a href="#" aria-label="узнать подробнее">
                  <i className="fas fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="tf__sidebar_blog sidebar_item">
                <h3>Недавние публикации</h3>
                <ul>
                  {postsData.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={`${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="far fa-calendar-alt"></i>{" "}
                          {format(new Date(item.date), "dd.MM.yyyy")}
                        </p>
                        <Link href={`/${item.slug}`}>{item.longTitle}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tf__sidebar_category sidebar_item">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      Business <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Maintenance <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Professional <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Technology<span>(29)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Single-Business<span>(32)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Innovation <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tf__sidebar_tags sidebar_item pr_10">
                <h3>Tag</h3>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">service</a>
                  </li>
                  <li>
                    <a href="#">top</a>
                  </li>
                  <li>
                    <a href="#">help</a>
                  </li>
                  <li>
                    <a href="#">new</a>
                  </li>
                  <li>
                    <a href="#">best</a>
                  </li>
                  <li>
                    <a href="#">UI/UX</a>
                  </li>
                  <li>
                    <a href="#">sound</a>
                  </li>
                </ul>
              </div>
              <div className="tf__sidebar_apply">
                <img
                  src="https://res.cloudinary.com/dzkzewyh8/image/upload/v1753265006/baner-sidebar-1_uc3ith.webp"
                  alt="обучение астрологии"
                  className="img-fluid w-100"
                />
                <a href="#" aria-label="узнать подробнее о новом курсе">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
