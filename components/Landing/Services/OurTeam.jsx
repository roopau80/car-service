import React from 'react';
import { ourteam } from '../../Data/ourteam';

const OurTeam = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <h4 className="text-center fw-bold fs-3 my-5">Our Team</h4>
                        {
                            ourteam.map((ourteam) => (
                                <div className=" our-card flow col-lg-3 col-md-6 col-sm-12 mb-4" key={ourteam.id}>
                                    <img className="our-team" src={ourteam.image} alt="" />
                                    <div className="text-center">
                                        <div className="team card mx-2" >
                                            <div className="card-body">
                                                <p className="fw-bold">{ourteam.title}</p>
                                                <p>{ourteam.work}</p>
                                                <p>{ourteam.telnum}</p>
                                            </div>
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

export default OurTeam