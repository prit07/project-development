import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function DeleteCategory() 
{
 const [deletecategory, SetDeletecategory] = useState([]);
  const {id}=useParams();
  const Navigate=useNavigate();

  useEffect(()=>{
      axios.delete(`http://localhost:2602/Category/${id}`,id)
      .then((res)=>{
        SetDeletecategory(res.data)
        Swal.fire({
            title: 'success',
            text: 'your Products successfully Deleted',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          Navigate("/admin-login/managecategory");


      });
  },[]);

  return (

    <>
    
    </>
  )
}


