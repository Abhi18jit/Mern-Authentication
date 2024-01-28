import React from 'react'
import homeimg from "../images/home.png"
import Service from './Service';

const Home = () => {
  return (
    <>
      <section className='home-section'>
        <div className="main-home">
          <div className="left-home">
            <h2>Welcome to MERN Project</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eligendi quae <br /> incidunt ex odio ratione iste neque illum omnis libero.</p>
          </div>
          <div className="right-home">
          <img src={homeimg} alt="" height="400" width="400" />

          </div>
        </div>

      </section>
      <Service/>
    </>
  )
}

export default Home
