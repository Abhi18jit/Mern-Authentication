import React, { useContext, useState } from 'react'
import loginimg from "../images/login.png"
import { useAuth } from '../contextStore/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Login = () => {



  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const { storeToken } = useAuth();
  const Navigate = useNavigate()

  const getDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    })
  }
  const submitForm = async (e) => {
    e.preventDefault();
    try {

      // console.log(userDetails);
      const response = await fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
      });
      const res_data_json = await response.json();
      // console.log(response);
      if (response.ok) {
        // console.log(res_data_json.token);
        storeToken(res_data_json.token);
        Navigate("/");
        toast.success(res_data_json.message);
      }
      else {
        res_data_json.extraDetails ? toast.error(res_data_json.extraDetails) : toast.error(res_data_json.message);
        
        setLoginDetails({
          email: "",
          password: ""
        })
      }
    } catch (error) {
  console.log("login", error);
}

  }

return (
  <>
    <section className='container main-hero'>
      <div className="hero">
        <div className="left-img">
          <img src={loginimg} alt="" height="300" width="400" />
        </div>

        <div className="form-section" style={{ justifyContent: "center", gap: "3rem" }}>
          <h3 className="heading">Login Now</h3>
          <form className='form' style={{ gap: "1rem" }} onSubmit={submitForm}>

            <label htmlFor="email">Email-Id:</label>
            <input type="email" id='email' placeholder='Enter your Email' onChange={getDetails} value={loginDetails.email} name='email' />

            <label htmlFor="password">Password:</label>
            <input type="password" id='password' placeholder='Enter your Password' onChange={getDetails} value={loginDetails.password} name='password' />
            <input type="submit" id="btn" value="Login" />

          </form>
        </div>
      </div>
    </section>
  </>
)
}

export default Login
