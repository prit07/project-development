import React, { useState } from "react";
import { Col, Container, Row, fiuld } from "react-bootstrap";
import Aboutimg from "../../assets/image/about-1.jpg";
import Aboutimg1 from "../../assets/image/about-2.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const OurAbout = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div className=" bg-white">
        <Container>
          <Row className="py-5 g-5 ">
            <Col lg={6}>
              <Row className="gx-4 h-100">
                <div className="col-6 h-100 ">
                  <img
                    src={Aboutimg}
                    className="img-fluid aboutimg "
                    alt="about image"
                    data-aos="fade-up"
                    data-aos-duration="1000"
            
                  />
                </div>
                <div className="col-6  aboutimg-1">
                  <img
                    src={Aboutimg1}
                    className="img-fluid"
                    alt="about image"
                    data-aos="fade-down"
                    data-aos-duration="1000"
             
                  />
                </div>
              </Row>
            </Col>
            <Col lg={6} className="ps-4">
              <div className="about-capital">
                <p className=" text-uppercase text-Primary fw-bold"  data-aos="fade-up" data-aos-duration="1000"  >about us</p>
                <h2 className=" fw-bold text-blue fs-1" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="100">
                  We Are Leader In <br />
                  Industrial Market
                </h2>
                <p className="text-secondary mt-3" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="100">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam <br />
                  amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                  lorem sit clita <br />
                  duo justo magna dolore erat amet
                </p>
              </div>
              <div className="d-flex align-items-center  " data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="200">
                <div className="mb-4 about-text p-4 mt-3">
                  <h1 className="text-center fw-bold ">25</h1>
                  <h5 className="text-white text-start fw-bold">
                    Years of <br /> Experience
                  </h5>
                </div>
                <div className="about-icon ms-3 ">
                  <p>
                    <i className="bi bi-check-lg text-Primary me-2"></i>Power &
                    Energy
                  </p>
                  <p>
                    <i className="bi bi-check-lg text-Primary me-2"></i>Civil
                    Engineering
                  </p>
                  <p>
                    <i className="bi bi-check-lg text-Primary me-2"></i>Chemical
                    Engineering
                  </p>
                  <p>
                    <i className="bi bi-check-lg text-Primary me-2"></i>Mechanical
                    Engineering
                  </p>
                  <p>
                    <i className="bi bi-check-lg text-Primary me-2"></i>Oil & Gas
                    Engineering
                  </p>
                </div>
              </div>
              <Row>
                <div className="col-sm-6" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="300">
                  <div className="d-flex align-items-center">
                    <div className="btn-lg-square rounded-circle bg-Primary d-flex align-items-center ">
                      <i className="bi bi-envelope-open-fill text-white ms-3"></i>
                    </div>
                    <div className="ms-3">
                      <p className="mb-2">Email us</p>
                      <h5 className="mb-0 fw-bold text-blue">
                        Prit07@gmail.com
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6"  data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="300">
                  <div className="d-flex align-items-center">
                    <div className="btn-lg-square rounded-circle bg-Primary d-flex align-items-center ">
                      <i className="bi bi-telephone-fill text-white ms-3"></i>
                    </div>
                    <div className="ms-3">
                      <p className="mb-2">Call us</p>
                      <h5 className="mb-0 fw-bold text-blue ">
                        +91 9099525868
                      </h5>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="facts bg-blue  p-5">
        <Row className="g-5">
          <Col xl={3} md={6} className=" text-center ">
            <div
              className="counter-number text-white border p-5"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="counter-icon">
                <i className="bi bi-patch-check-fill mb-3 "></i>
              </span>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {" "}
                <h1 className=" display-2 fw-bold text-Primary people-fill mb-0">
                  {counterOn && (
                    <CountUp start={0} end={25} duration={2} delay={0} />
                  )}
                </h1>{" "}
              </ScrollTrigger>
              <span className="fs-5 fw-semi-bold ">Years Experience</span>
            </div>
          </Col>
          <Col xl={3} md={6} className=" text-center ">
            <div
              className="counter-number text-white border p-5"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="counter-icon">
                <i className="bi bi-person-fill-gear mb-3 "></i>
              </span>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(true)}
              >
                {" "}
                <h1 className=" display-2 fw-bold text-Primary people-fill mb-0">
                  {counterOn && (
                    <CountUp start={0} end={135} duration={3} delay={0} />
                  )}
                </h1>{" "}
              </ScrollTrigger>
              <span className="fs-5 fw-semi-bold ">Team Members</span>
            </div>
          </Col>
          <Col xl={3} md={6} className=" text-center ">
            <div
              className="counter-number text-white border p-5"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="counter-icon">
                <i className="bi bi-people-fill mb-3 "></i>
              </span>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(true)}
              >
                <h1 className=" display-2 fw-bold text-Primary people-fill mb-0">
                  {counterOn && (
                    <CountUp start={0} end={957} duration={3} delay={0} />
                  )}
                </h1>
              </ScrollTrigger>
              <span className="fs-5 fw-semi-bold ">Happy Clients</span>
            </div>
          </Col>
          <Col xl={3} md={6} className=" text-center ">
            <div
              className="counter-number text-white border p-5"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="counter-icon">
                <i className="bi bi-check2-all mb-3 "></i>
              </span>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(true)}
              >
                {" "}
                <h1 className=" display-2 fw-bold text-Primary people-fill mb-0">
                  {counterOn && (
                    <CountUp start={0} end={1839} duration={3} delay={0} />
                  )}
                </h1>{" "}
              </ScrollTrigger>
              <span className="fs-5 fw-semi-bold ">Projects Done</span>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default OurAbout;
