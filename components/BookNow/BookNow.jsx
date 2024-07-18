import React from 'react'

const BookNow = () => {
    return (
        <>
            <section className="">
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="book-image sticky-top col-lg-12 col-md-12 col-sm-12">
                            <div className="menutext">
                                <h2 className="  text-white">Book Now</h2>
                                <h6 className="  text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aliquid
                                    labore
                                    maiores totam omnis cumque voluptates<br /> accusantium sapiente architecto, dolorem beatae!
                                </h6>
                            </div>

                        </div>

                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h4 className="fw-bold fs-2">Contact Us</h4>
                                <p className="fs-6">MIG 295,Sridevi Residency,
                                    Rd No:4,KPHB Colony</p>
                                <p className="fs-6 "><i className=" fa fa-phone-square mx-2 " aria-hidden="true"></i>Contacts Us:+91
                                    6360653132</p>
                                <p className="pb-3 fs-6"><i className="fa fa-envelope mx-2 "
                                    aria-hidden="true"></i>Email:meeshotell@gmail.com</p>
                                <h3>Opening Hours</h3>
                                <p>Monday: 9AM - 10PM</p>
                                <p>Tuesday: 9AM - 10PM</p>
                                <p>wednesday: 9AM - 10PM</p>
                                <p>Thursday: 9AM - 10PM</p>
                                <p>Friday: 9AM - 10PM</p>
                                <p>Saturday: 9AM - 10PM</p>
                                <p>Sunday: 9AM - 10PM</p>
                                <p className='fontawesome-icons footer-head-text'><i className=" mx-3 fa-brands fa-2x fa-facebook"></i>
                                    <i className=" mx-3 fa-brands fa-2x fa-square-instagram"></i><i className=" mx-3 fa-brands fa-2x fa-square-x-twitter"></i></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 book-form">
                                <form>
                                    <h5 className="text-center txt">Best Service</h5>

                                    <div className="mb-3">
                                        <div className="col">
                                            <label className="">Select Your City</label>
                                            <select className="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Belgaum</option>
                                                <option value="2">Banglore</option>
                                                <option value="3">Mysore</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="">Select Your City</label>
                                            <select className="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Belgaum</option>
                                                <option value="2">Banglore</option>
                                                <option value="3">Mysore</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="">Select Car Model</label>
                                            <select className="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Alto</option>
                                                <option value="2">Swift</option>
                                                <option value="3">Zen</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>

                                        <button type="submit" className="btn book-btn">Book Now</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default BookNow