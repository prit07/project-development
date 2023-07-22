import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactWhatsapp from "react-whatsapp";
import { ExportToExcel } from "./ExportToExcel";


export const ManageContactdealer = () => {
    const [managecontact, SetManageContact] = useState([]); 
  
    const fileName = "myfile";
  
    useEffect(() => {
      axios.get("http://localhost:2602/Contactdealer").then((response) => {
        SetManageContact(response.data);
      });
    }, []);
  
    return (
      <div>
        <Container fluid="true" >
          <Col className="adminlayout-left">
     
            <AdminSidebar />
          </Col>
          <Col className="adminlayout-right">
        
            <AdminHeader />
            <div className="text-dark" id="admin-dashboard">
              
              <h2 className="ms-5  text-blue p-2">Manage All Contactdealer</h2>
              <div className="App  float-end me-5 pb-5  " >
        <ExportToExcel apiData={managecontact} fileName={fileName} />
      </div>
              <hr className="border border-1 border-dark w-25 ms-5 " />
              
              <table className="table table-bordered border-primary bg-white p-5 w-75 ms-5 ">
             
                <thead>
                  <tr className="bg-blue text-white">
                    <th scope="col">#</th>
                    <th scope="col">YourName</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">City</th>
                    <th scope="col">Whatsapp</th>
                  
                  </tr>
                </thead>
                <tbody className=" table">
                  {managecontact &&
                    managecontact.map((items) => {
                      return (
                        <tr className=" bg-light   ">
                          <th scope="row" key={items.id}>
                            {items.id}
                          </th>
                          <td key={items.username}>{items.username}</td>
                          <td key={items.phone}>{items.phone}</td>
                          <td key={items.city}>{items.city}</td>
                          <td > <ReactWhatsapp className=" border-0 " number={items.phone} message="hello prit bhai"><i class="bi bi-whatsapp"></i> </ReactWhatsapp> </td>
                         
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
  