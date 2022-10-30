import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { Button } from "react-bootstrap";

const TopBar = ({ topClass, fluid }) => {
  return (
    <div className="top-header">
      <Container>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  info@krayrpol.pl
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-right">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link href="http://facebook.com">
                  <a>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </Link>
              </li>
              <li className="mobile-wishlist">
                <Link href="http://instagram.com">
                  <a>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </Link>
              </li>
              <li className="mobile-wishlist">
                <Link href="http://twitter.com">
                  <a>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
