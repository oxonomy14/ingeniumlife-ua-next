"use client";
import React from "react";
import BlogSlider from "../slider/BlogSlider";

const BlogSection = () => {
  return (
    <div className="tf__blog mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>Блог InGenium</h5>
              <h2>Статьи от экспертов астрологов и таралогов</h2>
            </div>
          </div>
        </div>
        <BlogSlider />
      </div>
    </div>
  );
};

export default BlogSection;
