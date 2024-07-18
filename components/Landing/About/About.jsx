import React from 'react';
import img from '../../../assets/images/car1.jpg'

const About = () => {
  return (
    <>
      <div className="containe-fluid ">
        <div className="row ">
          <div className='contact-image col-lg-12 col-md-12 col-sm-12'>
            {/* <img className='foodimage' src={img} /> */}
            <div className="contact-text mt-5 ">
              <h2 className="text-white ">About Us</h2>
              <h6 className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aliquid
                labore
                maiores totam omnis cumque voluptates<br /> accusantium sapiente architecto, dolorem beatae!
              </h6>
            </div>

          </div>
        </div>
        <div class="row pt-5 about-data">

          <div class="col-lg-6 col-md-6 col-sm-6 mt-5">
            <img className='about-image' src={img} alt="" width="550px" height="450px"/>

          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 mt-5">
            <h4 class="about fs-3">About US</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo aspernatur nesciunt, eius
              fugit in similique quasi, facere, iure esse perspiciatis ex possimus! Laborum tempora molestiae iste
              magni corrupti qui alias repellendus at vel ea quo velit culpa esse magnam, facere asperiores dolor
              odit. Sit fugit quis, eligendi voluptatum corporis architecto velit assumenda perspiciatis atque
              sapiente aliquid, saepe sed, reprehenderit quo in porro labore soluta ullam sint? Placeat dolorem
              similique aut! Ullam molestias, quis nesciunt nobis illo repellendus deserunt est?s</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo aspernatur nesciunt, eius
              fugit in similique quasi, facere, iure esse perspiciatis ex possimus! Laborum tempora molestiae iste
              magni corrupti qui alias repellendus at vel ea quo velit culpa esse magnam, facere asperiores dolor
              odit. Sit fugit quis, eligendi voluptatum corporis architecto velit assumenda perspiciatis atque
              sapiente aliquid, saepe sed, reprehenderit quo in porro labore soluta ullam sint? Placeat dolorem
              similique aut! Ullam molestias, quis nesciunt nobis illo repellendus deserunt est?s</p>

          </div>




        </div>
      </div>
      {/* <div class="container"> */}
        


      {/* </div> */}
    </>
  )
}

export default About