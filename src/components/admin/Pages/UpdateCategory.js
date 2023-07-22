import axios from 'axios';
// axios is a library of react js i.e used to get , post , fetch , edit , delete and update api inside of react js projects
import React,{useEffect,useRef} from 'react';
// useRef() is used to take input from user or pass refrence in user input
import {Link,useNavigate,useParams} from 'react-router-dom';
import {Container,Row,Form, Col} from 'react-bootstrap';

import { AdminSidebar } from '../AdminSidebar';
import Swal from 'sweetalert2';
import AdminHeader from '../AdminHader';

export default function UpdateCategory() 
{
    const addcatgory=useRef("");
    const adddate=useRef("");
    const descriptions=useRef("");
    const{id}=useParams();
    const navigate=useNavigate("");
   
    // fetch data in edit 
    useEffect(()=>{
        axios.get(`http://localhost:2602/Category/${id}`)
        .then((response)=>{             
          addcatgory.current.value=response.data.addcatgory;
          adddate.current.value=response.data.adddate;
      descriptions.current.value=response.data.descriptions

    });

},[]);

    const UpdateCategoryHandler=()=> {
           var upd= {
            addcatgory:addcatgory.current.value,
            adddate:adddate.current.value,
            descriptions:descriptions.current.value,
        }
          // call axios api to stored data
          axios.put(`http://localhost:2602/Category/${id}`,upd)
          .then(()=>{
              
            Swal.fire({
              title: 'success',
              text: 'your category successfully Updated',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            navigate("/admin-login/managecategory");
           
          });

     };



  return (

    <div>

<Container fluid="true"  >
        <Col className="adminlayout-left">
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className="adminlayout-right">
          {/* header */}

          
          <AdminHeader />
          <Container fluid="true" className="col-md-5 ms-5" id="admin-dashboard">
            <h2 className=" text-blue  ">Update  Category</h2>
            <hr className="border border-1 border-dark w-25 " />
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Update  Category Name *
                </label>
                <input
                  type="text"
                  
                  ref={addcatgory}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Category Name *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                Update  Added Date *
                </label>
                <input
                  type="date"
                  ref={adddate}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Added date *"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                Update Descriptions
                </label>
                <textarea
                  className="form-control"
                  ref={descriptions}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3">
                <input
                  type="submit"
                  className="btn btn-dark text-white"
                  value="Update Category"
                  onClick={UpdateCategoryHandler}
                />
               
              </div>
            </Container>
          
        </Col>
      </Container>

</div>


  )
}
