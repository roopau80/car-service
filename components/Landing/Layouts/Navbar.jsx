import React from 'react';
import { Link } from "react-router-dom";
import  '../css/style.css'
import logo from '../../../assets/images/logo.jpg'

const Navbar = () => {
  return (
    <>
 <nav className="nav-bar fixed-top navbar navbar-expand-lg   ">
    <div className="container-fluid">
      <img className="logo" src={logo} alt="" to='home'/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className=" navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link className=" text-white nav-link active  " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white nav-link " to="services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white nav-link " to="contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white nav-link " to="about">About Us</Link>
          </li>

          <li className="nav-item">
            <Link className="text-white nav-link " to="book">Book Now</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn navbar-btn" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
      


    </>
  )
}

export default Navbar