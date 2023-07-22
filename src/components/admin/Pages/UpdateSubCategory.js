import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import { Container, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

export const UpdateSubCategory = () => {

  const addcatgory = useRef("");
  const subcategoryname = useRef("");
  const adddate = useRef("");
  const descriptions = useRef("");
  const navigate = useNavigate("");
  const{id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:2602/Subcategory/${id}`)
    .then((response)=>{             
      addcatgory.current.value=response.data.addcatgory;
      subcategoryname.current.value=response.data.subcategoryname;
      adddate.current.value=response.data.adddate;
      descriptions.current.value=response.data.descriptions;

});
},[]);

  const AddCategoryHandler = () => {
    var upd = {
      addcatgory: addcatgory.current.value,
      subcategoryname: subcategoryname.current.value,
      adddate: adddate.current.value,
      descriptions: descriptions.current.value,
    };
    axios.put(`http://localhost:2602/Subcategory/${id}`,upd)
    .then(()=>{

  

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
   
    <h2 className=' text-blue '>Update SubCategory</h2>
    <hr className='border border-1 border-dark w-25 ' />
    </div>
           <div className=" mb-3">
            <label for="exampleFormControlInput1" class="form-label">
            Update  Select Category *
            </label>
            <select
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Category Name *"
            >
              <option value="#">-select category-</option>
              {managecategory &&
                managecategory.map((row) => {
                  return (
                    <option ref={addcatgory} value={row.addcatgory}>
                      {row.addcatgory}
                    </option>
                  );
                })}
            </select>
        </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
             Update SubCategory Name *
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
            Update Added Date *
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
            Update Descriptions
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
             Update AddSubCategory
            </button>
           
          </div>
          </Container>
        
        </Col>
      </Container>
    </div>
  );
};
