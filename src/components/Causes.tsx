"use client";
import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";


export const Causes3 = () => {
  const causes: {
    delay: string;
    bgImage: string;
    category: string;
    title: string;
    description: string;
    btnText: string;
  }[] = [
      {
        delay: ".3s",
        bgImage: "/assets/img/service-img/Brass.jpg",
        category: "Scrap",
        title: "Brass Scrap",
        description: "High-quality brass scrap accepted at best market price.",
        btnText: "Read more",
      },
      {
        delay: ".5s",
        bgImage: "/assets/img/service-img/Cast-Iron.jpg",
        category: "Scrap",
        title: "Cast Iron Scrap",
        description: "Bulk and industrial cast iron scrap collection available.",
        btnText: "Read more",
      },
      {
        delay: ".7s",
        bgImage: "/assets/img/service-img/Construction-Scrap.jpg",
        category: "Scrap",
        title: "Construction Scrap",
        description:
          "We collect and recycle construction and demolition scrap.",
        btnText: "Read more",
      },
      {
        delay: ".7s",
        bgImage: "/assets/img/service-img/Copper-Cables-Wires.jpg",
        category: "Scrap",
        title: "Copper Cables & Wires",
        description: "All grades of copper cables and wires purchased.",
        btnText: "Read more",
      },
      {
        delay: ".7s",
        bgImage: "/assets/img/service-img/Heavy-Metal-Steel.jpg",
        category: "Scrap",
        title: "Heavy Metal & Steel",
        description: "Industrial steel and heavy metal scrap buying service.",
        btnText: "Read more",
      },
      {
        delay: ".7s",
        bgImage: "/assets/img/service-img/Iron.jpg",
        category: "Scrap",
        title: "Iron Scrap",
        description: "Iron scrap collection with fast pickup and payment.",
        btnText: "Read more",
      },
    ];

  return (
    <section className="causes-section fix section-padding fix section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">
            <i className="far fa-gear" />
            Our Services
          </span>
          <h2 className="mt-char-animation">
            WE ACCEPT A <br />
            <span>VARIETY</span> OF METALS
          </h2>
        </div>

        <div className="row">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={cause.delay}
            >
              <div className="causes-box-items">
                {/* Image */}
                <div
                  className="causes-image bg-cover"
                  style={{ backgroundImage: `url(${cause.bgImage})` }}
                />

                {/* Content */}
                <div className="cause-content">
                  <div className="cause-meta">
                    <span className="cause-cat">{cause.category}</span>
                  </div>

                  <h4 className="mt-2">{cause.title}</h4>

                  <p className="mt-2">{cause.description}</p>

                  <div className="mt-4">
                    <Link href="/service" className="theme-btn custome-bth">
                      {cause.btnText}
                      <i className="far fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
                {/* End Content */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

