import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { AdminSidebar } from '../AdminSidebar'
import AdminHeader from '../AdminHader'


const ManageOrders = () => {
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
        </Col>
   <h1>ManageOrders </h1> 
   </Container>

   </div>
  )
}

export default ManageOrders