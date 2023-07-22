import React, { useEffect } from 'react'
import './index.css';

import Home from "./Home"
import Contact from './components/client/Pages/Contact';
import Service from './components/client/Pages/Service';
import Project from './components/client/Pages/Project';
import Features from './components/client/Pages/Features';
import { Products } from './components/client/Pages/Products';
import ErrorPage from './components/client/Pages/ErrorPage';
import "aos/dist/aos.css"
import AOS from 'aos';
import {BrowserRouter,Routes , Route } from 'react-router-dom';
import About from "./components/client/Pages/About"
import NavbarApp from './components/client/NavbarApp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Our from './components/client/Pages/Our Team';


import AdminLogin from "./components/admin/AdminLogin"
import { AdminLayout } from './AdminLayout';
import { Addcategory } from './components/admin/Pages/Addcategory';
import { Managecategory } from './components/admin/Pages/Managecategory';
import { Addproduct } from './components/admin/Pages/Addproduct';
import { Manageproduct } from './components/admin/Pages/Manageproduct';
import ManageOrders from './components/admin/Pages/ManageOrders';
import { AdminContact } from './components/admin/Pages/AdminContact';
import { Addsubcategory } from './components/admin/Pages/Addsubcategory';
import { ManageSubCategory } from './components/admin/Pages/Mangesubcategory';
import { ManageContactdealer } from './components/admin/Pages/ManageContactdealer';
import UpdateCategory from './components/admin/Pages/UpdateCategory';
import { UpdateSubCategory } from './components/admin/Pages/UpdateSubCategory';
import { UpdateProducts } from './components/admin/Pages/UpdateProdutc';
import DeleteProduct from './components/admin/Pages/DeleteProduct';
import DeleteCategory from './components/admin/Pages/DeleteCategory';
import DeleteSubCategory from './components/admin/Pages/DeleteSubCategory';
import DeleteContact from './components/admin/Pages/DeleteContact';




const App = () => {


  
  useEffect(() => {
    AOS.init();
  }, []
  ) 
  return (
      <>
       
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<NavbarApp/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contant" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Features" element={<Features/>}/>
          <Route path="/Our" element={<Our/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      
          <Route path="*" element={<ErrorPage/>}/>
          </Route>  

          {/* admin login here */}
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/admin-login/admin-dashboard" element={<AdminLayout />}></Route>
          <Route path='/admin-login/addcategory' element={ <Addcategory />}></Route>
          <Route path='/admin-login/managecategory' element={ <Managecategory />}></Route>
          <Route path='/admin-login/addproduct' element={ <Addproduct />}></Route>
          <Route path='/admin-login/manageproduct' element={ <Manageproduct />}></Route>
          <Route path='/admin-login/manageorders' element={ <ManageOrders />}></Route>
          <Route path='/admin-login/admincontact' element={ <AdminContact />}></Route>
          <Route path='/admin-login/addsubcategory' element={ <Addsubcategory/>}></Route>
          <Route path='/admin-login/managesubcategory' element={ <ManageSubCategory/>}></Route>
          <Route path='/admin-login/managecontactdealer' element={ <ManageContactdealer/>}></Route>
          <Route path='/admin-login/updatecategory/:id' element={ <UpdateCategory/>}></Route>
          <Route path='/admin-login/updatesubcategory/:id' element={ <UpdateSubCategory/>}></Route>
          <Route path='/admin-login/updateproducts/:id' element={ <UpdateProducts/>}></Route>
          <Route path='/admin-login/deletecategory/:id' element={ <DeleteCategory/>}></Route>
          <Route path='/admin-login/deletesubcategory/:id' element={ <DeleteSubCategory/>}></Route>
          <Route path='/admin-login/deleteproduct/:id' element={ <DeleteProduct/>}></Route>
          <Route path='/admin-login/deletecontact/:id' element={ <DeleteContact/>}></Route>
       </Routes>
       </BrowserRouter>
 
       </>
  )
};
export default App ;