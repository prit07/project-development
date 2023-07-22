import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const HeaderApp = () => {
  return (
    <>
         <div className='header-top-bar'>
         <Row className='align-items-center  d-lg-flex d-none'>
            <Col lg={9} >
              <div className='header-icon  d-lg-flex d-none text-white ps-5 justify-content-left align-items-center py-1'>
              
              <h5 className=''>Follow us:</h5>
              <span><i className="bi bi-facebook ps-3"></i></span>
              <span><i className="bi bi-twitter ps-3" ></i></span>
              <span><i className="bi bi-whatsapp ps-3"></i></span>
              <span><i className="bi bi-instagram ps-3"></i></span>
              </div>
            </Col>
            <Col lg={3} > 
            <div className='header-numbar text-white  text-center py-2'>
               <span className=' fw-bold '><i className="bi bi-telephone-fill"> </i> Call Us :</span>
               <span className=' fw-bold '> +9099525868</span>
               </div>
            </Col> 
         </Row>
      </div> 
    </>
  )
}
