"use client";
import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";



export const Event3 = () => {
  const events: {
    bgImage: string;
    date: string;
    month: string;
    colorClass?: string;
    category: string;
    title: string;
    time: string;
    author: string;
  }[] = [
      {
        bgImage: "/assets/img/action/scrap-1.jpg",
        date: "05",
        month: "Jan",
        category: "Scrap Collection",
        title: "Scrap Collection Service in North Chennai",
        time: "09:00 AM - 05:00 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-2.jpg",
        date: "12",
        month: "Feb",
        colorClass: "color-2",
        category: "Metal Recycling",
        title: "Industrial Scrap Pickup in Ambattur",
        time: "10:00 AM - 06:00 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-3.jpg",
        date: "20",
        month: "Mar",
        colorClass: "color-3",
        category: "Scrap Collection",
        title: "Doorstep Scrap Collection in Velachery",
        time: "08:30 AM - 04:30 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-4.jpg",
        date: "02",
        month: "Apr",
        colorClass: "color-4",
        category: "Scrap Pickup",
        title: "Commercial Scrap Collection in T Nagar",
        time: "09:30 AM - 05:30 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-5.jpg",
        date: "15",
        month: "May",
        colorClass: "color-5",
        category: "Metal Scrap",
        title: "Heavy Metal Scrap Collection in Guindy",
        time: "10:00 AM - 07:00 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-6.jpg",
        date: "28",
        month: "Jun",
        category: "Recycling Service",
        title: "Eco-Friendly Scrap Recycling Across Chennai",
        time: "09:00 AM - 06:00 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-7.jpg",
        date: "10",
        month: "Jul",
        colorClass: "color-2",
        category: "Scrap Collection",
        title: "Residential Scrap Pickup in Anna Nagar",
        time: "08:00 AM - 02:00 PM",
        author: "Juan Traders",
      },
      {
        bgImage: "/assets/img/action/scrap-8.jpg",
        date: "22",
        month: "Aug",
        colorClass: "color-3",
        category: "Scrap Service",
        title: "All Metal Scrap Collection Anywhere in Chennai",
        time: "09:00 AM - 05:00 PM",
        author: "Juan Traders",
      },
    ];


  return (
    <section className="event-section">
      <Swiper {...sliderProps.event} className="swiper event-slider">
        <div className="swiper-wrapper">
          {events.map((event, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="event-single-items">
                <div
                  className="event-image bg-cover"
                  style={{ backgroundImage: `url(${event.bgImage})` }}
                >
                  <div className="event-content">
                    <div className="sub-content">
                      <div className={`event-date ${event.colorClass || ""}`}>
                        <span>{event.date}</span>
                        {event.month}
                      </div>
                      <div className="event-title">
                        <Link href="events" className="event-cat">
                          {event.category}
                        </Link>
                        <h4>
                          <Link href="/event-details">{event.title}</Link>
                        </h4>
                      </div>
                    </div>
                    <ul className="post-date">
                      <li>
                        <i className="fal fa-clock" /> {event.time}
                      </li>
                      <li>
                        <i className="fal fa-user" /> {event.author}
                      </li>
                    </ul>
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

const EventCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="event-card-main-items">
    <div className="event-card-items-2">
      <div className="event-image">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: "auto", width: "100%" }}
          src={image}
          alt="img"
        />
        <div className="event-time-address">
          <span>
            <i className="fal fa-calendar-alt" />
            24th June 2024
          </span>
          <span>
            <i className="fal fa-map-marker-alt" />
            NY, London
          </span>
        </div>
      </div>
      <div className="event-content-itmes">
        <div className="event-content">
          <div className="event-title-top">
            <h3>
              <Link href="/event-details">{title}</Link>
            </h3>
            <p>{description}</p>
          </div>
          <div className="list-items">
            <ul>
              <li>
                <i className="fas fa-check" /> A place in history
              </li>
              <li>
                <i className="fas fa-check" /> It's about impact, goodness
              </li>
            </ul>
            <ul>
              <li>
                <i className="fas fa-check" /> More goodness in the world
              </li>
              <li>
                <i className="fas fa-check" /> The world we live
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Link href="/event-details" className="theme-btn">
      <i className="fal fa-home me-2" />
      Book A Seat
    </Link>
  </div>
);

export const EventPage = () => {
  const tabs: {
    key: string;
    label: string;
    delay: string;
  }[] = [
      { key: "categories", label: "All Categories", delay: ".3s" },
      { key: "water", label: "Water Day", delay: ".5s" },
      { key: "festival", label: "Festival", delay: ".7s" },
      { key: "proevent", label: "ProEvent", delay: ".7s" },
      { key: "trending", label: "Trending", delay: ".7s" },
    ];

  const eventData: Record<
    string,
    {
      image: string;
      title: string;
    }[]
  > = {
    categories: [
      {
        image: "/assets/img/event/e1.jpg",
        title: "Project Management In The Voluntary Sector",
      },
      {
        image: "/assets/img/event/e2.jpg",
        title: "10 Ways To Help Others That Will Lead You",
      },
      {
        image: "/assets/img/event/e3.jpg",
        title: "Helping The Church To Serve Others",
      },
      {
        image: "/assets/img/event/e4.jpg",
        title: "Rebuilding Collapse Primary School",
      },
      {
        image: "/assets/img/event/e5.jpg",
        title: "Changing Leadership In A Changing World",
      },
      {
        image: "/assets/img/event/e6.jpg",
        title: "Charity Program In The Dhaka",
      },
    ],
    water: [
      {
        image: "/assets/img/event/e1.jpg",
        title: "Project Management In The Voluntary Sector",
      },
      {
        image: "/assets/img/event/e2.jpg",
        title: "10 Ways To Help Others That Will Lead You",
      },
      {
        image: "/assets/img/event/e5.jpg",
        title: "Changing Leadership In A Changing World",
      },
      {
        image: "/assets/img/event/e6.jpg",
        title: "Charity Program In The Dhaka",
      },
    ],
    festival: [
      {
        image: "/assets/img/event/e2.jpg",
        title: "10 Ways To Help Others That Will Lead You",
      },
      {
        image: "/assets/img/event/e3.jpg",
        title: "Helping The Church To Serve Others",
      },
      {
        image: "/assets/img/event/e4.jpg",
        title: "Rebuilding Collapse Primary School",
      },
      {
        image: "/assets/img/event/e5.jpg",
        title: "Changing Leadership In A Changing World",
      },
    ],
    proevent: [
      {
        image: "/assets/img/event/e1.jpg",
        title: "Project Management In The Voluntary Sector",
      },
      {
        image: "/assets/img/event/e2.jpg",
        title: "10 Ways To Help Others That Will Lead You",
      },
      {
        image: "/assets/img/event/e6.jpg",
        title: "Charity Program In The Dhaka",
      },
    ],
    trending: [
      {
        image: "/assets/img/event/e4.jpg",
        title: "Rebuilding Collapse Primary School",
      },
      {
        image: "/assets/img/event/e5.jpg",
        title: "Changing Leadership In A Changing World",
      },
      {
        image: "/assets/img/event/e6.jpg",
        title: "Charity Program In The Dhaka",
      },
    ],
  };
  const description =
    "Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.";

  return (
    <section className="event-section-4 fix section-padding">
      <div className="container">
        <Tab.Container defaultActiveKey="categories">
          <div className="event-tab-header">
            <Nav as={"ul"} className="nav mb-4" role="tablist">
              {tabs.map((tab) => (
                <Nav.Item
                  key={tab.key}
                  as="li"
                  className="nav-item wow fadeInUp"
                  data-wow-delay={tab.delay}
                  role="presentation"
                >
                  <Nav.Link
                    as="a"
                    href={`#${tab.key}`}
                    eventKey={tab.key}
                    data-bs-toggle="tab"
                    className="nav-link"
                    role="tab"
                  >
                    {tab.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content className="tab-content">
            {Object.entries(eventData).map(([key, events]) => (
              <Tab.Pane key={key} eventKey={key} className="tab-pane fade">
                <div className="row">
                  <div className="col-xl-12">
                    {events.map((event, index) => (
                      <EventCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={description}
                      />
                    ))}
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
        <div className="page-nav-wrap mt-5 text-center">
          <ul>
            <li>
              <a className="page-numbers" href="#">
                <i className="fal fa-long-arrow-left" />
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                01
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                02
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                ..
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                10
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                11
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                <i className="fal fa-long-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
