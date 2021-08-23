import React from 'react'
import CardsTranning from '../CardsTranning';
import CardsTranning1 from '../CardsTranning1';
import CardsTranning2 from '../CardsTranning2';
import CardsTranning3 from '../CardsTranning3';
import CardsTranning4 from '../CardsTranning4';
import CardsTranning5 from '../CardsTranning5';
import CardsTranningmcp from '../CardsTranningmcp';
import CardsTranning6 from '../CardsTranning6';
import Form15 from '../Form15';
import Course from '../Course';
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom"

function ServerAdministratorRole() {
    return (
        <div>
          <Helmet>
        		<title>Best MCSE & RHCE Certification Training</title>
      		</Helmet>
          <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Server Administrator Role</h2>
                <p><Link to="/" >Home</Link> / Certification</p>
              </div>
            </div>
          </section>

          <section className="w3l-content-with-photo-4">
              <div id="content-with-photo4-block" > 
                  <div className="container py-md-5">
                      <div className="cwp4-two row">
                          <div className="cwp4-text col-lg-6">
                          <p>
                              TechPledge Job  Based Training is especially curated program where candidate will provide the training on Live Environment and all essential skills like hands on experience of various Server Technologies like Windows Server , Linux Server, VMWare  , Database Server  which is mostly used by company. Top Year 2021 Updated DevOps  Level Online Courses help you to reach your goal with 100% Guaranteed
                              TechPledge  Offers Various  levels of Server Administrator  Training with Hands-On Live Projects and Certifications for different roles in cloud environments.
                          </p>

                                <p><b>The Below Certification designed as per unique specialty a person need to prove their credential. </b></p>
                              {/* <ul className="cont-4">
                                  <li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
                                  <li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
                                  <li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
                                  <li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
                              </ul> */}
                          </div>
                          <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <img src="assets/images/y1.jpg" className="img-fluid" alt="Kubernetes" />
                          </div>
                          <div>
                          
                            <div className="elfsight-app-3abf5bc1-7fa1-4a98-8225-9d2b092fc2d1"></div>
                            </div>
                      
                      </div>
                  </div>
              </div>
          </section>
          <div> <Course /></div>
          <br />
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>Server Administrator Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranningmcp title={`Microsoft Engineer`} certificate={`Microsoft System Engineer`} examcode={`MS-70-740/41`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/MCSA-2019.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning4 title={`VMware Administrator`} certificate={`VMware System Administrator`} examcode={`1V0-701`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`605`} pdfURL={`assets/images/System Administration Role/VMware-vSphere.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning5 title={`Linux Administrator`} certificate={`Linux System Administrator`} examcode={`RHCSA-EX200`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/Linux Admin.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                      </div>  
              
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning1 title={`Messaging Administrator`} certificate={`Messaging Administrator`} examcode={`MS-70-345`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/EXchange2016.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning2 title={`Team Administrator`} certificate={`Microsoft Team Administrator`} examcode={`MS 700`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/MS-Team.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning5 title={`SharePoint Administrator`} certificate={`SharePoint Administrator`} examcode={`MS 70-339`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/MS-SharePoint.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                      </div>  
                      <hr/>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning6 title={`Server Administrator Role`} certificate={`VMware System Administrator`} examcode={`1V0-701`} tranhrs={`36 Hr`} exmpre={`6 hr`} price={`705`} pdfURL={`assets/images/System Administration Role/VMware-vSphere.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	                       
                      </div>                        
                  </div>
              </div>     
            </section>
            <section className="w3l-features-1">
                <div className="container pb-5">
                  <p><b>Job Based Training</b></p>
                          <p>Every Candidate get  trained on Different Job Profile Like Helpdesk , System Admin, Cloud Admin , Architect , Software Dev , Database Analyst, Linux System Admin etc based on their interest , expectance and Profile .</p>
                          <p><b>Customer Immersion Program </b></p>
                          <p>6 Hours Live walkthrough of  complete Live Production Infrastructure with full setup of Tools and services  like 
                            <b> AD, Microsoft  SQL , MySQL, Microsoft  Exchange, File Server , System Center , SharePoint , Veritas Backup , Ticketing Tool , ADFS  and   DevOps Tool  Like Jenkins , Ansible , Docker , AWS Code Deploy , AWS Code Pipeline , AWS Code Deploy and AWS CLI </b>and Development Environment with Maven, Visual Studio and Python. 
                                The Complete Setups is using 100 of PowerShell & Linux Script with 237 CI/CD scripts (Jason, Yamal) and based on VMware and Hyper-V private Cloud .
                          </p>
                          <br />                 
                   <br />                 
                  <div>
                  
                  <p><h1>Explore Our Other Popular Courses
                    <div><Form15 /></div></h1></p>
                </div>
                          
                </div>
            </section>
        </div>
    )
}

export default ServerAdministratorRole
