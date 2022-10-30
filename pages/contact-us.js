import React from "react";
import CommonLayout from "../components/common-layout/CommonLayout";
import { Container, Row, Col, Media, Form, Label, Input } from "reactstrap";

const Data = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "+48 579 218 740",
    desc2: "+48 579 218 740",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "al. Jana Pawła II 11/lok.1013",
    desc2: "00-823 Warszawa, Poland",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "admin@krayrpol.pl",
    desc2: "info@krayrpol.pl",
  },
  {
    img: "fa-fax",
    title: "fax",
    desc1: "admin@krayrpol.pl",
    desc2: "info@krayrpol.pl",
  },
];

const ContactDetail = ({ img, title, desc1, desc2 }) => {
  return (
    <li>
      <div className="contact-icon">
        <i className={`fa ${img}`} aria-hidden="true"></i>
        <h6>{title}</h6>
      </div>
      <div className="media-body">
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
    </li>
  );
};
const Contact = () => {
  return (
    <CommonLayout parent="home" title="Contact">
      <section className="contact-page section-b-space">
        <Container>
          <Row className="section-b-space">
            <Col
              lg="7"
              className="map"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2443.650707812735!2d20.9941609!3d52.2315635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd308a149fcf%3A0x8baa4d51c35eb257!2sKrayrPol%20Sp.%20Z%20O.%20O!5e0!3m2!1sen!2sau!4v1660282380371!5m2!1sen!2sau"
                allowFullScreen
              ></iframe>
            </Col>
            <Col lg="5">
              <div
                className="contact-right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <ul>
                  {Data.map((data, i) => {
                    return (
                      <ContactDetail
                        key={i}
                        img={data.img}
                        title={data.title}
                        desc1={data.desc1}
                        desc2={data.desc2}
                      />
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <div className="title1 title5">
                <h2 className="title-inner1">contact us</h2>
                <hr role="tournament6" />
              </div>
              <Form className="theme-form">
                <Row>
                  <Col md="6">
                    <Label for="name">Full Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your name"
                      required
                    />
                  </Col>
                  <Col md="6">
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      required
                    />
                  </Col>
                  <Col md="6">
                    <Label for="phone">Phone number</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="review"
                      placeholder="Enter your number"
                      required
                    />
                  </Col>
                  <Col md="6">
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </Col>
                  <Col md="6">
                    <Label for="subject">Subject</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Subjects"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <Label for="review">Write Your Message</Label>
                    <textarea
                      className="form-control"
                      placeholder="Write Your Message"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </Col>
                  <Col md="12">
                    <button className="btn btn-solid" type="submit">
                      Send Your Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Contact;
