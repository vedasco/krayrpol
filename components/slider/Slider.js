import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterSlider.js";
import Particles from "react-tsparticles";

const Data = [
  {
    img: "home1",
    title: "",
    desc: "Academy",
    link: "/page/contact-us ",
  },
  {
    img: "home2",
    title: " ",
    desc: "Study Abroad",
    link: "/page/contact-us ",
  },
  {
    img: "home3",
    title: "",
    desc: "Recruitment",
    link: "/page/contact-us ",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
