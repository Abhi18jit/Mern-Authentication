import React, { useEffect, useState } from 'react'
import { useAuth } from '../contextStore/authContext';

const AdminContact = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/contact", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken
        }
      });
      // console.log(response);
      if (response.ok) {

        const resData = await response.json();
        // console.log(resData.message);
        setContactData(resData.message);
        console.log(contactData);
      }
    } catch (error) {
      console.log("ERrr", error);
    }
  }

  const deleteItem = async (id) => {
    // console.log("Inside");
    try {
      const response = await fetch(`http://localhost:5000/admin/contact/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken
        }
      })
      if (response.ok) {
        const msg = await response.json();
        console.log(msg);
        getContactData();
      }
    } catch (error) {
      console.log("Errrrr",error);
    }

  }


  useEffect(() => {
    getContactData();
  }, []);


  return (
    <>

      
        <table className='t-box'>
          <thead>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
            <td>Deletion</td>
          </thead>

          {contactData.map((curEle, index) => {
            return (<tr key={index}>
              <td>{curEle.username}</td>
              <td>{curEle.email}</td>
              <td>{curEle.message}</td>
              <td><button className='del-btn' onClick={() => { deleteItem(curEle._id) }} >Delete</button></td>
            </tr>)
          })}

        </table>
    </>
  )
}

export default AdminContact
