import React, { useEffect, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


export const UpdateProducts = () => {

  const addcatgory=useRef("");
  const subcategoryname=useRef("");
  const productname=useRef("");
  const productimg=useRef("");
  const productqut=useRef("");
  const productprice=useRef("");
  const productpower=useRef("");
  const productcapacity=useRef("");
  const addedate=useRef("");
  const descriptions=useRef(""); 
  const navigate=useNavigate("");
  const{id}=useParams();


  useEffect(()=>{
    axios.get(`http://localhost:2602/Products/${  id}`)
    .then((response)=>{             
      addcatgory.current.value=response.data.addcatgory;
      subcategoryname.current.value=response.data.subcategoryname;
      productname.current.value=response.data.productname;
      productimg.current.value=response.data.productimg;
      productqut.current.value=response.data.productqut;
      productprice.current.value=response.data.productprice;
      productpower.current.value=response.data.productpower;
      productcapacity.current.value=response.data.productcapacity;
      addedate.current.value=response.data.addedate;
      descriptions.current.value=response.data.descriptions;

});
},[]);

  const click=()=> {

    var upd = {
      addcatgory:addcatgory.current.value,
      subcategoryname:subcategoryname.current.value,
      productname:productname.current.value,
      productimg:productimg.current.value,
      productqut:productqut.current.value,
      productprice:productprice.current.value,
      productpower:productpower.current.value,
      productcapacity:productcapacity.current.value,
      addedate:addedate.current.value,
      descriptions:descriptions.current.value
    }

    axios.put(`http://localhost:2602/Products/${id}`,upd)
    .then(()=>{

      Swal.fire({
        title: 'success',
        text: 'your successfully Added',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      navigate("/admin-login/manageproduct");

    });

};


const [managecategory, SetMangeCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2602/Category").then((response) => {
      SetMangeCategory(response.data);
    });
  }, []);

  const [managesubcategorys, SetMangeSubCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2602/Subcategory").then((response) => {
      SetMangeSubCategory(response.data);
    });
  }, []);

  return (
    <div>
      <Container fluid="true">
        <Col className="adminlayout-left">
          <AdminSidebar />
        </Col>
        <Col className="adminlayout-right">
          <AdminHeader />

          <div className="text-dark  admin-dashboard">
            <div className="bg-white m-0 p-0">
              <h3 className="ms-5 fs-6 p-2">Dashboard/Add Products</h3>
              <hr className="border border-1 bg-white w-25 mx-auto" />
            </div>
            <h3 className="ms-5 fs-4 p-2">Update Products</h3>
            <hr className="border border-1 border-dark w-25 ms-5" />

            <Container className="p-3 col-md-6 ms-5 add-products">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Select Category *
                </label>
                <select
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Category Name *"
                >
                  <option value=" ">-select category-</option>
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
                  Select SubCategory *
                </label>
                <select
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="SubCategory Name *"
                >
                \<option value="">-select subcategory-</option>
                  {managesubcategorys &&
                    managesubcategorys.map((me) => {
                      return (
                        <option
                          ref={subcategoryname}
                          value={me.subcategoryname}>
                          {me.subcategoryname}
                        </option>
                      );
                    })} 
                </select>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update  Product Name *
                </label>
                <input
                  type="text"
                  ref={productname}
                  class="form-con0trol"
                  id="exampleFormControlInput1"
                  placeholder="Product Name *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update Product Image *
                </label>
                <input
                  type="url"
                  ref={productimg}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Product Image *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update  Product Qty *
                </label>
                <input
                  type="number"
                  ref={productqut}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Product Name *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update Product Price *
                </label>
                <input
                  type="text "
                  ref={productprice}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Product Price *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update Engine Power*
                </label>
                <input
                  type="Power"
                  ref={productpower}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Power *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update Bucket Capacity*
                </label>
                <input
                  type="Bucket"
                  ref={productcapacity}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=" Capacity *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update Added Date *
                </label>
                <input
                  type="date"
                  ref={addedate}
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
                  onClick={click}
                >
                 Update add product
                </button>
              </div>
            </Container>
          </div>
        </Col>
      </Container>
    </div>
  );
};
