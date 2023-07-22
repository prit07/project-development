import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bottom-parallax">
      <footer className="footer-area">
      <Container fluid className="bg-blue pt-4">
        <Row>
          <div className="footer py-lg-5">
            <Container>
              <Row className="g-5">
                <Col lg={3} md={6} sm={6} className=" text-white our-Office">
                  <h5 className="mb-4 ms-2 fw-bold">Our Office</h5>
                  <p className=" text-secondary">
                    <i className="bi bi-geo-alt-fill"></i> 123 Street New Yourk, USA
                  </p>
                  <p className=" text-secondary">
                    <i className="bi bi-telephone-fill"></i> +91 9099525868
                  </p>
                  <p className=" text-secondary">
                    <i className="bi bi-envelope-fill"></i> pritladani07@gmail.com
                  </p>
                  <div className="footer-icon py-lg-4 ">
                    <a
                      className="btn btn-square bg-Primary text-white rounded-circle me-2"
                      href=""
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square bg-Primary text-white rounded-circle me-2"
                      href=""
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      className="btn btn-square bg-Primary text-white rounded-circle me-2"
                      href=""
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a
                      className="btn btn-square bg-Primary text-white rounded-circle me-2"
                      href=""
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="our-Office">
                  <h5 className="mb-4 fw-bold text-white  ms-1">Quick Links</h5>
                  <p className=" text-secondary">
                    <i className="bi bi-chevron-right"></i> <Link className=" text-decoration-none text-white" to="/Home">  Home 
</Link>
                  </p>
                  <p className=" text-secondary">
                    <i className="bi bi-chevron-right"></i> Contact Us
                  </p>
                  <p className=" text-secondary">
                    <i className="bi bi-chevron-right"></i> Our Services
                  </p>
                  <p className=" text-secondary">
                    <i className="bi bi-chevron-right"></i> Terms & Condition
                  </p>
                  <p className=" text-secondary">
                    <i className="bi bi-chevron-right"></i> Support
                  </p>
                </Col>
                <Col lg={3}  md={6}  sm={6} className="our-Office">
                  <h5 className="mb-4 fw-bold text-white  ms-1">
                    Business Hours
                  </h5>
                  <p className=" text-secondary">Monday - Friday</p>
                  <p className=" fw-bold text-white">09:00 am - 07:00 pm</p>
                  <p className=" text-secondary">Saturday</p>
                  <p className=" fw-bold text-white">09:00 am - 12:00 pm</p>
                  <p className=" text-secondary">Sunday</p>
                  <p className=" fw-bold text-white">Closed</p>
                </Col>
                <Col lg={3}  md={6} sm={6}>
                  <h5 className="mb-4 fw-bold text-white  ms-1">Newsletter</h5>
                  <p className=" text-secondary">
                    Dolor amet sit justo amet eliter clita ipsum elitr est.
                  </p>
                  <div className="position-relative w-100">
                    <input
                      className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Your email"
                    />
                    <button
                      type="button"
                      className="btn bg-Primary text-white py-2 position-absolute top-0 end-0 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>

                  <button  type="button"
                   className="btn bg-Primary text-white py-2 mt-5 "><Link className="text-decoration-none  text-white" to="/admin-login">AdminLogin</Link>
                 
                  </button>

                </Col>
              
              </Row>
             
            </Container>
         
          </div> 
          <div className="copyright py-4">
            {/* <h5 className=" text-secondary text-center fs-5 mt-4">Copyright <span className=" text-Primary"> Your Site Name, </span> All Right Reservd.</h5>
            <h5 className=" text-secondary text-center fs-5 mt-2">Designed By <span className=" text-Primary">HTML Codex</span>Distributed By: <span> Pritladani </span></h5> */}
            <h5 className=" text-secondary text-center">Copyright © 2022 <span className=" text-Primary">Industry .</span> All Rights Reserved.</h5>
          </div>
        </Row>
      </Container>
      </footer>
      </div>
  
    </>
  );
};

export default Footer;
