import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Form , Button} from 'react-bootstrap';
import account from '../../assets/image/account.gif';
export default function AdminLogin() {
  return (
    <div>

    <Container className="p-3 mt-5  w-50  bg-light shadow ">
     <div className='mb-4'>
    <h2 className="text-center fw-bold text-blue">Login with Admin</h2>
    <hr className="border border-2 border-dark w-25 mx-auto" />
    </div>
    <Row className='g-4'>
      <div className="col-md-5">
        <img
          src={account}
          alt="account"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="col-md-7">
        <Form method="post">
          <div className="form-floating mt-4">
            <input
              type="text"
              id="floatingInput"
              className="form-control w-75"
              placeholder="Enter Email *"
              required
            />
            <label for="floatingInput">Email address</label>  
          </div>

          <div className="form-floating mt-2 pt-2">
            <input
              type="password"
              className="form-control w-75 "
              id="floatingPassword"
              placeholder="Enter Password *"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-input mt-4">
           
        <Button href='/admin-login/admin-dashboard' value="Login" type='submit'  className='btn  bg-Primary'> Login</Button>

            <b>
              &nbsp;&nbsp;<Link to="#" className=' text-decoration-none text-blue'>Forget password ?</Link>
            </b>
          </div>
        </Form>
      </div>
    </Row>
  </Container>

      
    </div>
  )
}
