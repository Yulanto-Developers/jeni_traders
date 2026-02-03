"use client";

import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import { useState } from "react";

const CausesPage = () => {

  const [Form, setForm] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: ''
  });

  function handleChanges(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   // console.log(Form);
  //   const api = await fetch('http://localhost/Ezhil-Project/jeni-traders/backend/Contact.php',
  //     // const api = await fetch('https://demo3.yulanto.in/jeni-traders/backend/Contact.php',
  //     {
  //       method: 'post',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(Form)
  //     }
  //   );

  //   const response = await api.json();
  //   console.log(response);
  // }



  return (
    <DanboxLayout>
      <PageBanner pageName="Contact Us" />
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
          
            <div
              className="col-lg-6 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-contact-card card2">
                <div className="top-part">
                  <div className="icon">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="title">
                    <h4>Phone Number</h4>
                    <span>call us asap anytime</span>
                  </div>
                </div>
                <div className="bottom-part">
                  <div className="info">
                    <p>+91 76395 82802</p>
                    
                  </div>
                  <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-contact-card card3">
                <div className="top-part">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="title">
                    <h4>Office Address</h4>
                    <span>Reach Us asap anytime</span>
                  </div>
                </div>
                <div className="bottom-part">
                  <div className="info">
                    <p>Pl No.08,

                      Door No.17, <br />

                      Thiruvalluvar Street, <br />

                      Ullagaram,600091.</p>
                  </div>
                  <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="office-google-map-wrapper wow fadeInUp">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.916924078713!2d80.19160837507654!3d12.977165187338722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzM3LjgiTiA4MMKwMTEnMzkuMSJF!5e0!3m2!1sen!2sin!4v1770098283882!5m2!1sen!2sin" style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"></iframe>
          </div>
        </div>
      </section>
  
    </DanboxLayout>
  );
};

export default CausesPage;
