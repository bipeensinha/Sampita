import React from 'react'
import { Link } from "react-router-dom"

function Career() {
    return (
        <div>
            <section className="w3l-about-breadcrum">
				<div className="breadcrum-bg py-sm-5 py-4">
					<div className="container py-lg-3">
						<h2>Career</h2>
						<p><Link to="/" >Home</Link> / Career</p>
					</div>
				</div>
			</section>
            <br />
            <br />
            <section className="w3l-content-with-photo-4">
                <div id="content-with-photo4-block" >
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="cwp4-text col-lg-6">
                            <h2>Inviting Working Professional to Join TechPledge</h2>
                                <p>TechPledge is founded with a promise to make Tech a force for good and ensure responsible and sustainable Tech leadership. It’s more then an 
                                    organization created and a commitment to driving a new direction in technology.

                                </p>
                                <p>Everyone at TechPledge are working for a mission, not just doing a job, because our ecosystem runs on Talent, Passion, Ingenuity.</p>
                                        <p>If you can relate, then you’re in the right place. By joining  team techpledge , you’ll use your skills and domain expertise to transform careers of millions of people. Together, we will impact lives.</p>
                                        <p>We welcome passionate people from different industries & training organizations  as part time or freelance  Just email ail your resume with interest area to: <b>info@lydiapainting.com</b></p>

                               
                            </div>
                            <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                                <br />
                                <img src="assets/images/s4.jpg" className="img-fluid" alt="Best Azure Online Training" />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                                <br /><br />
            <section className="w3l-features-1">
                <div className="features py-12">
                    <div className="container pb-5">
                        <div className="fea-gd-vv row ">
                            <div className="float-lt feature-gd col-lg-10 col-sm-6">
                                <div className="icon-info"> <br />
                                    <div>
                                        <div className="elfsight-app-115b8f28-9f94-44b8-84cb-c1f650522422"></div>
                                    </div>

                                    <br />
                                    <div>
                                        <div className="elfsight-app-c7c15687-73d8-4438-b5d8-efc1d180ee46"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Career
