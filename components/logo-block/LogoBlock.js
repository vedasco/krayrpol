import React from "react";
import { Col, Container, Row, Media } from "reactstrap";
import Slider from "react-slick";
import { Slider6 } from "../../services/script";

const LogoBlock = () => {
  const imgData = [
    "/assets/images/logos/1.png",
    "/assets/images/logos/2.png",
    "/assets/images/logos/3.png",
    "/assets/images/logos/4.png",
    "/assets/images/logos/5.png",
    "/assets/images/logos/3.png",
  ];
  return (
    <section className="section-b-space logo-block">
      <Container>
        <Row>
          <Col md="12">
            <Slider {...Slider6} className="slide-6 no-arrow">
              {imgData.map((imgSrc, i) => {
                return (
                  <div key={i}>
                    <div className="logo-block">
                      <a href={null}>
                        <Media src={imgSrc} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoBlock;
