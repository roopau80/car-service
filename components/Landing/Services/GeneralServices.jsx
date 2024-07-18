import React from 'react';
import { generalservices } from '../../Data/generalservices';
import img from '../../../assets/images/tyress.jpg';

const GeneralServices = () => {
    return (
        <>
            <section className="general-services mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">    
                            <div className="row">
                                {generalservices.map((general) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-4 " key={general.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-img-top">
                                                    <img className="general-serviceimg" src={general.image} alt="Service" />
                                                    <a className="nav-link fw-bold text-black text-center">{general.title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <img className='general-img' src={img} alt="Tyres Service" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GeneralServices;
