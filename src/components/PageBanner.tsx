import Link from "next/link";

const PageBanner = ({
  pageName = "About Us",
  pageTitle,
}: {
  pageName: string;
  pageTitle?: string;
}) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/banner/about-banner.jpg")' }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h5 className="wow fadeInUp">
               Our Mission: Reliable Scrap Collection & Responsible Recycling
            </h5>
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {pageTitle ? pageTitle : pageName}
            </h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp bg-white-round" data-wow-delay=".5s">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <i className="fal fa-minus" />
            </li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
