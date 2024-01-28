import React from 'react'
import { useAuth } from '../contextStore/authContext'

const About = () => {
  const {user}=useAuth();
  return (
    <>
        <h1>Hello {user.username}</h1> 
    </>
  )
}

export default About
