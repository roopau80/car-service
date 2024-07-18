import React from 'react';
import img from '../../assets/images/about2.jpg'

const Contact = () => {
    return (
        <>
            <section className="">
                <div className="containe-fluid ">
                    <div className="row ">
                        <div className='contact-image col-lg-12 col-md-12 col-sm-12'>
                            {/* <img className='foodimage' src={img} /> */}
                            <div className="contact-text mt-5 ">
                                <h2 className="text-white ">Contact Us</h2>
                                <h6 className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aliquid
                                    labore
                                    maiores totam omnis cumque voluptates<br /> accusantium sapiente architecto, dolorem beatae!
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- CONTACT US --> */}
                <section>
                    <div className="container">
                            <h3 className="text-center mt-5">Contact Us</h3>
                            <form className="contact-form">
                                <div className="row ">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <label for="exampleInputName1" className="form-label">Enter Your Name</label>
                                        <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <label for="exampleInputName1" className="form-label">Enter Your Email</label>
                                        <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <label for="exampleInputName1" className="form-label">Enter Phone Number</label>
                                        <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-5 contact">
                                        <button type="submit" className="btn contact-btn">Submit</button>

                                    </div>

                                </div>
                            </form>

                    </div>
                </section>
            </section></>
    )
}

export default Contact