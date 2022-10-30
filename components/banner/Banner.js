import React from "react";
import { Col, Container, Row } from "reactstrap";
import backgroundBanner from "../../public/assets/images/shapes/banner-bg.png";

const Banner = () => {
  return (
    <section className="section-banner ">
      <Container>
        <Row>
          <Col>
            <h3>{`"Opportunities don't happen, you create them"`}</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
