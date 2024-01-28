import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../contextStore/authContext'

const Navbar = () => {
    const { isLoggedIN } = useAuth();
    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        MERN Project
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li className="items">
                                <NavLink className={"items"} to="/">Home</NavLink>
                            </li>
                            <li className="items">
                                <NavLink className={"items"} to="/contact">Contact</NavLink>
                            </li>
                            <li className="items">
                                <NavLink className={"items"} to="/about">About</NavLink>
                            </li>
                            <li className="items">
                                <NavLink className={"items"} to="/service">Service</NavLink>
                            </li>

                            {isLoggedIN ? <li className="items">
                                <NavLink className={"items"} to="/logout">Logout</NavLink>
                            </li> :
                                <>
                                    <li className="items">
                                        <NavLink className={"items"} to="/login">Login</NavLink>
                                    </li>
                                    <li className="items">
                                        <NavLink className={"items"} to="/register">Register</NavLink>
                                    </li>
                                </>

                            }



                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
