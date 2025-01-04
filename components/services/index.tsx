"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import ArrowLeft from "@/svgs/arrowLeft";
import ArrowRight from "@/svgs/arrowRight";
import Slider from "react-slick";
import { servicesData } from "@/utils/data";

const Services = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };
  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container} id="services">
      <div className={styles.header}>
        <h2>Unsere Dienstleistungen</h2>
        <div className={styles.arrow}>
          <div className={styles.left} onClick={previous}>
            <ArrowLeft />
          </div>
          <div className={styles.right} onClick={next}>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Slider {...settings} ref={sliderRef}>
          {servicesData?.map((item, index) => {
            return (
              <div className={styles.singleService} key={index}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
