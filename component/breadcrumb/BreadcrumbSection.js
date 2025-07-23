"use client";
import Link from "next/link";
import React from "react";

const BreadcrumbSection = ({ header, title }) => {
  return (
    <section className="tf__breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__breadcrumb_text">
              <h1>{header}</h1>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <a href="#read">{title}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
