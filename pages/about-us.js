import React from "react";
import CommonLayout from "../components/common-layout/CommonLayout";
import { Container, Row, Col, Media } from "reactstrap";
import aboutus from "../public/assets/images/about/about_us.jpg";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../services/script";
import team1 from "../public/assets/images/team/1.jpg";
import team2 from "../public/assets/images/team/2.jpg";
import team3 from "../public/assets/images/team/3.jpg";
import team4 from "../public/assets/images/team/4.jpg";
import ServiceLayout from "../components/Service/Service.js";

const TeamData = [
  {
    img: "/assets/images/team/1.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/2.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/3.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/4.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/1.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
];

const Team = ({ img, name, post }) => {
  return (
    <div>
      <div>
        <Media src={img} className="img-fluid blur-up lazyload bg-img" alt="" />
      </div>
      <h4>{name}</h4>
      <h6>{post}</h6>
    </div>
  );
};

const TeamDetailData = [
  {
    img: "/assets/images/avtar.jpg",
    name: "Sanu Maya Bhurtel",
    post: "CEO & Founder",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
  {
    img: "/assets/images/profile_2.jpg",
    name: "Dexter Prabin",
    post: "CTO",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
];

const TeamDetail = ({ img, name, post, about }) => {
  return (
    <div>
      <div className="media">
        <div className="text-center">
          <Media src={img} alt="#" />
          <h5>{name}</h5>
          <h6>{post}</h6>
        </div>
        <div className="media-body">
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <CommonLayout parent="home" title="About-us">
        {/* // <!-- about section start --> */}
        {/* <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col lg="12">
                <div className="banner-section">
                  <Media
                    src={aboutus}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Col>
              <Col sm="12">
                <h3>Message from CEO</h3>
                <p>Welcome to the Krayrpol team!</p>
                <p>
                  We're so excited to have you on board. We hope you'll find
                  this company to be a fun and rewarding place to work. Our
                  culture is one of collaboration, innovation, and—above all
                  else—caring for our clients' needs.
                </p>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* <!--Testimonial start--> */}
        <section className="testimonial small-section">
          <Container>
            <Row>
              <Col sm="12">
                <Slider
                  {...Slider2}
                  className="slide-2 testimonial-slider no-arrow"
                >
                  {TeamDetailData.map((data, i) => {
                    return (
                      <TeamDetail
                        key={i}
                        img={data.img}
                        name={data.name}
                        post={data.post}
                        about={data.about}
                      />
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <!--Testimonial ends--> */}

        <section className="section-b-space">
          <Container>
            <div className="pt-5 mt-5">
              <div className="row">
                <div
                  className="col-lg-6 col-12 p-0 m-0"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <Media
                    alt="alt"
                    src="/assets/images/about/1.jpg"
                    className="w-100 "
                  />
                </div>
                <div className="col-lg-6 col-12 px-lg-5 py-lg-3 m-0 d-flex flex-column justify-content-center my-3 my-lg-0 p-0 p-auto">
                  <h2>Our story</h2>
                  <p className="icon-p mt-2 text-justify ">
                    Our story starts with the dream! A dream of enthusiasm,
                    perfection and Quality in Business.<br></br>
                    We are a start-up with a mission to bring IT, Education, and
                    Recruitment under the same roof. We believe that these three
                    sectors can be nourished by the professionalism and quality
                    services we offer. We have a passionate team of individuals
                    who are keen to make our dream come true. Our team members
                    are highly motivated and dedicated towards achieving our
                    goals.<br></br>
                    From day one, we&apos;ve been committed to providing
                    top-of-the-line IT and recruitment services with an eye
                    toward education—and we&apos;re proud of how far we&apos;ve
                    come.
                  </p>
                </div>
              </div>
              <div className="row mt-4 our_approach">
                <div
                  className="our_approach_img order-1 order-md-2 col-lg-6 col-12 px-lg-5 py-lg-3 m-0 d-flex flex-column justify-content-center my-3 my-lg-0 p-0 p-auto"
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                >
                  <Media
                    alt="alt"
                    src={"/assets/images/about/2.png"}
                    className="w-100 "
                  />
                </div>

                <div
                  className="our_approach_content order-md-1 col-lg-6 col-12 p-0 m-0 d-flex flex-column justify-content-center"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Our Approach</h2>
                  <p className="icon-p mt-2 text-justify">
                    Our story starts with the dream! A dream of enthusiasm,
                    perfection and Quality in Business.<br></br>
                    We are a start-up with a mission to bring IT, Education, and
                    Recruitment under the same roof. We believe that these three
                    sectors can be nourished by the professionalism and quality
                    services we offer. We have a passionate team of individuals
                    who are keen to make our dream come true. Our team members
                    are highly motivated and dedicated towards achieving our
                    goals.<br></br>
                    From day one, we&apos;ve been committed to providing
                    top-of-the-line IT and recruitment services with an eye
                    toward education—and we&apos;re proud of how far we&apos;ve
                    come.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* <!--Team start--> */}
        <section id="team" className="team section-b-space ratio_asos">
          <Container>
            <Row>
              <Col sm="12">
                <h2 className="text-center">Our Leadership Team</h2>
                <Slider className="team-4" {...Slider4}>
                  {TeamData.map((data, i) => {
                    return (
                      <Team
                        key={i}
                        img={data.img}
                        name={data.name}
                        post={data.post}
                      />
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <!--Team ends--> */}
      </CommonLayout>
    </>
  );
};

export default AboutUs;
