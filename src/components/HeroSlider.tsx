"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";


export const HeroSlider3 = () => {
  const slides: {
    img: string;
    mission: string;
    h1: string;
    video?: string;
    delays: {
      h5: string;
      h1: string;
      buttons: string;
      video?: string;
    };
    links: {
      page: string;
      contact: string;
    };
  }[] = [

      {
        img: "/assets/img/hero/banner-1.jpg",
        mission: "Paper • Plastic • Metal • E-Waste",
        h1: "Sell Your Scrap. Save the Environment.",
        delays: { h5: "1.3s", h1: "1.5s", buttons: "1.7s" },
        links: { page: "about", contact: "contact" },
      },
      {
        img: "/assets/img/hero/banner-2.jpg",
        mission: "Scrap Collection • Recycling • Sustainability",
        h1: "Turning Scrap Into Value, Responsibly",
        delays: { h5: "1.3s", h1: "1.5s", buttons: "1.7s" },
        links: { page: "about", contact: "contact" },
      },
      {
        img: "/assets/img/hero/banner-3.jpg",
        mission: "Fast Pickup • Best Prices • Trusted Service",
        h1: "Your Scrap, Our Responsibility",
        delays: { h5: "1.3s", h1: "1.5s", buttons: "1.7s" },
        links: { page: "about", contact: "contact" },
      },
    ];

  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev">
          <i className="fas fa-long-arrow-left" />
        </button>
        <button className="array-next">
          <i className="fas fa-long-arrow-right" />
        </button>
      </div>
      <Swiper {...sliderProps.heroSlider2} className="swiper hero-slider">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="hero-image bg-cover"
                style={{ backgroundImage: `url("${slide.img}")` }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="hero-content">
                      <h5
                        data-animation="wow fadeInUp"
                        data-delay={slide.delays.h5}
                      >
                        <i className="far fa-heart" /> Our Mission:{" "}
                        {slide.mission}
                      </h5>
                      <h1
                        data-animation="wow fadeInUp"
                        data-delay={slide.delays.h1}
                      >
                        {slide.h1}
                      </h1>
                      <div className="hero-button">
                        <Link
                          href={slide.links.page}
                          data-animation="wow fadeInUp"
                          data-delay={slide.delays.buttons}
                          className="theme-btn"
                        >
                          Explore now
                        </Link>
                        <Link
                          href={slide.links.contact}
                          data-animation="wow fadeInUp"
                          data-delay={slide.delays.buttons}
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
        </div>
      </Swiper>
    </section>
  );
};

