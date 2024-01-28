import React, { useEffect, useState } from 'react'
import { useAuth } from '../contextStore/authContext'
import {Link} from "react-router-dom";

const AdminUser = () => {
  const [userData, setUserData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/user", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken
        }
      })

      // console.log(res_data);
      if (response.ok) {
        const res_data = await response.json();
        setUserData(res_data.message)
        console.log(userData);

      }
    } catch (error) {
      console.log("Err", error);
    }
  }

  const deleteItem=async(id)=>{
    const response=await fetch(`http://localhost:5000/admin/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: AuthorizationToken
      }
    })
    if(response.ok){
      const msg=await response.json();
      console.log(msg);
      getUserData();
    }
    
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
        <div className="t-container">
          <table className='t-box'>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Updation</th>
              <th>Deletion</th>
            </thead>

            {userData.map((curEle, index) => {
              return (<tr key={index}>
                <td>{curEle.username}</td>
                <td>{curEle.email}</td>
                <td>{curEle.phone}</td>
                <td><Link to={`/admin/users/${curEle._id}/edit`}>Edit</Link></td>
                <td><button onClick={()=>{deleteItem(curEle._id)}}>Delete</button></td>
              </tr>)
            })}

          </table>
        </div>
    </>
  )
}

export default AdminUser
