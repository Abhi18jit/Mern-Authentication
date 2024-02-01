import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Service from './pages/Service';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import AdminContact from './components/AdminContact';
import AdminEdit from './pages/Admin-Edit';
import AdminLayout from './components/layouts/Admin-Layout';
import AdminUser from './components/AdminUser';


const App = () => {
  


  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/logout' element={<Logout />} />


          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          

          
            <Route path="/admin">
              <Route path="users" element={<AdminLayout Content={<AdminUser/>}/>} />
              <Route path="contact" element={<AdminLayout Content={<AdminContact/>} />} />
              <Route path="users/:id/edit" element={<AdminLayout Content={<AdminEdit/>} />} />
            </Route>
            


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
