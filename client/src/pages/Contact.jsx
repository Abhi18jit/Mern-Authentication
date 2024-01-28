import React, { useEffect, useState } from 'react'
import contactimg from "../images/cont.png"
import { useAuth } from '../contextStore/authContext';


const Contact = () => {

  const [contactDetails,setContactDetails]=useState({
    username:"",
    email:"",
    message:""
  });
  const [userData,setUserData]=useState(true);

  const {user}=useAuth();
  // console.log(user.username);
  // console.log(userData);

  if(user && userData){
    setContactDetails({
      username:user.username,
      email:user.email,
      message:""
    })
    setUserData(false);
  }

  

  const getContact=(e)=>{
    const {name,value}=e.target;
    setContactDetails({
      ...contactDetails,
      [name]:value
    })
  }

  const submitForm=async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactDetails)
      });

      if(response.ok){
        const message=await response.json();
        // console.log("Hi",message);
        alert("message sent");
        setContactDetails({
          username:user.username,
          email:user.email,
          message:""
        })
      }
    } catch (error) {
      console.log("contact",error);
    }

  }

  
  



  return (
    <>
        <section className='container main-hero'>
      <div className="hero">
        <div className="left-img">
          <img src={contactimg} style={{border:"0", borderRadius:"0px"}} alt="" height="250" width="250" />
        </div>
      
      <div className="form-section">
        <h3 className="heading">Contact Form</h3>
        <form className='form' onSubmit={submitForm}>
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' placeholder='Enter your username' name='username' value={contactDetails.username} onChange={getContact} />
          <label htmlFor="email">Email-Id:</label>
          <input type="email" id='email' placeholder='Enter your Email' name='email' value={contactDetails.email} onChange={getContact}  />
          <label htmlFor="message">Message:</label>
          <textarea rows="8" id='message' style={{fontFamily:"verdana"}} placeholder='Enter your message' name='message' value={contactDetails.message} onChange={getContact} />
          
          <input type="submit" id="btn" placeholder='Submit' />

        </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
