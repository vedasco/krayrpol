import React from "react";
import CommonLayout from "../components/common-layout/CommonLayout";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const education = () => {
  return (
    <>
      <CommonLayout parent="home" title="Information Technology">
        <section className="small-section">
          <Container>
            <div className="my-5">
              <Row className="my-4 align-items-center">
                <Col md={6} data-aos="fade-right" data-aos-duration="1000">
                  <h3 className="education_left-title">
                    Get Education Abroad, it’s{" "}
                    <b className="recruitment_left-title_highlight ">
                      Never Too Late
                    </b>
                  </h3>
                  <p className="recruitment_left-text my-2 text-justify">
                    We at Krayrpol , have unique resources to give students
                    step-by-step guidance for the entire process of Abroad
                    study. Our systematized approach and representation of the
                    Universities from various abroad study destinations
                    immensely helps the students who apply through us.
                  </p>
                  <p className="text-justify">
                    Krayrpol has a condensed priority, to guide students to the
                    best possible Institutions, thus enabling them to build
                    their future on a sound foundation. Our experts identify the
                    most suitable university for each student. We act as the
                    milestone to their future and their success is directly
                    linked to our success.
                  </p>
                  <p className="text-justify">
                    Our consultant obey strict code of ethics and a set of
                    values follows in practice and not merely in words. Our
                    timely follow-ups and friendly reminders keep the
                    recruitment procedures in a smooth flow.
                  </p>
                  <button
                    className="btn btn-solid"
                    style={{ backgroundSize: "780px" }}
                  >
                    contact us
                  </button>
                </Col>
                <Col
                  md={6}
                  className="mt-3 mt-md-0"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/assets/images/education/education_hero.png"
                    width={500}
                    height={500}
                    alt="education_hero"
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <Container>
          <div className="row my-5 align-items-center pb-5">
            <div
              className="col-lg-6 col-12 pt-5"
              // data-aos="fade-down-right"
              // data-aos-duration="1000"
            >
              <h2 className="text-capitalize">
                Finishing school & thinking where to go next?
              </h2>
              <p className="pt-2 text-justify">
                We assist you in finding the best university that you can afford
                and help you in the entire process of enrollment. We have a
                growing community of like-minded professionals.During your study
                we will support you in every possible ways. We will prepare you
                for employment before and after graduation.<br></br>
              </p>
            </div>
            <div
              className="col-lg-6 col-12 text-center position-relative "
              // data-aos="fade-down-left"
              // data-aos-duration="1000"
            >
              <Image
                alt="icon"
                src={"/assets/images/education/man.svg"}
                width={500}
                height={500}
              />
              <div
                className=" position-absolute"
                style={{ left: "-10rem", right: 0, top: "7rem", bottom: 0 }}
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/world.svg"}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div
            className="title1 title5"
            // data-aos="fade-down-left"
            // data-aos-duration="1000"
          >
            <h2 className="title-inner1">Why Study in Poland?</h2>
            <hr role="tournament6" />
            <p className="text-justify" style={{ marginBottom: "8rem" }}>
              Poland is the place where you can earn a diploma that will open up
              doors to the best companies in Europe, and some of the best in the
              world. The country has many other perks, such as the fact that its
              medical schools are accredited in the US and that, while studying
              in Poland, you have access to the European Union’s study
              programmes and are able to do internships or traineeships abroad.
              With top-quality, internationally recognised degrees, almost no
              other region in the world can set your career off to such a
              promising start. Do not forget that Poland has a favourable
              geographic location that has an excellent transport connection to
              the whole European Union at your fingertips!
            </p>
          </div>
          <div
            className="title1 title5"
            // data-aos="fade-down-right"
            // data-aos-duration="1000"
          >
            <h2 className="title-inner1">Our Philosophy</h2>
            <hr role="tournament6" />
            <p className="text-justify" style={{ marginBottom: "8rem" }}>
              At Krayrpol we believe that a university education is an
              investment in your future. Our goal is to help you find the best
              school for you, and to make sure you are fully prepared for the
              next steps of your education. We offer career counselling, advice
              on how to study abroad, and help in the application process for
              highly ranked universities around the world. We can also provide
              references from past students who have gone through our program,
              as well as testimonials from graduates who have been accepted into
              their desired institution.
            </p>
          </div>
          <div
            className="title1 title5"
            // data-aos="fade-down-left"
            // data-aos-duration="1000"
          >
            <h2 className="title-inner1">Why choose Krayr?</h2>
            <hr role="tournament6" />
            <p className="text-justify" style={{ marginBottom: "8rem" }}>
              Krayr is the leading online education platform for students,
              because it is trusted by students and educators alike. It is easy
              to use, cost-friendly, and offers a wide range of courses from top
              universities around the world. Krayr also has a professional staff
              that works tirelessly to make sure your experience is top-notch.
            </p>
          </div>
        </Container>
        <Container>
          <div className="pt-3 mt-2 mb-5 title1 title5">
            <h2 className="title-inner1">WE ARE READY TO HELP YOU</h2>
            <hr role="tournament6" />
            {/* <p className="">
              Krayrpol is always committed to providing our students with
              outstanding services.
            </p> */}
            <div className=" background-help  text-center p-5">
              <div className="d-flex flex-lg-row flex-md-column flex-column pt-2 col-flex">
                <div className=" mx-1 mt-2 text-center p-3 background-help-col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-person-workspace"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                  </svg>
                  <h5 className="pt-3">CAREER COUNSELLING</h5>
                  <p className="pt-3">
                    We take a holistic approach to career counseling, which
                    means that we look at you as a whole person, not just your
                    resume. We want to know what you are passionate about, and
                    how that passion can translate into a career. We also help
                    you develop strategies for making the best higher education
                    decisions in order to shape the best future for yourself. We
                    believe that by taking time to understand each student’s
                    unique goals and needs, we can better help them achieve
                    their dreams.
                  </p>
                </div>
                <div className="mx-1 mt-2 text-center p-3 background-help-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>
                  <h5 className="pt-3">LANGUAGES COURSES</h5>
                  <p className="pt-3">
                    Our courses are designed by native speakers who know what it
                    takes to learn a new language from scratch or from someone
                    who already knows one. This means that you will not only be
                    learning from an expert but that the course is also tailored
                    specifically for your needs! Students can choose which
                    languages they would like to learn, and our instructors are
                    native speakers from the countries in which they teach.
                  </p>
                </div>
                <div className="mx-1 mt-2 text-center p-3 background-help-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-building"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                    />
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                  </svg>
                  <h5 className="pt-3">ADMISSION GUIDANCE</h5>
                  <p className="pt-3">
                    Our counselors help you choose the best university for your
                    needs, and provide step-by-step assistance in the admissions
                    process. they’ll make sure you get the documentation you
                    need to complete the application successfully. They will
                    also work with you to make sure that everything is submitted
                    on time, so that you have the best chance at being accepted
                    into the program of your choice!
                  </p>
                </div>
                <div className="mx-1 mt-2 text-center p-3 background-help-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-credit-card"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                  </svg>
                  <h5 className="pt-3">VISA ASSISTANCE</h5>
                  <p className="pt-3">
                    At Krayrpol, we know that immigrating to a foreign country
                    can be a confusing and difficult process. Our immigration
                    lawyers are experts in the requirements of every country,
                    and they will guide you through each stage of the process,
                    from documentation to visa interview preparation. They also
                    make sure that you are aware of all rules and regulations
                    during your stay in the US or abroad, so you can avoid any
                    issues with visas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className=" my-2 py-5 title1 title5 ">
            <h2 className="title-inner1">WE ARE READY TO HELP YOU</h2>
            <hr role="tournament6" />
            {/* <h6 className="text-center fw-medium">WE ARE READY TO HELP YOU</h6> */}
            <div className="row pt-5 align-items-center">
              <div
                className="mt-4 mt-lg-0 col-12 col-md-6 col-lg-4 help-p"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/Language.svg"}
                  width={96}
                  height={96}
                />
                <p className="pt-2">Learning Language</p>
              </div>
              <div
                className="mt-4 mt-lg-0 col-12 col-md-6 col-lg-4 help-p"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/Interview.svg"}
                  width={96}
                  height={96}
                />
                <p className="pt-2">Interviews</p>
              </div>
              <div
                className="mt-4 mt-lg-0 col-12 col-md-6 col-lg-4 help-p"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/Visa.svg"}
                  width={96}
                  height={96}
                />
                <p className="pt-2">Applying Visa</p>
              </div>

              <div
                className="mt-4 mt-lg-0 col-12 col-md-6 col-lg-4 help-p"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/Document.svg"}
                  width={96}
                  height={96}
                />
                <p className="pt-2">Documents Preparation</p>
              </div>
              <div
                className="mt-4 mt-lg-0 col-12 col-md-6 col-lg-4 help-p"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/Expectation.svg"}
                  width={96}
                  height={96}
                />
                <p className="pt-2">Expectations</p>
              </div>
              <div
                className="mt-4 mt-lg-0 col-12 col-md-6 col-lg-4 help-p"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Image
                  alt="icon"
                  src={"/assets/images/education/FlightToPoland.svg"}
                  width={96}
                  height={96}
                />
                <p className="pt-2">Flight to Poland</p>
              </div>
            </div>
          </div>
        </Container>
      </CommonLayout>
    </>
  );
};

export default education;
