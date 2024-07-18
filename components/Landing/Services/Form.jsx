import React from 'react'

const Form = () => {
    return (
        <>
            <div className="col-lg-5 best-service-form top-0">
                <form className="select-form sticky-top mt-5">
                    <h5 className="best-service">Best Service</h5>
                    <div className="mb-3">
                        <div className="select ">
                            <label className="">Select Your City</label>
                            <select  defaultValue={'DEFAULT'} className="form-select">
                                <option selected>Choose...</option>
                                <option value="1">Belgaum</option>
                                <option value="2">Banglore</option>
                                <option value="3">Mysore</option>
                            </select>
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
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn form-btn">Book Now</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form