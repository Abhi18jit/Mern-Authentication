import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
        
        <header>
          <nav>
            <ul style={{display:"flex", flexDirection:"column"}}>
              <li> <NavLink to="/admin/users">users </NavLink></li>
              <li> <NavLink to="/admin/contact">contact </NavLink></li>
              <li> <NavLink to="/admin/about">about </NavLink></li>
              <li> <NavLink to="/admin/help">help </NavLink></li>
            </ul>
          </nav>
        </header>
        <Outlet/>
    </>
  )
}

export default AdminLayout
