import React from "react";
import CommonLayout from "../components/common-layout/CommonLayout";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const It = () => {
  return (
    <>
      <CommonLayout parent="home" title="Information Technology">
        <section className="small-section">
          <Container>
            <div className="my-5">
              <Row className="my-4 align-items-center">
                <Col md={6} data-aos="fade-right" data-aos-duration="1000">
                  <h1 className="text-left recruitment_left-title">
                    it for{" "}
                    <b className="recruitment_left-title_highlight">Business</b>
                    <br />
                    Development
                  </h1>
                  <p className="recruitment_left-text my-2">
                    You’re looking for professional IT development that provides
                    full-scale IT solutions and trainings, right? We know the
                    right way to do it. Our team of experts will help you get
                    your business off the ground and make it grow with a strong
                    focus on security. We offer web development, business
                    intelligence, It Support and security services at an
                    affordable price. Our experts have extensive knowledge in
                    the field and will be able to provide you with all the help
                    you need!
                  </p>
                  <button
                    className="btn btn-solid"
                    style={{ backgroundSize: "780px" }}
                  >
                    contact us
                  </button>
                </Col>
                <Col
                  md={6}
                  className="mt-3 mt-md-0"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/assets/images/recruitment/recruitment_hero.png"
                    width={500}
                    height={500}
                    alt="recruitment"
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section>
          <Container className="mb-5 mt-5">
            <div className="title1 title5">
              <h2 className="title-inner1">who is this for?</h2>
              <hr role="tournament6" />
              <div className="container mt-5">
                <div className="row container ">
                  <div className="col-12 col-md-6 col-lg-4  m-0 p-0 mb-5 mb-lg-0">
                    <div className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="it_svg-icon bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .450-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <div className="d-flex flex-column  mt-3 mx-2 text-center ">
                        For those who want to look for a quality education in
                        the field of IT and want to quickly enter the freelance
                        market or find a job in the best companies in Europe.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4  m-0 p-0 mb-5 mb-lg-0">
                    <div className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className=" it_svg-icon bi bi-file-earmark-text-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                      </svg>
                      <div className="d-flex flex-column  mt-3 mx-2 text-center">
                        For those who are just recently in IT and would like to
                        try their hand at programming from scratch and find
                        their calling.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4  m-0 p-0 mb-5 mb-lg-0">
                    <div className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="it_svg-icon bi bi-mortarboard-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                      </svg>
                      {/* <img className="it-icon  rounded-circle" src={Courses} /> */}
                      <div className="d-flex flex-column  mt-3 mx-2 text-center">
                        Anyone who is passionate about IT and its global market
                        for building a successful career.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container className="mb-5 mt-5">
            <div className="title1 title5">
              <h2 className="title-inner1">About us</h2>
              <hr role="tournament6" />
              <p className="text-center">
                We are a young, dynamic and passionate IT Development Company
                that has successfully been providing high-quality services to
                Indians for almost 3 years. We specialize in creating custom
                software and web applications. Our experts possess an extensive
                knowledge in various technologies and they are keen to help you
                find a better solution for your business needs. We aim to create
                a wonderful platform for the IT enthusiasts to learn and prosper
                their skills and abilities yielding highest potentiality in
                competitive global market. We provide individuals with the
                updated and market-oriented training courses, real-time
                projects, where one can explore the future career as IT expert.
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container className="mb-5 mt-5">
            <div className="title1 title5">
              <h2 className="title-inner1">our services</h2>
              <hr role="tournament6" />
              <div className="mt-5 row p_service_info">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mb-5  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      fill="currentColor"
                      className="it_svg-icon bi bi-laptop"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                    </svg>
                    <h4 className="mt-4">Software Applications</h4>
                    <p className="f_400">
                      Innovative technological solutions for your business with
                      on demand software applications{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className=" mb-5  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      fill="currentColor"
                      className=" it_svg-icon bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <h4 className="mt-4 text-decoration-underline">
                      Website &amp; Mobile Apps
                    </h4>
                    <p className="f_400">
                      Dynamic, responsive and cross-platform website and mobile
                      apps according to your needs built with top-notch
                      technology
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mb-5  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      fill="currentColor"
                      className=" it_svg-icon bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                      />
                    </svg>
                    <h4 className="mt-4">Digital Marketing</h4>
                    <p className="f_400">
                      We develop and run your social media platform to launch
                      your business to the better future.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mb-5  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      fill="currentColor"
                      className="it_svg-icon bi bi-vector-pen"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                      />
                    </svg>
                    <h4 className="mt-4">Graphics design</h4>
                    <p className="f_400">
                      We employ an innovative, research-first design process to
                      design the best UI/UX for your product.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mb-5   pr_20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      fill="currentColor"
                      className=" it_svg-icon bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <h4 className="mt-4">Search Engine Optimization</h4>
                    <p className="f_400">
                      We plan targeted SEO Campaigns that drive maximum traffic,
                      leads and sales.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mb-5  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      fill="currentColor"
                      className="it_svg-icon bi bi-lightning-charge"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                    </svg>
                    <h4 className="mt-4">Web Hosting</h4>
                    <p className="f_400">
                      The best place to host your small business website,
                      e-commerce web site, corporate web site or personal web
                      site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container className="mb-5">
            <div className="row payment_options">
              <div className="col-12 col-md-6 mt-3">
                <h3 className="payment text-justify"> Payment Options</h3>
                <p className="payment-p text-justify">
                  Our aim to give education for everyone, choose the most
                  suitable option for you.
                </p>
              </div>
              <div className="col-12 mt-3 mt-md-0 col-md-6 text-white row justify-content-between">
                <div className="col-12 mb-3  ">
                  <h5 className="text-dark pointer payment_options-text">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather border p-2 payment_options-icon rounded-circle feather-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="mx-3 payment_options-span">
                      Pay Upfront 25 % Discount
                    </span>
                  </h5>
                </div>
                <div className="col-12 mb-3  ">
                  <h5 className="text-dark pointer payment_options-text">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather border p-2 payment_options-icon rounded-circle feather-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="mx-3 payment_options-span">
                      Pay Weekly
                    </span>
                  </h5>
                </div>
                <div className="col-12 mb-3  ">
                  <h5 className="text-dark pointer payment_options-text">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather border p-2 payment_options-icon rounded-circle feather-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="mx-3 payment_options-span">
                      Pay after finding a job
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default It;
