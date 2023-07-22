import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/image/team-1.jpeg";
import img1 from "../../assets/image/team-2.jpg";
import img2 from "../../assets/image/team-3.jpg";

const OurTeam = () => {
  return (
    <>
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-5">
            <div className="team-heding py-4 ">
              <p className=" text-uppercase text-Primary fw-bold text-center" data-aos="fade-up" data-aos-duration="1000">
                Our Team
              </p>
              <h1 className="fw-bold text-blue text-center" data-aos="fade-up" data-aos-duration="1000">
                Dedicated Team <br />
                Members
              </h1>
            </div>
            <Col lg={4} md={4}>
              <div className="team-items shadow"  data-aos="zoom-out" data-aos-duration="1500">
                <div className="our-team-img">
                  <img src={img} className="img-fluid w-100" alt="team-img" />
                </div>
                <div className=" d-flex ">
                  <div
                    className=" d-flex justify-content-center  p-2 bg-Primary"
                    style={{ width: "90px", height: "auto" }}
                  >
                    <i className="bi bi-arrow-90deg-right text-white  fs-1 "></i>
                  </div>
                  <div className=" d-flex flex-column justify-content-center bg-light w-100">
                    <h5 className=" fw-bold text-blue ms-3">Jahangir Bavra</h5>
                    <span className=" text-Primary ms-3"> CEO & Founder</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="team-items shadow"  data-aos="zoom-out" data-aos-duration="1500">
                <div className="our-team-img">
                  <img src={img1} className="img-fluid w-100" alt="team-img" />
                </div>
                <div className=" d-flex ">
                  <div
                    className=" d-flex justify-content-center  p-2 bg-Primary"
                    style={{ width: "90px", height: "auto" }}
                  >
                    <i className="bi bi-arrow-90deg-right text-white  fs-1 "></i>
                  </div>
                  <div className=" d-flex flex-column justify-content-center bg-light w-100">
                    <h5 className=" fw-bold text-blue ms-3">Adam Crew</h5>
                    <span className=" text-Primary ms-3">Project Manager</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="team-items shadow"  data-aos="zoom-out" data-aos-duration="1500">
                <div className="our-team-img">
                  <img src={img2} className="img-fluid w-100" alt="team-img" />
                </div>
                <div className=" d-flex ">
                  <div
                    className=" d-flex justify-content-center  p-2 bg-Primary"
                    style={{ width: "90px", height: "auto" }}
                  >
                    <i className="bi bi-arrow-90deg-right text-white  fs-1 "></i>
                  </div>
                  <div className=" d-flex flex-column justify-content-center bg-light w-100">
                    <h5 className=" fw-bold text-blue ms-3"> Patel Farel</h5>
                    <span className=" text-Primary ms-3">Engineer</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
