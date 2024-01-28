import React, { useState } from 'react'
import registerimg from "../images/register.png"
import { useAuth } from '../contextStore/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const Navigate=useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    phone: "",
    email: "",
    password: ""
  });

  const {storeToken} = useAuth();

  const setDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  }
  const submitForm = async (e) => {
    e.preventDefault();
    // console.log("IN");
    try {

      // console.log(userDetails);
      const response = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
      });
      const res_data_json = await response.json();    //returns promise don't forgot to await
      console.log(res_data_json);
      console.log(response);

      if (response.ok) {

        
        storeToken(res_data_json.token);

        Navigate("/");
        toast.success("Registration Successful");

        setUserDetails({
          username: "",
          phone: "",
          email: "",
          password: ""
        })
      }
      else{
        res_data_json.extraDetails?toast.error(res_data_json.extraDetails):toast.error(res_data_json.message);
      }
    } catch (error) {
      console.log("register", error);
    }


  }

  return (
    <>
      <section className='container main-hero'>
        <div className="hero">
          <div className="left-img">
            <img src={registerimg} alt="" height="350" width="350" />
          </div>

          <div className="form-section" onSubmit={submitForm}>
            <h3 className="heading">Registration Form</h3>
            <form className='form'>
              <label htmlFor="username">Username:</label>
              <input type="text" id='username' placeholder='Enter your username' name='username' onChange={setDetails} value={userDetails.username} />
              <label htmlFor="email">Email-Id:</label>
              <input type="email" id='email' placeholder='Enter your Email' name='email' onChange={setDetails} value={userDetails.email} />
              <label htmlFor="phone">Phone No:</label>
              <input type="number" id='phone' placeholder='Enter your Phone' name='phone' onChange={setDetails} value={userDetails.phone} />
              <label htmlFor="password">Password:</label>
              <input type="password" id='password' placeholder='Enter your Password' name='password' onChange={setDetails} value={userDetails.password} />
              <input type="submit" id="btn" placeholder='Register Now' />

            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default Register
