import React from 'react';
import { faq } from '../../Data/faq';

const Faqs = () => {
  return (
    <div className="container-fluid back mt-5 faqs-questions">
      <div className="row">
        <h4 className="faqs text-center fw-bold fs-3">Frequently Asked Questions (FAQs)</h4>
      </div>
      <div className="container">
        <div className="accordion quest" id="accordionExample">
          {faq.map((ele, i) => (
            <div className="accordion-item" key={ele.id3}>
              <h2 className="accordion-header" id={ele.id3}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${ele.id3}`}
                  aria-expanded={i === 0} 
                  aria-controls={`collapse-${ele.id3}`}
                >
                  {ele.title}
                </button>
              </h2>
              <div
                id={`collapse-${ele.id3}`}
                className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} 
                aria-labelledby={ele.id3}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{ele.discription}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
