import React from 'react';
// import call from '../../../assets/images/call.png';
import { homecontactus } from '../../Data/homecontactus';

const HomeContact = () => {
    return (
        <>
            <section className="contactus">
                <div className="container mt-5">
                        <h3 className="contact text-center">Contact Us</h3>
                    <div className="pb-5  row   ">
                        {
                            homecontactus.map((ele)=>(
                                <div className='col-lg-4 col-md-6 col-sm-6 text-center mb-2'key={ele.id}>
                                <div className="contact-us card mx-3 " style={{ width: 300 }}>
                                    <div className=" card-body">
                                        <h5 className="card-title text-muted"> {ele.title}</h5>
                                        <img src={ele.image} alt="" width="100px" height="90px" />
                                        <h4 className="num">{ele.desc}</h4>
                                       
                                    </div>
                                </div>
                            </div>

                            ))
                        }
                       
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContact