export const Contact1 = () => {
  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        <div className="contact-wrapper-4">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" />
            <div className="col-xl-6 col-lg-6">
              <div className="contact-section">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="far fa-heart" />
                    get a quote
                  </span>
                  <h2 className="mt-char-animation">Contact Us</h2>
                </div>
                <div className="contact-right mt-4 mt-md-0">
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".2"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".4"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".6"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".7"
                      >
                        <div className="form-clt">
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Subject</span>
                            <ul className="list">
                              <li data-value={1} className="option selected">
                                Volunteer
                              </li>
                              <li data-value={1} className="option">
                                Donations
                              </li>
                              <li data-value={1} className="option">
                                Foods Support
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".8"
                      >
                        <div className="form-clt-big form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write a Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".9"
                      >
                        <button type="submit" className="theme-btn">
                          Get A Quote <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-item">
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.916900424427!2d80.1941944!3d12.9771667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzM3LjgiTiA4MMKwMTEnMzkuMSJF!5e0!3m2!1sen!2sin!4v1770125845365!5m2!1sen!2sin" style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};
