import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = ({ Content }) => {
  return (
    <>

      <div className="outer">
        <div className="out">
          <nav className='admin-link'>
            <ul className='admin-box'>
              <li> <NavLink className="admin-items" to="/admin/users">users </NavLink></li>
              <li> <NavLink className="admin-items" to="/admin/contact">contact </NavLink></li>
              <li> <NavLink className="admin-items" to="/admin/about">about </NavLink></li>
              <li> <NavLink className="admin-items" to="/admin/help">help </NavLink></li>
            </ul>
          </nav>
          {Content}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default AdminLayout
