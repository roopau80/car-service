import React from 'react';
import { howitworks } from '../../Data/howitworks';

const HowItWorks = () => {
  return (
    <section className="work">
      <div className="container-fluid">
      <div className="row how-it-works">
        <h2 className="works-how text-center py-4 text-white">How It Works</h2>
        <div className="row">
          {howitworks.map((ele) => (
            <div className="col-lg-6 col-md-12 d-flex  my-3" key={ele.id}>
              <div className="col-3">
                <img className="workimg" src={ele.image} alt="" width="80px" height="80px" />
              </div>
              <div className="col-9 worktext">
                <h5 className="mx-3">{ele.title}</h5>
                <p className="mx-3">{ele.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
     
    </section>
  );
}

export default HowItWorks;
