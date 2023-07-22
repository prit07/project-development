import React from "react";

import { Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import admin from "../../assets/image/admin-logo.jpg";

export default function AdminHeader() {
  return (
    <div>
      <Container fluid className="admin-header  bg-blue  " id="admin-header">
        <Row>
          <div className="col-lg-7 form-floating mt-1 py-2  ">
    
              <Form className=" from-input w-100">
         
                 <input
                  type="text"
                  name="search"
                  placeholder="Search anything here! "
                  className="input p-2 w-50 " 
                  /> 
              </Form>
         
          </div>
          <div className="col-lg-3   py-2  text-white ">
            <div className="d-flex  header-capital">
              <img 
                src={admin}
                className=" img-fluid rounded-pill ms-5"
                alt="adamin-logo"
                style={{ width: "15%", height: "48px" }}
              />
              <ul className="header-link pt-2">
                <li className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"  className=' dropdown-toggle text-white'
                  >
                    Welcome:Prit{" "}
                  </Link>
                  <ul
                    className="dropdown-menu  bg-Primary  text-center"
                    
                  >
                    <li className=" p-1 pt-0">
                      <Link to="#" className=" p-1">Change Password</Link>
                    </li>
                    <hr className="m-0 "/>
                    <li className="p-1 ">
                      <Link to="#">Logout </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
