import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHader";
import { AdminSidebar } from "../AdminSidebar";
import { Col, Container } from "react-bootstrap";
import axios from "axios";
import ReactWhatsapp from "react-whatsapp";
import { ExportToExcel } from "./ExportToExcel";


export const AdminContact = () => {
  const [managecontact, SetManageContact] = useState([]); 

  const fileName = "myfile";

  useEffect(() => {
    axios.get("http://localhost:2602/Contact ").then((response) => {
      SetManageContact(response.data);
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
          <div className="text-dark"  id="admin-dashboard">
          
            <h2 className="ms-5 p-2 text-blue">Manage All Contact</h2>
            <div className="App  float-end  me-5 top-0 " >
      <ExportToExcel apiData={managecontact} fileName={fileName} />
    </div>
            <hr className="border border-1 border-dark w-25 ms-5" />
            
            <table className="table table-bordered border-primary  bg-white p-5 w-75 ms-5">
           
              <thead>
                <tr className=" bg-blue text-white">
                  <th scope="col">#</th>
                  <th scope="col">YourName</th>
                  <th scope="col">email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Message</th>
                  <th scope="col">Whatsapp</th>
          
                </tr>
              </thead>
              <tbody className=" table">
                {managecontact &&
                  managecontact.map((items) => {
                    return (
                      <tr className=" bg-light">
                        <th scope="row" key={items.id}>
                          {items.id}
                        </th>
                        <td key={items.yourname}>{items.yourname}</td>
                        <td key={items.email}>{items.email}</td>
                        <td key={items.mobile}>{items.mobile}</td>
                        <td key={items.massage}>{items.massage}</td>
                        <td > <ReactWhatsapp className=" border-0" number={items.mobile} message="hello prit bhai"><i class="bi bi-whatsapp "></i> </ReactWhatsapp> </td>
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
