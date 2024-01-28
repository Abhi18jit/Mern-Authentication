import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useAuth} from "../contextStore/authContext";

const AdminEdit = () => {
    const [updateData,setUpdateData]=useState({
        username:"",
        email:"",
        phone:""
    });
    const {AuthorizationToken}=useAuth();
    const Navigate=useNavigate();
    const id=useParams();
    // console.log(id.id);

    const changeValue=(e)=>{
        // const name=e.target.name;
        // const value=e.target.value;
        const {name,value}=e.target;

        setUpdateData({
            ...updateData,
            [name]:value
        })

    }
    
    
    const getSingleUserData=async()=>{
        try {
            const response=await fetch(`http://localhost:5000/admin/user/${id.id}`,{
                method:"GET",
                headers:{
                    Authorization:AuthorizationToken
                }
            });
            const data=await response.json();
            if(response.ok){
                // console.log(data);
                setUpdateData(data[0]);
                // console.log(updateData.username);
            }
        } catch (error) {
            console.log("ErrOr",error);
        }
        
        
    }

    const updateForm=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`http://localhost:5000/admin/user/${id.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:AuthorizationToken
                },
                body:JSON.stringify(updateData)
            })
            if(response.ok){
                alert("Update Successful");
                Navigate("/admin/users")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleUserData();
    },[]);

    return (
        <>
            <section className='container main-hero'>
                <div className="hero">


                    <div className="form-section">
                        <h3 className="heading">Update Form</h3>
                        <form className='form' onSubmit={updateForm}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id='username' placeholder='Enter your username' name='username' value={updateData.username}  onChange={changeValue}/>
                            <label htmlFor="email">Email-Id:</label>
                            <input type="email" id='email' placeholder='Enter your Email' name='email' value={updateData.email} onChange={changeValue}/>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id='phone' placeholder='Enter your phone' name='phone' value={updateData.phone} onChange={changeValue}/>
                            

                            <input type="submit" id="btn" placeholder='Submit' />

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminEdit
