import React from 'react'
import { Link } from "react-router-dom"

function News() {
    return (
        <div>

            <section className="w3l-price-2" id="news">
                <div className="price-main py-5">
                    <div className="container py-md-3">
                        <div className="pricing-style-w3ls row py-md-5">
                            <div className="pricing-chart col-lg-6">
                                <h3 className="">Our Speciality Course</h3>
                                <div className="tatest-top mt-md-5 mt-4">
                                    <div className="price-box btn-layout bt6">
                                        <div className="grid grid-column-2">
                                            <div className="column-6">
                                                <img src="assets/images/certifiedcloudprofessional.jpg" alt="Google" className="img-fluid" />
                                            </div>
                                            <div className="column1">

                                                <div className="job-info">
                                                    <h6 className="pricehead"><a href="#">TPCS Cloud Master program </a></h6>
                                                    {/* <h5>April 25, 2020</h5> */}
                                                    <p>
                                                    TechPledge Cloud Architect Master’s Program will build your Microsoft Core Service Admin, Linux Admin, Azure Cloud Architect, AWS Cloud Admin with DevOps expertise from the ground up to Kickstart your Career
                                                </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="price-box btn-layout bt6 top-middle-1">
                                        <div className="grid grid-column-2">
                                            <div className="column-6">
                                                <img src="assets/images/certified-oracle-admin.jpg" alt="GCP" className="img-fluid" />
                                            </div>
                                            <div className="column1">
                                                <div className="job-info">
                                                    <h6 className="pricehead"><a href="#">
                                                        TPCS Oracle Database Professional</a></h6>
                                                    {/* <h5>March 25, 2020</h5> */}
                                                    <p>
                                                    TechPledge Oracle DBA course is unique in all aspects Technical as well as real time-oriented. We teach both basic core concepts with advanced. You will do 30+ labs during the entire session. There will be a project matching your core interest at the end. 
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-box btn-layout bt6">
                                        <div className="grid grid-column-2">
                                            <div className="column-6">
                                                <img src="assets/images/certified-devops-prof.jpg" alt="Best Azure Training" className="img-fluid" />
                                            </div>
                                            <div className="column1">

                                                <div className="job-info">
                                                    <h6 className="pricehead"><a href="#">
                                                        TPCS DevOps Professional  </a></h6>
                                                    {/* <h5>February 25, 2020</h5> */}
                                                    <p>
                                                    At TechPledge, we provide the training which is always up-to-date in line with the DevOps Skills required by the industry and recommended by Various DevOps Organization. There are more than 30+ labs in the entire training program.
                                        </p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="text-right mt-4">
                                    <a href={`assets/images/speciality.pdf`} className="btn btn-secondary btn-theme2">View All </a>
                                </div>
                            </div>
                            <div className="w3l-faq-page col-lg-6 pl-3 pl-lg-5 mt-lg-0 mt-5">
                                <h3 className="">TechPledge Job Assist</h3>
                                <div className="events-top mt-md-5 mt-4">
                                    <div className="events-top-left">
                                        <img src="assets/images/special-team.jpg" alt="Job Placement" className="img-fluid"  />
                                        {/* <div className="icon-top">
                                        <h3>20</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                                    </div>
                                    <div className="events-top-right">
                                        <h6 className="pricehead">
                                            <a href="#">Permanent Placement</a>
                                        </h6>
                                        <p className="mb-2 mt-3">
                                        TechPledge Consulting has a specialized team, which assists in  Permanent Recruitment workforce solutions. We partner with many hr consultancies to help you in early screening and qualify. There will be no charge for this service because we feel it our duty. 
                                    </p>
                                        {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                                    </div>
                                </div>
                                <div className="events-top mt-4">
                                    <div className="events-top-left">
                                        <img src="assets/images/special-team-assit.jpg" alt="Placement" className="img-fluid" />
                                        {/* <div className="icon-top">
                                        <h3>25</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                                    </div>
                                    <div className="events-top-right">
                                        <h6 className="pricehead">
                                            <a href="#">	Contract Placement </a>
                                        </h6>
                                        <p className="mb-2 mt-3">
                                        We Assist a candidate to get placed as a Contract employee in companies for a specific job role. Our agreement contains clear agreement terms. TechPledge Consulting Rated No#1 by its employee (Source : Glassdoor), consultant, contracted employee for their on-time payment. We will pay the agreed remuneration within Seven days of getting payments from the client.
                                    </p>
                                        {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                                    </div>
                                </div>
                                <div className="text-right mt-4">
                                    {/* <a className="btn btn-secondary btn-theme2" href="#"> View All</a> */}


                                    <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="./JobAssistance" >View All</Link>

                                </div>
                            </div>
                        </div>

                        {/*'test '*/}
                        <h3 className="">TechPledge Live Industrial Project </h3>
                       
                        <div className="events-top mt-4">
                                    <div className="events-top-left">
                                        <img src="assets/images/101.jpg" alt="React Native Training" className="img-fluid" />
                                        {/* <div className="icon-top">
                                        <h3>25</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                                    </div>
                                    <div className="events-top-right">
                                        <h6 className="pricehead">
                                            <a href="#">Live Cloud Migration Project </a>
                                        </h6>
                                        <p className="mb-2 mt-3">
                                        Most of the companies nowadays transforming their way of doing business. Elasticity, agility, and digitalization have now become the most buzz words within the industry. Cloud plays a vital role in this transformation journey.  We help you Experience the Migration of Server, Database to Azure and AWS Cloud with Full lifecycle, Assessment, Planning, Proposal Design, Costing, Project Plan, HLd, LLD 
                                        with full hands-on experience of Migrating our Live production servers to Cloud.
                                    </p>
                                        {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                                    </div>
                                </div>
                               
                            
                                <div className="events-top mt-4">
                                    <div className="events-top-left">
                                        <img src="assets/images/102.jpg" alt="Azure Migration Project" className="img-fluid" />
                                        {/* <div className="icon-top">
                                        <h3>25</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                                    </div>
                                    <div className="events-top-right">
                                        <h6 className="pricehead">
                                            <a href="#">	Live Real Code  DevOps Project  </a>
                                        </h6>
                                        <p className="mb-2 mt-3">
                                        Do you aspire to become a next-gen DevOps Consultant? Subscribe to our DevOps Project around AWS/Azure DevOps, Jenkins, Docker, Ansible, Linux, Git, Cloud. Build real-world tech-projects with real code from various industry domains. Our Various DevOps Track is carefully curated to help you to upskill effectively and prepare you for success.
                                         Realize your true potential as a next-gen DevOps Consultant.
                                    </p>
                                        {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                                    </div>
                                </div>
                                
                         

                                <div className="events-top mt-4">
                                    <div className="events-top-left">
                                        <img src="assets/images/103.jpg" alt="AWS Migration Project" className="img-fluid" />
                                        {/* <div className="icon-top">
                                        <h3>25</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                                    </div>
                                    <div className="events-top-right">
                                        <h6 className="pricehead">
                                            <a href="#">	GDPR Cloud Security Project </a>
                                        </h6>
                                        <p className="mb-2 mt-3">
                                            
                                        Architecting secure network solutions for a cloud is a great challenge for architects and network administrators. In this carefully curated program, you Design a GDPR Networking Strategy for Microsoft Azure. 
                                    </p>
                                        {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                                    </div>
                                </div>
                                <div className="text-right mt-4">
                                    {/* <a className="btn btn-secondary btn-theme2" href="#"> View All</a> */}


                                    <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="./about#portfolio/924c670b-b894-49ff-905b-6a04e55b6175" >View All</Link>

                                </div>
                           


                        

                                
                                
                        
                    </div>
                    <div className="container py-md-3">
                        <div className="elfsight-app-6909a4b7-e4d4-457a-9674-5d366b92adc4"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News
