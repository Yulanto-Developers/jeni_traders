import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }: { footer: number }) => {
  switch (footer) {
    case 1:
      return <Footer2 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer2 />;
    case 4:
      return <Footer2 />;
    default:
      return <Footer2 />;
  }
};

export default Footer;
const Footer2 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <FooterLogoContainer />
            <div
              className="col-xl-4 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".3s"
            >
              <LinksCol heading="Menu" links={menu} />
            </div>
         
            <div
              className="col-xl-4 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="tel:+917639582802">+91 76395 82802</a>
                        </h6>
                      </div>
                    </div>
                   
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h6>
                          Pl No.08,
                          Door No.17,<br />
                          Thiruvalluvar Street,
                          Ullagaram, Chennai - 600091,
                          Tamil Nadu.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-3">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-lg-between justify-content-center">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright 2026 <Link href="/">Jeni Traders</Link>. All Rights
              Reserved.
            </p>
            <div className="card-image wow fadeInRight" data-wow-delay=".5s">
              <p className="wow fadeInLeft" data-wow-delay=".3s">
                Designed by  <a href="https://yulanto.com" target="blank">Yulanto web creations</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLogoContainer = () => (
  <div
    className="col-xl-4 col-lg-4 col-md-6  wow fadeInUp"
    data-wow-delay=".2s"
  >
    <div className="single-footer-widget">
      <div className="widget-head">
        <Link href="/">
          <Image
            src="/assets/img/logo/logo-2.png"
            width={300}
            height={100}
            alt="logo-img"
          />
        </Link>
      </div>
      <div className="footer-content">
        <p>
          At <b> Jeni Traders, </b>we collect all types of metal scrap and provide reliable pickup, transparent pricing, and eco-friendly recycling services you can trust.
        </p>
       
      </div>
    </div>
  </div>
);

type LinkItem = { link: string; text: string };
type LinkItem2 = { link: string; text: string };
const LinksCol = ({
  heading,
  links = [],
  links2 = [],
  layout = 1,
}: {
  heading?: string;
  layout?: number;
  links?: LinkItem[];
  links2?: LinkItem2[];
}) => (
  <div className="single-footer-widget">
    {heading && (
      <div className="widget-head">
        <h4 className={layout == 1 ? "text-white" : ""}>{heading}</h4>
      </div>
    )}
    {layout == 3 ? (
      <Fragment>
        <div className="special-menu">
          <ul>
            {links.map((e, i) => (
              <li key={i}>
                <a href={e.link}>{e.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="special-menu">
          <ul>
            {links2.map((e, i) => (
              <li key={i}>
                <a href={e.link}>{e.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    ) : (
      <ul className="list-area">
        {links.map((e, i) => (
          <li key={i}>
            <a href={e.link}>
              {layout == 1 && <i className="far fa-chevron-double-right" />}
              {e.text}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const menu = [
  { link: "/", text: "Home" },
  { link: "about", text: "About Us" },
  { link: "causes", text: "Our Services" },
  { link: "events", text: "Our Works" },
  { link: "team", text: "Contact Us" },
  // { link: "news", text: "Latest News" },
];
const legalLink = [
  { link: "contact", text: "Term of use" },
  { link: "contact", text: "Privacy Policy" },
  { link: "contact", text: "Report Violation" },
  { link: "contact", text: "Cookies" },
  { link: "contact", text: "Contact Us" },
];
const aboutLink = [
  { link: "index", text: "Home" },
  { link: "about", text: "About" },
  { link: "causes", text: "Our Causes" },
  { link: "events", text: "Our Events" },
  { link: "event-details", text: "Contact" },
  { link: "team", text: "Team" },
  { link: "faq", text: "Faq" },
];
const specialLink = [
  { link: "causes", text: "Causes List" },
  { link: "donation-details", text: "Donation" },
  { link: "team", text: "Careers" },
  { link: "contact", text: "Get A Quote" },
  { link: "faq", text: "Terms & Conditions" },
];
const popularlLink = [
  { link: "causes-details", text: "Water Purify" },
  { link: "causes-details", text: "Food Collect" },
  { link: "causes-details", text: "Health Fund" },
  { link: "causes-details", text: "Free Education" },
  { link: "causes-details", text: "Poor Health" },
  { link: "causes-details", text: "Live Donation" },
  { link: "causes-details", text: "Stream Donation" },
];
