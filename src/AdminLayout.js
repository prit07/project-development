import React from 'react'
import './admin.css'
import AdminHeader from './components/admin/AdminHader'
import { AdminSidebar } from "./components/admin/AdminSidebar"
import { AdminDashbord } from './components/admin/AdminDashbord'
import { AdminFooter } from './components/admin/AdminFooter'


export const AdminLayout = () => {
  return (
    <div>
      <div className='adminlayout-left'>
        <AdminSidebar />
      </div>
      <div className='adminlayout-right' >
        <AdminHeader />
        
      <AdminDashbord />
      </div>
    </div>
  )
}
