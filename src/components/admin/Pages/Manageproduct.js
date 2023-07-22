import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Manageproduct = () => {
  const [manageproducts, setManageProducts] = useState([]);
  const Navigate=useNavigate();

  useEffect(() => {
    axios.get("http://localhost:2602/Products").then((response) => {
      setManageProducts(response.data);
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
          <div className="text-dark  admin-dashboard">
            <div className="bg-white m-0 p-0">
              <h3 className="ms-5 fs-6 p-2">Dashboard/Manage Products</h3>
              <hr className="border border-1 bg-white w-25 mx-auto" />
            </div>
            <h3 className="ms-5 fs-4 p-2">Manage All Products</h3>
            <hr className="border border-1 border-dark w-25 ms-5" />
            <table className="table table-bordered border-primary bg-white   ms-3">
              <thead >
                <tr className=" bg-blue text-white">
                  <th scope="col">#</th>
                  <th scope="col">CatName</th>
                  <th scope="col">SubName</th>
                  <th scope="col">ProductsName</th>
                  <th scope="col">Images</th>
                  <th scope="col">qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Power</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Addeddate</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table">
                {manageproducts &&
                  manageproducts.map((items) => {
                    return (
                      <tr className=" bg-light   ">
                        <th scope="row" key={items.id}>
                          {items.id}
                        </th>
                        <td key={items.addcatgory}>{items.addcatgory}</td>
                        <td key={items.subcategoryname}>
                          {items.subcategoryname}
                        </td>
                        <td key={items.productname}>{items.productname}</td>
                        <td> <img src={items.productimg}  alt=" img" style={{ width:"85px", height:"80px"}}></img></td>
                        <td key={items.productqut}>{items.productqut}</td>
                        <td key={items.productprice}>{items.productprice}</td>
                        <td key={items.productpower}>{items.productpower}</td>
                        <td key={items.productcapacity}>
                          {items.productcapacity}
                        </td>
                        <td key={items.addedate}>
                          {items.addedate}
                        </td>
                        <td key={items.descriptions}>
                          {items.descriptions}
                        </td>
                        <td>
                        <button type="button" className="btn btn-sm bg-primary text-white" onClick={()=>Navigate(`/admin-login/updateproducts/${items.id}`)}><i className='bi bi-pencil text-white'></i></button> | 
                        <button type="button" onClick={()=>Navigate(`/admin-login/deleteproduct/${items.id}`)} className='btn btn-sm bg-danger text-white'><i className='bi bi-trash text-white'></i></button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Col>
      </Container>
    </div>
  );
};
