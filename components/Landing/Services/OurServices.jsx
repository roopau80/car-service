import React from 'react';
import HowItWorks from './HowItWorks';
import Faq from './Faqs';
import Form from './Form';
import '../css/style.css';
import { ourservices } from '../../Data/ourservices';
// import generalser from '../../../assets/images/generalservice.png'

const OurServices = () => {
  return (
    <div className="container-fluid d-flex">
      <div className="col-7">
        <h2 className="our-service text-center">Our Services</h2>
        <div className="row" >
          {ourservices.map((service) => (
            <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={service.id}>
              <div className="servicecard card">
                <div className="card-body">
                  <div className="card-img-top">
                    <img className="serviceimg" src={service.image} alt={service.title} />
                    <a className="nav-link fw-bold text-black text-center">{service.title}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* HOW IT WORKS */}
        <HowItWorks />
        {/* FAQS */}
        <Faq />
      </div>
      {/* FORM */}
      <Form />
    </div>
  )
}

export default OurServices;
