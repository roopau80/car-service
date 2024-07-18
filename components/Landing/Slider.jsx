import React from 'react';
// import { service } from '../Data/services';
import ServiceTiming from './Services/ServiceTiming';

const Slider = () => {
  return (
    <section className="">
      <div className="container-fluid">
          <div className="row ">
            <div className="foodimage sticky-top col-md-12 col-sm-12">
              <div className="menutext">
              <h2 class="  text-white">Services</h2>
            <h6 class="  text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Aliquid
              labore
              maiores totam omnis cumque voluptates<br/> accusantium sapiente architecto, dolorem beatae!
            </h6>
                <ServiceTiming />

              </div>
            </div>
          </div>
    
      </div>
    </section>
  );
}

export default Slider;
