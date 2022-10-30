import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import iconAcademy from "../../public/assets/images/services/academy.svg";
import iconCareer from "../../public/assets/images/services/career.svg";
import iconStudy from "../../public/assets/images/services/study.svg";
import Link from "next/link";
import ServiceContent from "./ServiceContent";

const Data = [
  {
    link: "/it",
    title: "IT",
    icon: iconAcademy,
    desc: "We provide individuals with the updated and market-oriented training courses, real-time projects, where one can explore the future career as IT expert.",
  },
  {
    link: "/education",
    title: "Education",
    icon: iconStudy,
    desc: "We assist you in finding the best university that you can afford and help you in the entire process of enrollment.",
  },
  {
    link: "/recruitment",
    title: "Recruitment",
    icon: iconCareer,
    desc: "We shorten the distance between you and your potential Employees!",
  },
];

const Service = () => {
  return (
    <section className="small-section">
      <Container>
        <div className="title1 title5">
          <h2 className="title-inner1">our services</h2>
          <hr role="tournament6" />
          <Row>
            {Data.map((data, index) => {
              return (
                <Col lg={4} sm={12} className="text-center" key={index}>
                  <ServiceContent
                    link={data.link}
                    title={data.title}
                    icon={data.icon}
                    desc={data.desc}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Service;
