import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg'

const Footer = () => {
  return (
    <>
      <section className="footer bg-black ">
        <div className="container ">
          <img className="logo mt-2" src={logo} alt="" />
          <p className="mt-2"><i className="fontawesome mx-3 fa-brands fa-2x fa-facebook"></i> 
                <i className="fontawesome mx-3 fa-brands fa-2x fa-square-instagram"></i><i className="fontawesome mx-3 fa-brands fa-2x fa-square-x-twitter"></i></p>
          <div className="row   mt-5">
            <div className='col-lg-3 col-md-6 footer-text'>
              <div className=" ">
                <h3 className="text-white ">Poular Brands</h3>
                <div className='footer-head-text'>
                <p className="text-white">Maruthi Suzuki</p>
                <p className="text-white">tata</p>
                <p className="text-white">BMW</p>
                <p className="text-white">Honda</p>
                <p className="text-white">Mahindra</p>
                <p className="text-white">Access</p>
                <p className="text-white">Hyundai</p>
                <p className="text-white">Nissan</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 footer-text'>
              <div className=" ">
                <h4 className="text-white">About Us</h4>
                <div className='footer-head-text'>
                <ul className="footer-links navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="text-white nav-link active " aria-current="page" to="/">Home</Link>
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
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 footer-text'>
              <div className=" ">
                <h4 className="text-white"> Service Areas Near You</h4>
                <div className='footer-head-text'>

                <p className="text-white">Banglore</p>
                <p className="text-white">Mysore</p>
                <p className="text-white">Belgaum</p>
                <p className="text-white">Pune</p>
                <p className="text-white">Mumbai</p>
                <p className="text-white">Dharwad</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 footer-text'>
              <div className=" ">
                <h4 className="text-white"> Reach Us</h4>
                <p className='fontawesome-icons footer-head-text'><i className="fontawesome mx-3 fa-brands fa-2x fa-facebook"></i> 
                <i className="fontawesome mx-3 fa-brands fa-2x fa-square-instagram"></i><i className="fontawesome mx-3 fa-brands fa-2x fa-square-x-twitter"></i></p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- COPY RIGHT --> */}
      <div className="row bg-dark opacity-75">
        <p className="text-center text-white pt-3">@ 2016-2022 BEST CAR SERVICE LIMITED</p>

      </div>

    </>
  )
}

export default Footer