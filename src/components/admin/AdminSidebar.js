import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div>


      <div className="sidebar bg-blue" id="sidebar">
        <div className=" pt-1  bg-Primary">
          <b className="fs-4 ms-3 text-white">Lp Dashboard</b>
          <p className="fs-6 ms-3 text-success">Online</p>
        </div>
        <div className=" text-white pt-4">
          <h3 className="ms-0 fs-4 text-center">Category</h3>
          <hr className="border border-1 bg-white w-25 mx-auto" />
          <ul className="navbar-link w-100 ms-4 ">
            <li className="nav-link ">
              <Link to="/admin-login/manage-customer">
                <i className="bi bi-person-add p-1 bg-danger text-white rounded-pill"></i>{" "}
                Manage customer
              </Link>
              
            </li>
            <li className="dropend">
              <Link to="/admin-login/addcategory" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                <i className="bi bi-cart p-1 bg-warning text-white "></i>{" "}
                Category
              </Link>
              <ul className="dropdown-menu ms-4   bg-Primary  text-center">
              <li className="p-1 pt-0 "><Link  to="/admin-login/addcategory">Add-category</Link> </li>
              <hr className="m-0 "/>
              <li className="p-1 "><Link to="/admin-login/managecategory">manage-category</Link></li>
              </ul>
            </li>
            <li className="dropend">
              <Link to="/admin-login/addsubcategory" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                <i className="bi bi-cart p-1 bg-success text-white rounded-pill"></i>
                SubCategory
              </Link>
              <ul className="dropdown-menu ms-4  bg-Primary text-white text-center" >
              <li className=" p-1 pt-0"><Link to="/admin-login/addsubcategory">addsubcategory</Link> </li>
              <hr className="m-0 "/>
              <li className=" p-1 "><Link to="/admin-login/managesubcategory">managesubcategory</Link></li>
              </ul>
            </li>
            <li className="dropend">
              <Link to="/admin-login/addproducts" data-bs-toggle="dropdown"  className=' dropdown-toggle'>
                <i className="bi bi-cart p-1 bg-dark text-white rounded-pill"></i>{" "}
                Products
              </Link>
              <ul className="dropdown-menu ms-4  bg-Primary text-white text-center" >
              <li className=" p-1 pt-0"><Link to="/admin-login/addproduct">Add-Products</Link> </li>
              <hr className="m-0 "/>
              <li className=" p-1 "><Link to="/admin-login/manageproduct">manage-Products</Link></li>
              </ul>
            </li>
            <li className="nav-link">
              <Link to="/admin-login/manageorders">
                <i className="bi bi-truck shadow  p-1 bg-warning text-white rounded-pill"></i>{" "}
                Manage orders
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/kids-products">
                <i className="bi bi-command p-1 bg-secondary text-white rounded-pill"></i>{" "}
                Manage Feedback
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/admin-login/admincontact"> <i className="bi bi-person-rolodex  p-1 bg-Primary text-white rounded-pill"></i> Manage Contact</Link>
            </li>
            <li className="nav-link">
              <Link to="/admin-login/managecontactdealer"> <i className="bi bi-person-rolodex  p-1 bg-blue text-white rounded-pill"></i> Manage Contactdealer</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
