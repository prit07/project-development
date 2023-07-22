import React, { useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import { Container, Col, Button, Form, InputGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";



export const Addcategory = () => {

  const addcatgory = useRef("");
  const adddate = useRef("");
  const descriptions = useRef("");
  const Navigate = useNavigate("");

  const Click = () => {
    var insert = {
      addcatgory: addcatgory.current.value,
      adddate: adddate.current.value,
      descriptions: descriptions.current.value,
    }
    axios.post("http://localhost:2602/Category", insert)
      .then(() => {
        Swal.fire({
          title: 'success',
          text: 'your category successfully Added',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        Navigate("/admin-login/managecategory")
      });
    }
  return (
    <div>

      <Container fluid="true"  >
        <Col className="adminlayout-left">
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className="adminlayout-right">
          {/* header */}

          
          <AdminHeader />
          <Container fluid="true" className="col-md-5 ms-5" id="admin-dashboard">
            <h2 className=" text-blue  ">Add Category</h2>
            <hr className="border border-1 border-dark w-25 " />
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Category Name *
                </label>
                <input
                  type="text"
                  
                  ref={addcatgory}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Category Name *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Added Date *
                </label>
                <input
                  type="date"
                  ref={adddate}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Added date *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Descriptions
                </label>
                <textarea
                  className="form-control"
                  ref={descriptions}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3">
                <input
                  type="submit"
                  className="btn btn-dark text-white"
                  value="AddCategory"
                  onClick={Click}
                />
                <input
                  type="reset"
                  className="btn btn-danger text-white ms-3"
                  value="Cancel"
                />
              </div>
            </Container>
          
        </Col>
      </Container>
    </div>
  );
};
