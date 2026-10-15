"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/utility/sliderProps";

export const HeroSlider3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "/assets/img/hero/banner-1.jpg",
      mission: "Paper • Plastic • Metal • E-Waste",
      h1: "Sell Your Scrap. Save the Environment.",
      links: { page: "/about", contact: "/contact" },
    },
    {
      img: "/assets/img/hero/banner-2.jpg",
      mission: "Scrap Collection • Recycling • Sustainability",
      h1: "Turning Scrap Into Value, Responsibly",
      links: { page: "/about", contact: "/contact" },
    },
    {
      img: "/assets/img/hero/banner-3.jpg",
      mission: "Fast Pickup • Best Prices • Trusted Service",
      h1: "Your Scrap, Our Responsibility",
      links: { page: "/about", contact: "/contact" },
    },
  ];

  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button
          type="button"
          className="array-prev"
          aria-label="Previous slide"
        >
          <i className="fas fa-long-arrow-left" />
        </button>

        <button
          type="button"
          className="array-next"
          aria-label="Next slide"
        >
          <i className="fas fa-long-arrow-right" />
        </button>
      </div>

      <Swiper
        {...sliderProps.heroSlider2}
        className="swiper hero-slider"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.img} className="swiper-slide">
            <div className="hero-image bg-cover">
              <Image
                src={slide.img}
                alt={
                  index === 0
                    ? "Scrap recycling and collection services"
                    : ""
                }
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                quality={75}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="hero-content">
                    <h5
                      data-animation="wow fadeInUp"
                      data-delay="0.2s"
                    >
                      <i className="far fa-heart" /> Our Mission:{" "}
                      {slide.mission}
                    </h5>

                    <h1
                      data-animation="wow fadeInUp"
                      data-delay="0.4s"
                    >
                      {slide.h1}
                    </h1>

                    <div
                      className="hero-button"
                      data-animation="wow fadeInUp"
                      data-delay="0.6s"
                    >
                      <Link href={slide.links.page} className="theme-btn">
                        Explore now
                      </Link>

                      <Link
                        href={slide.links.contact}
                        className="theme-btn transparent-btn"
                      >
                        Reach Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};