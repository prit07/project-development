import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const ManageSubCategory = () => {
  const [managesubcategory, SetMangeSubCategory] = useState([]);
  const Navigate=useNavigate();

  useEffect(() => {
    axios.get("http://localhost:2602/Subcategory").then((response) => {
      SetMangeSubCategory(response.data);
    });
  },[]);

  return (
    <div>
      <Container fluid="true">
        <Col className="adminlayout-left">
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className="adminlayout-right">
          <AdminHeader />

          <Container fluid="true" id="admin-dashboard">
            <div className="text-dark">
              <h2 className="ms-5 text-blue">Manage All Category</h2>
              <hr className="border border-1 border-dark w-25 ms-5" />
              <table className="table  table-bordered border-primary bg-white p-5 w-75 ms-5">
                <thead>
                  <tr className=" bg-blue text-white">
                    <th scope="col">#</th>
                    <th scope="col">CategoryName</th>
                    <th scope="col">SubCategoryName</th>
                    <th scope="col">Addeddate</th>
                    <th scope="col">Descriptions</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <thead className="table">
                  {managesubcategory &&
                    managesubcategory.map((items) => {
                      return (
                        <tr className=" bg-light">
                          <th scope="row" key={items.id}> {items.id} </th>
                          <td key={items.addcatgory}>{items.addcatgory}</td>
                          <td key={items.subcategoryname}>{items.subcategoryname}  </td>
                          <td key={items.adddate}>{items.adddate}</td>
                          <td key={items.descriptions}>
                            {items.descriptions}
                          </td>
                          <td>
                          <button type="button" className="btn btn-sm bg-primary text-white" onClick={()=>Navigate(`/admin-login/updatesubcategory/${items.id}`)}><i className='bi bi-pencil text-white'></i></button> | <button type="button" onClick={()=>Navigate(`/admin-login/deletesubcategory/${items.id}`)} className='btn btn-sm bg-danger text-white'><i className='bi bi-trash text-white'></i></button>
                          </td>
                        </tr>
                      );
                    })}
                </thead>
              </table>
            </div>
          </Container>
        </Col>
      </Container>
    </div>
  );
};
