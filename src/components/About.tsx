import Image from "next/image";
import Link from "next/link";
import Counter from "./Counter";

export const About1 = () => {
  return (
    <section className="about-section-3 fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-items-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                    <div className="about-image">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/assets/img/about/about-8.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                    <div className="about-experience">
                      <h2>
                        <span className="count">10</span>+
                      </h2>
                      <h6>Years Of Experience</h6>
                      {/* <div className="thumb">
                        <Image
                          width={135}
                          height={55}
                          sizes="100vw"
                          src="/assets/img/client.png"
                          alt="img"
                        />
                      </div>
                      <h6>Globally Clients</h6> */}
                    </div>
                    <div className="about-img">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/about/about-9.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="far fa-gear" />
                    About Us
                  </span>
                  <h2 className="mt-char-animation">
                    Trusted <span>Scrap Buyers</span> in Chennai
                  </h2>

                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Juan Traders is a leading buyer of all types of scrap metals, serving Chennai and Tamil Nadu with complete recycling solutions. As direct scrap metal importers, we provide fair pricing, timely pickup, and responsible recycling services for industrial, commercial, and business needs.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <ul
                    className="checked-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <i className="far fa-wrench" /> Accurate scrap quality inspection
                    </li>
                    <li>
                      <i className="far fa-wrench" />
                      Instant payment after verification
                    </li>
                  </ul>
                  <ul
                    className="checked-list wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <li>
                      <i className="far fa-wrench" />Zero pickup and service charges
                    </li>
                    <li>
                      <i className="far fa-wrench" />
                      Doorstep scrap collection across Chennai & Tamil Nadu
                    </li>
                  </ul>
                </div>
                <Link
                  href="contact"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  Reach Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About2 = ({ containerClass }: { containerClass?: string }) => {
  const aboutImages: {
    img: string;
    delay: string;
  }[] = [
      {
        img: "/assets/img/about/about-6.jpg",
        delay: ".3s",
      },
      {
        img: "/assets/img/about/about-7.jpg",
        delay: ".5s",
      },
      {
        img: "/assets/img/about/about-5.jpg",
        delay: ".7s",
      },
    ];
  return (
    <section className={`about-section-2 fix ${containerClass}`}>
      <div className="container">
        <div className="section-title margin-botton-zero text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-gear" />
            Our Works
          </span>
          <h2 className="mt-char-animation">
            Turning <span className="color-2">Your Scrap</span> <br />
            Into <span>Real Value</span>
          </h2>
        </div>
        <div className="row">
          {aboutImages.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="about-image-items">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src={item.img}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About3 = () => {
  return (
    <section className="about-section section-padding pt-0">
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div
                  className="about-image-1 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/about/jeni-1.jpg"
                    alt="img"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/about/jeni-2.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="counter-box wow fadeInUp" data-wow-delay=".6s">
                  <h2>
                    <span className="count">
                      <Counter end={10} />
                    </span>
                    +
                  </h2>
                  <p>Years Of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="fa-light fa-scroll-old"></i>
                    Welcome to Juan Traders
                  </span>
                  <h2 className="mt-char-animation">
                    Your Trusted Scrap Metal Partner in{" "}
                    <span className="highlight">Chennai</span>
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp text-justify" data-wow-delay=".5s">
                  Juan Traders is a leading buyer of all types of scrap metals, serving Chennai and Tamil Nadu with complete recycling solutions. As direct scrap metal importers, we provide fair pricing, timely pickup, and responsible recycling services for industrial, commercial, and business needs.
                </p>
                <ul className="checked-list wow fadeInUp" data-wow-delay=".3s">
                  <li>Accurate scrap quality inspection</li>
                  <li>Instant payment after verification</li>
                  <li>Zero pickup and service charges</li>
                  <li>
                    Doorstep scrap collection
                    <br />
                    across Chennai & Tamil Nadu
                  </li>
                </ul>

                <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                  <Link href="about" className="theme-btn  transparent-btn-2">
                    View more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

