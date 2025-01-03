"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
// import Masonry from "react-masonry-css";
import { galleryData } from "@/utils/data";
import Lightbox from "react-image-lightbox";
import Image from "next/image";
import Slider from "react-slick";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //   const breakpointColumnsObj = {
  //     default: 4, // Number of columns on large screens
  //     1100: 3, // Number of columns on medium screens
  //     700: 2, // Number of columns on small screens
  //   };

  //   const SampleNextArrow = (props) => {
  //     const { onClick } = props;
  //     return (
  //       <div className={styles.right} onClick={onClick}>
  //         <ArrowRight />
  //       </div>
  //     );
  //   };

  //   const SamplePrevArrow = (props) => {
  //     const { onClick } = props;
  //     return (
  //       <div className={styles.left} onClick={onClick}>
  //         <ArrowLeft />
  //       </div>
  //     );
  //   };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  return (
    <div className={styles.container}>
      {/* <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryGridColumn}> */}
      <Slider {...settings}>
        {galleryData?.slice(0, 20)?.map((item, index) => {
          return (
            <div className={styles.masonryItem} key={index} data-src={item}>
              <Image src={item} width={300} height={400} alt={``} onClick={() => openLightbox(index)} />
            </div>
          );
        })}
      </Slider>
      {/* </Masonry> */}
      {/* </LightGallery> */}
      {isOpen && (
        <Lightbox
          mainSrc={galleryData[currentImageIndex]}
          nextSrc={galleryData[(currentImageIndex + 1) % galleryData.length]}
          prevSrc={galleryData[(currentImageIndex + galleryData.length - 1) % galleryData.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + galleryData.length - 1) % galleryData.length)}
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % galleryData.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
