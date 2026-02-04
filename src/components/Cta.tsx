import Link from "next/link";


export const Cta3 = () => {
  return (
    <section className="cta-subscribe-section fix theme-bg section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <div className="section-title mb-0">
              <span className="sub-title color-3 wow fadeInUp">
                <i className="far fa-gear" />
                Our Works
              </span>
              <h2 className="mt-char-animation text-white">
                Turning Your Scrap Into Value
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cta-subscribe-form">
              <div className="text-center section-title mb-0">
                <span className="sub-title color-2 wow fadeInUp">
                  <i className="far fa-gear" />
                  Why Choose Us
                </span>
              </div>
              <p className="text-white text-center">Juan Traders is a trusted scrap collection and recycling service committed to fair pricing, timely pickup, and responsible handling of materials. We serve homes, businesses, and industries with transparent weighing, quick payment, and eco-friendly recycling practices you can rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


