import React from "react";
import CommonLayout from "../components/common-layout/CommonLayout";
import { Container, Row, Col } from "react-bootstrap";
import { Media } from "reactstrap";
import Image from "next/image";

const recruitment = () => {
  return (
    <>
      <CommonLayout parent="home" title="Information Technology">
        <section className="small-section">
          <Container>
            <div className="my-5">
              <Row className="my-4 align-items-center">
                <Col md={6} data-aos="fade-right" data-aos-duration="1000">
                  <h1 className="text-left recruitment_left-title">
                    Get the{" "}
                    <b className="recruitment_left-title_highlight">
                      Right Job
                    </b>
                    <br />
                    You Deserve
                  </h1>
                  <p className="recruitment_left-text my-2 text-justify">
                    We are aware that every business has a unique hiring
                    procedure and set necessary abilities. That’s why we provide
                    solutions that are customized to meet your demands. Timely
                    delivery and quality are priorities for us.
                  </p>
                  <button
                    className="btn btn-solid"
                    style={{ backgroundSize: "780px" }}
                  >
                    Are you looking for employees ?
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

        <Container className=" recruitment_solutions p-3  my-5">
          <div className="row mt-4">
            <div className="col-12 align-items-center">
              <div className="title1 title5">
                <h2 className="title-inner1">
                  <span className="recruitment_left-title_highlight">One</span>{" "}
                  Platform <br /> Many{" "}
                  <span className="recruitment_left-title_highlight">
                    Solutions
                  </span>
                </h2>
                <hr role="tournament6" />
              </div>
            </div>

            <div className="my-4  col-12 container row">
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Marketing.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">
                      Marketing & Communication
                    </h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Design.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">
                      Design & Development
                    </h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={
                      "/assets/images/recruitment/platform/HumanResource.svg"
                    }
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">
                      Human Research & Development
                    </h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Finance.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">Finance Management</h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Government.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">Government Jobs</h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Business.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">
                      Business & Consulting
                    </h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Customer.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">
                      Customer Support Care
                    </h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3  my-4">
                <div className=" rounded p-3 solution_card d-flex">
                  <Media
                    alt="Learn about our solutions that we offer"
                    src={"/assets/images/recruitment/platform/Project.svg"}
                    className="solution_img"
                  />
                  <div className="solution_card-right">
                    <h4 className="solution_card-title">Project Management</h4>
                    <span className="solution_card-spot">0 Jobs Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container className="container my-5">
          <div className="row py-4">
            <div className="col-12 align-items-center">
              <h2 className="text-left agency_title-top">Recruitment</h2>
              <h2
                className="text-left agency_title-down position-relative"
                style={{ marginTop: "0.8rem" }}
              >
                <span className="agency_title-down_text">Agency</span>
              </h2>

              <p
                className="agency_text text-justify"
                style={{ marginTop: "2rem" }}
              >
                A recruitment agency that works to provide people with new
                career options while also helping businesses put together a team
                of highly competent and efficient experts. We take delight in
                assisting in the development of the type of professional
                atmosphere that would realize the goal and visio around which
                businesses are based. Furthermore, the global marketplaces in
                which we compete are very diverse and dynamic. We currently make
                sales appearances in important Indian cities like Delhi,
                Hyderabad, Kolkata, and Chennai. Mumbai, Pune, among others, as
                well as in other countries including Saudi Arabia, the United
                Arab Emirates, Canada, the United Kingdom, Malaysia, and
                Singapore.
              </p>
            </div>
          </div>
        </Container>
        <Container className="container  my-5">
          <h3 id="recruitment_testimonial-title" className="mb-2">
            What{" "}
            <b className="recruitment_testimonial-img_text-focus">
              People say?
            </b>
          </h3>
          <div className="row recruitment_testimonial ">
            <div className="col-12 col-lg-4 recruitment_testimonial-left  position-relative">
              <Media
                alt="Our happy employee sharing his loving time"
                src={"/assets/images/recruitment/person.png"}
                className="recruitment_testimonial-img w-100"
              />

              <h3 className="recruitment_testimonial-img_text">
                What{" "}
                <b className="recruitment_testimonial-img_text-focus">
                  People say?
                </b>
              </h3>
            </div>

            <div className="col-12  col-lg-8 pl-3 recruitment_testimonial-right">
              <div className="position-relative recruitment_testimonial-right_hero  text-white text-center">
                <p className="recruitment_testimonial-text">
                  “I was made redundant due to the ongoing COVID-19 pandemic. I
                  applied to a role Jenny was recruiting for and was lucky
                  enough to be successful in my application. From start to
                  finish Jenny went above and beyond! Thank you so much I’m
                  extremely grateful and so happy.”
                </p>
                <div className="">
                  <h4 className="recruitment_testimonial-name m-0 p-0">
                    Paul Atm
                  </h4>
                  <h6 className="recruitment_testimonial-profession m-0 p-0">
                    Designer
                  </h6>
                </div>
                <Media
                  src={"/assets/images/recruitment/eclipse.svg"}
                  className="testimonial_eclipse"
                />
                <Media
                  src={"/assets/images/recruitment/eclipse-light.svg"}
                  className="testimonial_light-eclipse"
                />
                <Media
                  src={"/assets/images/recruitment/big-eclipse.svg"}
                  className="testimonial_big-eclipse"
                />
              </div>
            </div>
          </div>
        </Container>
      </CommonLayout>
    </>
  );
};

export default recruitment;
