import { blogData } from "@/data/Data";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../services/api.js";

const BlogSlider = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const postsData = await fetchPosts(page, abortController.signal);
        setPosts(postsData);
        console.log(postsData);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    getData();
    return () => {
      abortController.abort(); // скасовує запит при анмаунті або зміні page
    };
  }, [page]);

  return (
    <Slider
      className="row blog_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {(posts ?? []).slice(0, 4).map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className="tf__single_blog">
            <Link className="tf__single_blog_img" href={`/${item.slug}`}>
              <img src={item.imgSrc} alt="blog" className="img-fluid w-100" />
            </Link>
            <div className="tf__single_blog_text">
              <Link className={`category ${item.color}`} href="/blog">
                {item.category}
              </Link>
              <Link className="title" href={`/${item.slug}`}>
                {item.title}
              </Link>
              <p>{item.desc}</p>
              <Link className="read_btn" href={`/${item.slug}`}>
                Читать статью <i className="fas fa-chevron-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BlogSlider;
