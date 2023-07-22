import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import { Container, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

export const Addsubcategory = () => {

  const addcatgory = useRef("");
  const subcategoryname = useRef("");
  const adddate = useRef("");
  const descriptions = useRef("");
  const navigate = useNavigate("");

  const AddCategoryHandler = () => {
    var insert = {
      addcatgory: addcatgory.current.value,
      subcategoryname: subcategoryname.current.value,
      adddate: adddate.current.value,
      descriptions: descriptions.current.value,
    };

    axios.post(" http://localhost:2602/Subcategory ", insert).then(() => {
  

      Swal.fire({
        title: "success",
        text: "your successfully Added",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/admin-login/managesubcategory");

    });
  };
 
  const [managecategory, SetMangeCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2602/Category").then((response) => {
      SetMangeCategory(response.data);
    });
  }, []);

  return (
    <div>
      <Container fluid="true">
        <Col className="adminlayout-left">
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className="adminlayout-right">
          {/* header */}
          <AdminHeader />
          <Container fluid="true" className="col-md-6 ms-5" id="admin-dashboard" >
          <div className='text-dark '>
   
    <h2 className=' text-blue '>Add SubCategory</h2>
    <hr className='border border-1 border-dark w-25 ' />
    </div>
           <div className=" mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Select Category *
            </label>
            <select
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Category Name *"
            >
              <option>-select category-</option>
              {managecategory &&
                managecategory.map((row) => {
                  return (
                    <option ref={addcatgory}>
                      {row.addcatgory}
                    </option>
                  );
                })}
            </select>
        </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              SubCategory Name *
            </label>
            <input
              type="text"
              ref={subcategoryname}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="SubCategory Name *"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Added Date *
            </label>
            <input
              type="date"
              ref={adddate}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Added date *"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Descriptions
            </label>
            <textarea
              class="form-control"
              ref={descriptions}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="mb-3">
            <button
              type="button"
              class="btn btn-dark text-white"
              onClick={AddCategoryHandler}
            >
              AddSubCategory
            </button>
            <input
              type="reset"
              class="btn btn-danger text-white ms-3"
              value="Cancel"
            />
          </div>
          </Container>
        
        </Col>
      </Container>
    </div>
  );
};
