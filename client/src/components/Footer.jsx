import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="foot">
            <div className="">
            <NavLink className={"contact center underline"} to="/contact">Contact Us</NavLink>

            </div>
            <div className="copyright center">
                Copyright @ AG
            </div>
            <div className="aboutus center">
            <NavLink className={"aboutus center underline"} to="/about">About Us</NavLink>

            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
