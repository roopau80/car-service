import React from 'react';
import { servicetiming } from '../../Data/servicetiming';


const ServiceTiming = () => {
  const firstThreeItems = servicetiming.slice(0, 3);

  return (
    <div className="details container">
      <div className="card mb-4">
        <div className="row">
          {firstThreeItems.map((servtime) => (
            <div key={servtime.id} className="col-lg-4 col-md-4 col-sm-12 px-5">
              <h5>{servtime.title2}</h5>
              <hr />
              <p>{servtime.text1}</p>
              <p>{servtime.text2}</p>
              <p>{servtime.text3}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceTiming;
