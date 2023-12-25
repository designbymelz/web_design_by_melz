// pages/index.tsx (or any other page/component)
import React, { useEffect, useState } from "react";
import MasonryGrid from "@components/MasonryLayout";
import Head from "next/head";
import Image from "next/image";

import style from "@styles/Gallery.module.css";
import Content from "./content";
import GalleryButtons from "@components/GalleryButtons";

import AOS from "aos";
import "aos/dist/aos.css";

const Gallery: React.FC = () => {
  //button value handler
  const [selectedButton, setSelectedButton] = useState<number>(1);

  //container content
  const [content, setContent] = useState(Content);

  const handleButtonClick = (id: number) => {
    setSelectedButton(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (selectedButton === 1) {
      setContent(Content);
    } else if (selectedButton === 2) {
      setContent(Content.filter((item) => item.type == 2));
    } else if (selectedButton === 3) {
      setContent(Content.filter((item) => item.type == 3));
    } else if (selectedButton === 4) {
      setContent(Content.filter((item) => item.type == 4));
    } else if (selectedButton === 5) {
      setContent(Content.filter((item) => item.type == 5));
    } else if (selectedButton === 6) {
      setContent(Content.filter((item) => item.type == 6));
    }
  }, [selectedButton]);

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings go here, for example, duration, offset, easing, etc.
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Head>
        <title>DesignbyMelz | Gallery</title>
      </Head>
      <div>
        {isVisible && (
          <div
            className="rounded-full text-8xl text-center select-none mr-2 mb-2 text-white bg-darkPink top-40 right-10 w-20 h-20 fixed"
            onClick={scrollToTop}
          >
            ^
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mt-20">
        <div className="bg-grayishRed w-16 h-px mx-4"></div>
        <h1 className="font-lanche text-2xl md:text-4xl text-grayishRed">
          Gallery.
        </h1>
        <div className="bg-grayishRed w-16 h-px mx-4"></div>
      </div>
      <div className="container mx-auto mt-8 text-white">
        <div className="mx-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <GalleryButtons
            Id={1}
            ButtonName="ALL"
            imgSrc="/images/homePict/slider4.png"
            onClick={handleButtonClick}
            selected={selectedButton === 1}
          />
          <GalleryButtons
            Id={2}
            ButtonName="LOGO DESIGN"
            imgSrc="/images/homePict/slider5.png"
            onClick={handleButtonClick}
            selected={selectedButton === 2}
          />
          <GalleryButtons
            Id={3}
            ButtonName="MASCOT DESIGN"
            imgSrc="/images/homePict/slider2.png"
            onClick={handleButtonClick}
            selected={selectedButton === 3}
          />
          <GalleryButtons
            Id={4}
            ButtonName="PACKAGING DESIGN"
            imgSrc="/images/homePict/slider1.png"
            onClick={handleButtonClick}
            selected={selectedButton === 4}
          />
          <div className="lg:col-start-2 col-span-1">
            <GalleryButtons
              Id={5}
              ButtonName="PHOTOGRAPHY"
              imgSrc="/images/homePict/slider4.png"
              onClick={handleButtonClick}
              selected={selectedButton === 5}
            />
          </div>
          <GalleryButtons
            Id={6}
            ButtonName="OTHER"
            imgSrc="/images/homePict/slider1.png"
            onClick={handleButtonClick}
            selected={selectedButton === 6}
          />
        </div>

        <MasonryGrid>
          {content.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="overflow-hidden flex justify-center items-start"
            >
              <div key={index} className={style.card}>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={0}
                  height={0}
                  layout="responsive"
                  className={style.image}
                />
                {/* untuk caption gambar */}
                <div key={index} className={style.desc}>
                  <p key={index} className={style.p}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </MasonryGrid>
      </div>
    </>
  );
};

export default Gallery;
