import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/image/service-1.jpg";
import img1 from "../../assets/image/service-2.jpg";
import img2 from "../../assets/image/service-3.jpg";

const OurServices = () => {
  return (
    <section className=" bg-white">
    <Container className="py-5" >
      <Row className="">
        <p className=" text-uppercase text-Primary fw-bold text-center"  data-aos="fade-up" data-aos-duration="1000">
          Our Services
        </p>
        <h1 className=" fw-bold text-blue text-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          We Provide Best <br />
          Industrial Services{" "}
        </h1>
        <Col
          lg={4} 
          className="position-relative  d-flex justify-content-center align-items-center g-5"
        >
          <div className="service-item"  data-aos="zoom-out" data-aos-duration="1500"  >
            <img className="img-fluid" src={img} alt="service-img" />
            <div className="service-img">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="service-detail">
              <div className="service-title">
                <hr className="w-25" />
                <h3 className="mb-0  text-blue fw-bold">Civil & Gas Engineering</h3>
                <hr className="w-25" />
              </div>
              <div className="service-text">
                <p className="text-white mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
              </div>
            </div>
            <a className="btn btn-light" href="">
              Read More
            </a>
          </div>
        </Col>
        <Col
          lg={4} 
          className="position-relative  d-flex justify-content-center align-items-center g-5"
        >
          <div className="service-item" data-aos="zoom-out" data-aos-duration="1500" >
            <img className="img-fluid" src={img1} alt="service-img" />
            <div className="service-img">
              <img className="img-fluid" src={img1} alt="" />
            </div>
            <div className="service-detail">
              <div className="service-title">
                <hr className="w-25" />
                <h3 className="mb-0  text-blue fw-bold">Power & Energy Engineering</h3>
                <hr className="w-25" />
              </div>
              <div className="service-text">
                <p className="text-white mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
              </div>
            </div>
            <a className="btn btn-light" href="">
              Read More
            </a>
          </div>
        </Col>
        <Col
          lg={4} 
          className="position-relative  d-flex justify-content-center align-items-center g-5"
        >
          <div className="service-item" data-aos="zoom-out" data-aos-duration="1500"  >
            <img className="img-fluid" src={img2} alt="service-img" />
            <div className="service-img">
              <img className="img-fluid" src={img2} alt="service-img" />
            </div>
            <div className="service-detail">
              <div className="service-title">
                <hr className="w-25" />
                <h3 className="mb-0 text-blue fw-bold">Plumbing & Water Treatment</h3>
                <hr className="w-25" />
              </div>
              <div className="service-text">
                <p className="text-white mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
              </div>
            </div>
            <a className="btn btn-light" href="">
              Read More
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default OurServices;
