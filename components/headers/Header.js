import React, { useState, useEffect } from "react";
import { Media, Container, Row, Col, Button } from "reactstrap";
import TopBar from "./common/TopBar";
import BrandLogo from "./common/BrandLogo";
import NavBar from "./common/NavBar";

const Header = () => {
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  return (
    <div>
      <header id="sticky" className="sticky">
        <div className="mobile-fix-option"></div>
        <TopBar />
        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="brand-logo">
                    <BrandLogo />
                  </div>
                </div>
                <div className="main-nav-center">
                  <NavBar />
                </div>

                {/* <div>
                  <div className="icon-nav">
                    <button className="btn btn-solid">Login</button>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;
