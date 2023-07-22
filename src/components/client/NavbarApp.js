import React, {useState} from  'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HeaderApp } from './HeaderApp';

const   NavbarApp = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  return (
    <>
    <HeaderApp />
      {/* NAVBAR START */}
    <Navbar  id='navigation' className={colorChange ? 'navbar colorChange' : 'navbar m-0 p-0 navbar-app'}  expand="lg" >
        <Navbar.Brand href="#home" className='logo pt-0 py-2 text-white  fw-bold fs-1 pb-0 ps-5'>LP GROUP 
        </Navbar.Brand>
        <Navbar.Toggle className='toggl me-4' aria-controls="navbarSupportedContent" data-bs-Toggle="collapse"  data-bs-target="#basic-navbar-nav" aria-expanded="false" / >
        <div  className='collapse navbar-collapse ' id="basic-navbar-nav" >
          <Nav className="ms-auto nav-app ps-sm-2 p-lg-0">
            <Nav.Link ><Link className='   active ' to="/Home" ><span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   >Home</span></Link></Nav.Link>
            <Nav.Link ><Link className='ps-lg-4 active' to="/About"><span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   >About</span></Link></Nav.Link>
            <Nav.Link><Link className='ps-lg-4 active ' to="/Products"><span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   > Products </span></Link></Nav.Link>
            <NavDropdown className='ps-lg-4 active' title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link className='active ' to="/project"> <span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   >Project</span></Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className=' active' to="/Features">Features</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link className=' active' to="/Our">Our Team</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link className='ps-lg-4  active' to="/Service"><span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   >Service </span></Link></Nav.Link>
            <Nav.Link> <Link className='active   ms-lg-4 ' to="/Contact"><span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   >Contact </span></Link></Nav.Link>
            <Nav.Link> <Link className='btn  text-white bg-Primary me-lg-4 ms-lg-4   pt-0 ' to="/Contact"><span data-bs-Toggle="collapse" data-bs-target=".navbar-collapse.show"   >Contact </span></Link></Nav.Link>
          </Nav>
        
                  
       
        </div>
        
    </Navbar>
    <Outlet/>
    

    </>
  )
}
export default NavbarApp ;