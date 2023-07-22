import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Modal from "react-bootstrap/Modal";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/image/jcb-2.jpg";
import img1 from "../../../assets/image/jcb-1.jpg";
import img2 from "../../../assets/image/jcb-3.jpg";
import img3 from "../../../assets/image/jcb-4.jpg";
import img4 from "../../../assets/image/jcb-5.jpg";
import img5 from "../../../assets/image/jcb-6.jpg";
import axios from "axios";
import Swal from "sweetalert2";



export const Products = () => {

  const username = useRef("");
  const phone = useRef("");
  const city = useRef("");
  const navigate = useNavigate("");

  const Handler = () => {
    var insert = {
      username: username.current.value,
      phone: phone.current.value,
      city: city.current.value,
    };
    
    axios.post("http://localhost:2602/Contactdealer ", insert).then(() => {
  

      Swal.fire({
        title: "success",
        text: "your successfully Added",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");

    });
  };

  const [manageproducts, setManageProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2602/Products").then((response) => {
      setManageProducts(response.data);
    });
  }, []);

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5 className=" fw-bold">pleace detils </h5>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group flex-nowrap p-3  mx-auto">
            <span class="input-group-text" id="addon-wrapping">
              <i class="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              ref={username}
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group flex-nowrap p-3  mx-auto">
            <span class="input-group-text" id="addon-wrapping">
              <i class="bi bi-telephone-fill"></i>
            </span>
            <input
              type="number"
              ref={phone}
              class="form-control"
              placeholder="Phone"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group flex-nowrap p-3  mx-auto">
            <span class="input-group-text" id="addon-wrapping">
              <i class="bi bi-geo-alt-fill"></i>
            </span>
            <input
              type="text"
              ref={city}
              class="form-control"
              placeholder="City"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button type="button" className=" btn btn-dark ms-3" onClick={Handler}>Submit</button>
        </Modal.Body>
      </Modal>
      <div className="page-header py-5">
        <Container
          className="py-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="display-3 text-white fw-bold slideInRight">
            Products
          </h1>
          <ul className="breadcrumb">
            <li>
              <Link className=" text-decoration-none text-white" to="/Home">
                {" "}
                Home /{" "}
              </Link>
              <Link className=" text-decoration-none text-white" to="/project">
                {" "}
                Pages /{" "}
              </Link>
              <Link className=" text-decoration-none text-white" to="/About">
                {" "}
                About Us{" "}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <div className=" pt-5  ">
        <p className=" text-uppercase text-Primary fw-bold text-center ">
          {" "}
          Our Selling
        </p>
        <h1 className="fw-bold text-blue text-center pb-5">
          the decline in the market <br />
          value of a piece
        </h1>
      </div>
      <Container>
        <Row className=" g-5 mb-3">
          <Col lg={4} md={6} sm={6} className=" py-lg-4">
            <Card>
              <Card.Img variant="top" src={img1} />
              <div className="align-items-center card">
                <p className=" fs-5 text-blue fw-bold text-center py-2">
                  jcb NXT 140 Excavatr
                </p>
                <h5>
                  Engine Power : <i className="bi bi-lightning-fill"></i>100hp
                </h5>
                <h5>Bucket Capacity: 1.5 Cum</h5>
                <h5 className=" text-blue mt-2 fw-bold">
                  {" "}
                  Price : <i className="bi bi-currency-rupee"></i> 45 - 47 Lakh
                </h5>
                <button className="btn btn-dark w-75 mb-3" onClick={handleShow}>
                  Contact Dealer
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={6} className=" py-lg-4 ">
            <Card>
              <Card.Img variant="top" src={img2} />
              <div className="align-items-center card ">
                <p className=" fs-5 text-blue fw-bold text-center py-2">
                  jcb NXT 245HDLR
                </p>
                <h5>
                  Engine Power : <i className="bi bi-lightning-fill"></i>74hp
                </h5>
                <h5>Bucket Capacity: 1 Cum</h5>
                <h5 className=" text-blue mt-2 fw-bold">
                  {" "}
                  Price : <i className="bi bi-currency-rupee"></i> 62 - 73 Lakh
                </h5>
                <button className="btn btn-dark w-75 mb-3" onClick={handleShow} >
                  Contact Dealer
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={6} className="py-lg-4">
            <Card>
              <Card.Img variant="top" src={img} />
              <div className="align-items-center card">
                <p className=" fs-5 text-blue fw-bold text-center py-2">
                  jcb 3DX Xtra Backhoe
                </p>
                <h5>
                  Engine Power : <i className="bi bi-lightning-fill"></i>74hp
                </h5>
                <h5>Bucket Capacity: 1 Cum</h5>
                <h5 className=" text-blue mt-2 fw-bold">
                  {" "}
                  Price : <i className="bi bi-currency-rupee"></i> 32 - 34 Lakh
                </h5>
                <button className="btn btn-dark w-75 mb-3" onClick={handleShow}>
                  Contact Dealer
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={6} className=" py-lg-4">
            <Card>
              <Card.Img variant="top" src={img3} />
              <div className="align-items-center card">
                <p className=" fs-5 text-blue fw-bold text-center py-2">
                  jcb NXT 225 LCM
                </p>
                <h5>
                  Engine Power : <i className="bi bi-lightning-fill"></i>148hp
                </h5>
                <h5>Bucket Capacity: 1.2 Cum</h5>
                <h5 className=" text-blue mt-2 fw-bold">
                  {" "}
                  Price : <i className="bi bi-currency-rupee"></i> 52 - 56 Lakh
                </h5>
                <button className="btn btn-dark w-75 mb-3" onClick={handleShow}>
                  Contact Dealer
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={6} className="py-lg-4">
            <Card>
              <Card.Img variant="top" src={img4} />
              <div className="align-items-center card">
                <p className=" fs-5 text-blue fw-bold text-center py-2">
                  jcb 50Z
                </p>
                <h5>
                  Engine Power : <i className="bi bi-lightning-fill"></i>48hp
                </h5>
                <h5>Bucket Capacity: 0.5 Cum</h5>
                <h5 className=" text-blue mt-2 fw-bold">
                  {" "}
                  Price : <i className="bi bi-currency-rupee"></i> 20 - 22 Lakh
                </h5>
                <button className="btn btn-dark w-75 mb-3" onClick={handleShow}>
                  Contact Dealer
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={6} className=" py-lg-4">
            <Card>
              <Card.Img variant="top" src={img5} />
              <div className="align-items-center card">
                <p className=" fs-5 text-blue fw-bold text-center py-2">
                  jcb LOADALL 53-110
                </p>
                <h5>
                  Engine Power : <i className="bi bi-lightning-fill"></i>56hp
                </h5>
                <h5>Bucket Capacity: 1.5 Cum</h5>
                <h5 className=" text-blue mt-2 fw-bold">
                  {" "}
                  Price : <i className="bi bi-currency-rupee"></i> 43 - 45Lakh
                </h5>
                <button className="btn btn-dark w-75 mb-3" onClick={handleShow}>
                  Contact Dealer
                </button>
              </div>
            </Card>
          </Col>
          {manageproducts &&
            manageproducts.map((items) => {
              return (
                <Col lg={4} md={6} sm={6} className=" py-lg-4">
                  <Card>
                    <img variant="top" src={items.productimg} />
                    <div className="align-items-center card">
                      <p
                        className=" fs-5 text-blue fw-bold text-center py-2"
                        key={items.productname}
                      >
                        {items.productname}
                      </p>
                      <h5 key={items.productpower}>
                        Engine Power : <i className="bi bi-lightning-fill"></i>
                        {items.productpower}
                      </h5>
                      <h5 key={items.productcapacity}>
                        Bucket Capacity: {items.productcapacity}
                      </h5>
                      <h5
                        className=" text-blue mt-2 fw-bold"
                        key={items.productprice}
                      >
                        {" "}
                        Price : <i className="bi bi-currency-rupee"></i>{" "}
                        {items.productprice}
                      </h5>
                      <button className="btn btn-dark w-75 mb-3" onClick={handleShow}>
                        Contact Dealer
                      </button>
                    </div>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

