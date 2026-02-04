"use client";

import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import { useState } from "react";
import Swal from "sweetalert2";


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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const api = await fetch(
        // "https://demo3.yulanto.in/jeni-traders/backend/contact.php",
        "/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Form),
        }
      );

      const response = await api.json();
      console.log(response);
      if (response?.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will contact you soon 😊",
          confirmButtonColor: "#28a745",
        });


        setForm({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: response?.message || "Something went wrong 😕",
          confirmButtonColor: "#dc3545",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to send message. Please try again later!",
        confirmButtonColor: "#dc3545",
      });
    }
  }




  return (
    <DanboxLayout>
      <PageBanner pageName="Contact Us" />
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
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
                  {/* <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-contact-card card1">
                <div className="top-part">
                  <div className="icon">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="title">
                    <h4>Email Address</h4>
                    <span>Sent mail asap anytime</span>
                  </div>
                </div>
                <div className="bottom-part">
                  <div className="info">
                    <p>juantraders24@gmail.com</p>

                  </div>
                  {/* <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
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

                      Ullagaram, Chennai - 600091.</p>
                  </div>
                  {/* <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="office-google-map-wrapper wow fadeInUp">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.917034907147!2d80.1950602!3d12.9771581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525da4cc018ee1%3A0x33435101d4d76e23!2sJuan%20Traders!5e0!3m2!1sen!2sin!4v1770184223945!5m2!1sen!2sin" style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <section className="contact-section-2 fix section-padding pt-0">
        <div className="container">
          <div className="main-contact-form-items">
            <div className="section-title text-center">
              <span className="sub-title color-2 wow fadeInUp">
                <i className="fal fa-pen" />
                Write Here
              </span>
              <h2 className="mt-char-animation">Get In Touch</h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-4 mt-md-0"
            >
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Your First Name*"
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Your Last Name*"
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone*"
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="email"
                      placeholder="email*"
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write Message*"
                      onChange={handleChanges}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="theme-btn center d-block">
                    Send Your Meassage
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </DanboxLayout>
  );
};

export default CausesPage;
