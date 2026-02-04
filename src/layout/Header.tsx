"use client";
import { useStickyHeader } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = ({ header }: { header?: number }) => {
  useStickyHeader();

  const headers = { 3: Header3 };
  const HeaderComponent = headers[header as keyof typeof headers] || Header3;
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <Fragment>
      <HeaderComponent open={() => setToggleMobileMenu(true)} />
      <MobileMenu
        open={toggleMobileMenu}
        close={() => setToggleMobileMenu(false)}
      />
    </Fragment>
  );
};

export default Header;

const Logo = ({
  logo = "logo-1.png",
  className = "header-logo",
}: {
  logo?: string;
  className?: string;
}) => (
  <Link href="/" className={className}>
    <Image
      src={`/assets/img/logo/${logo}`}
      width={300}
      height={100}
      alt="logo-img"
    />
  </Link>
);

const SocialIcons = ({ label = "Follow Us" }: { label?: string }) => (
  <div className="social-icon d-flex align-items-center">
    <span><i className='fa fa-regular fa-phone' /></span>
    {["+91 76395 82802"].map((icon, index) => (
      <a href="tel:+917639582802" key={index}>
        {icon}
      </a>
    ))}
  </div>
);

const ContactList = ({
  items,
}: {
  items: { icon: string; content: string | React.ReactNode }[];
}) => (
  <ul className="contact-list mb-0">
    {items.map((item, i) => (
      <li key={i}>
        <i className={item.icon} />
        {item.content}
      </li>
    ))}
  </ul>
);


const Header3 = ({ open }: { open: () => void }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>

      <header className="header-section-1">
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper style-2">
              <ContactList
                items={[

                  {
                    icon: "far fa-greeting",
                    content: (
                      <span className="tracking-wider text-white">Welcome to Juan Traders - Best Scrap Buyers in Chennai</span>
                    ),
                  },

                ]}
              />
              <div className="top-right">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-1">
          <div className="main-logo">
            <Logo />
          </div>
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo d-none">
                  <Logo logo="logo-1.png" />
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <Nav />
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <a
                    href=""
                    className="search-trigger search-icon"
                    onClick={() => setToggle(true)}
                  >
                    <i className="fa-light"></i>
                  </a>
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn">
                      Donate Now
                      <i className="ps-2 far fa-heart" />
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle" onClick={open}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};


const Nav = () => (
  <div className="main-menu d-none d-xl-block">
    <nav id="mobile-menu" className="mobile-menu">
      <ul>
        <li className="has-dropdown menu-thumb">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="has-dropdown d-xl-none">
          <Link href="/team" className="border-none">
            Home
            <i className="fas fa-angle-down" />
          </Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li className="has-dropdown">
          <Link href="/service">
            Our Services

          </Link>

        </li>

        <li className="has-dropdown">
          <Link href="/Work">
            Our Works
          </Link>

        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="header-button header-right">
        <a href="tel:+917639582802" className="theme-btn">
          <i className="pe-2 far fa-phone" />
          +91 76395 82802
        </a>
      </div>
    </nav>
  </div>
);


const MobileMenu = ({ open, close }: { open: boolean; close: () => void }) => (
  <Fragment>
    <div className="fix-area">
      <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <Logo logo="logo-1.png" className="logo-imgs" />
              </div>
              <div className="offcanvas__close">
                <button onClick={close}>
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <p className="text d-none d-xl-block">
              Nullam dignissim, ante scelerisque the is euismod fermentum odio
              sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean
              a imperdiet risus.
            </p>
            <MobileNav />
            <div className="offcanvas__contact">
              <h4>Contact Info</h4>
              <ul>
                {[
                  {
                    icon: "fal fa-map-marker-alt",
                    link: "#",
                    text: "Pl No.08, Door No.17, Thiruvalluvar Street, Ullagaram, Chennai - 600091.",
                  },
                  {
                    icon: "far fa-phone",
                    link: "tel:+917639582802",
                    text: "+917639582802",
                  },
                ].map((item, i) => (
                  <li key={i} className="d-flex align-items-center">
                    <div
                      className={`offcanvas__contact-icon ${i > 0 ? "mr-15" : ""
                        }`}
                    >
                      <i className={item.icon} />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target={item.link === "#" ? "_blank" : undefined}
                        href={item.link}
                      >
                        {i === 1 ? (
                          <span className="mailto:info@example.com">
                            {item.text}
                          </span>
                        ) : (
                          item.text
                        )}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="header-button mt-4">
                <Link href="/contact" className="theme-btn text-center">
                  <span>
                    Reach Us
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </Link>
              </div>
              {/* <SocialIcons label="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`offcanvas__overlay ${open ? "overlay-open" : ""}`}
      onClick={close}
    ></div>
  </Fragment>
);

const MobileNav = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const toggle = (menu: string, setter: (v: string) => void, current: string) =>
    setter(current === menu ? "" : menu);
  const show = (menu: string, current: string) => ({
    display: current === menu ? "block" : "none",
  });

  return (
    <div className="mobile-menu fix mb-3 mean-container">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown">
              <Link href="/" className="border-none">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About US</Link>
            </li>
            <li>
              <Link href="/service">
                Services US

              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="/Work">
                Our Works
              </Link>

            </li>

            <li className="mean-last">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
