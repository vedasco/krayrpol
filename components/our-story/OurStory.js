import React from "react";
import Slider from "react-slick";
import { Col, Container, Row, Media } from "reactstrap";
import { Slider3 } from "../../services/script";
import Link from "next/link";
import img from "../../public/assets/images/profile_2.jpg";
import Image from "next/image";

const data = {
  blog: [
    {
      item: "public/assets/images/avtar.jpg",
      title: "John Doe",
      desc: "“I have witnessed and admired the work for years.I have witnessed and admired the work for yearsI have witnessed and admired the work for years.I highly recommend this work for anyoone seeking to increase.”",
      date: "",
    },
    {
      item: "public/assets/images/avtar.jpg",
      title: "Jack Doe",
      desc: "“I have witnessed and admired the work for years.I highly recommend this work for anyoone seeking to increase.”",
      date: "",
    },
    {
      item: "/assets/images/avtar.jpg",
      title: "Jennifer Doe",
      desc: "“I have witnessed and admired the work for years.I highly recommend this work for anyoone seeking to increase.”",
      date: "",
    },
    {
      item: "/assets/images/avtar.jpg",
      title: "Josherson Doe",
      desc: "“I have witnessed and admired the work for years.I highly recommend this work for anyoone seeking to increase.”",
      date: "",
    },
    {
      item: "/assets/images/avtar.jpg",
      title: "Adam Doe",
      desc: "“I have witnessed and admired the work for years.I highly recommend this work for anyoone seeking to increase.”",
      date: "",
    },
  ],
};

const OurStory = () => {
  return (
    <section className=" section-b-space ratio3_2">
      <Container>
        <div className="title1 title5">
          <h2 className="title-inner1">our testimonials</h2>
          <hr role="tournament6" />
          <Row>
            <Col>
              <Slider {...Slider3} className="slide-3 no-arrow ">
                {data &&
                  data.blog.map((item, index) => (
                    <Col md="12" key={index}>
                      <div className="classic-effect">
                        <Image src={img} alt="" />
                      </div>
                      <div className="testimonial-details">
                        <h4>{item.title} </h4>
                        <hr className="style" />
                        <p>{item.desc}</p>
                      </div>
                    </Col>
                  ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
