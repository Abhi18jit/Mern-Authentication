import React from 'react'
import serviceimg from "../images/services.png"
import { useAuth } from '../contextStore/authContext'

const Service = () => {
  const {serviceData}=useAuth();
  console.log(serviceData);
  return (
    <>
        <section className="s-main-hero">
        <h1 className='service-heading'>Our Services</h1>
          <div className="contents">

          {serviceData.map((curEle,index)=>{
            const {Descripition,Provider,Price,Services}=curEle;
            return (<div className="cards" key={index}>
              <div >
                <img className="s-img" src={serviceimg} alt="image" width="250" />
              </div>
              <div className="s-details">
                <p className="s-items s1">{Services}</p>
                <p className="s-items s2">{Descripition}</p>
                <p className="s-items s2">{Price}</p>
                <p className="s-items s2">{Provider}</p>
              </div>
            </div>)
          })}

            
            
          </div>
        </section> 
    </>
  )
}

export default Service
