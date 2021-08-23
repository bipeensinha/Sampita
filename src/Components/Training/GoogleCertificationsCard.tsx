import React from 'react'
import Cards from '../Cards';
import Card1 from '../Card1';
import Card2 from '../Card2';
import Card3 from '../Card3';
import Card4 from '../Card4';
import Card5 from '../Card5';
import Cards11 from '../Cards11';
import Course from '../Course';
import Form15 from '../Form15';
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom"

function GoogleCertificationsCard() {
    return (
        <div>
          <Helmet>
        		<title>Best Google Architect Certification Training</title>
      		</Helmet>
          <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Google  Certification</h2>
                <p><Link to="/" >Home</Link> / Certification</p>
              </div>
            </div>
          </section>

          <section className="w3l-content-with-photo-4">
              <div id="content-with-photo4-block" > 
                  <div className="container py-md-5">
                      <div className="cwp4-two row">
                          <div className="cwp4-text col-lg-6">
                          <p>TechPledge Certification Based Training is especially curated program where candidate will provide the training on Live Environment and all essential skills like hands on experience of various Google  Technologies . Top Year 2021 Updated Google Online Courses help you to reach your goal with 100% Guaranteed
                            TechPledge  Offers Various  levels of Google Training with Hands-On Live Projects and Certifications for different roles in cloud environments.
                          </p>
                          <p><b>The Below Certification designed as per unique specialty a person need to prove their credential.</b></p>
                              <ul className="cont-4">
                                  <li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
                                  <li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
                                  <li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
                                  <li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
                              </ul>
                          </div>
                          <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <img src="assets/images/topics/GoogleCwertfication.jpg" className="img-fluid" alt="AWS DevOps" />

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
                  <h4>Google Certification</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards11 image="assets/images/1.jpg" title={`GCP Cloud Administrator`} certificate={`GCP Cloud Administrator`} examcode={`TPCS-GCP-01`} tranhrs={`32 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Google/GCP.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Card5 image="assets/images/1.jpg" title={`GCP Cloud Architect`} certificate={`GCP Cloud Architect`} examcode={`TPCS-GCP-03`} tranhrs={`32 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Google/GCP.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Card4 image="assets/images/1.jpg" title={`Docker Certified Associate`} certificate={`Docker Certified Associate`} examcode={`DCA`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/DevOps Certification/DCA.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                      </div>  
                      <hr />
                   
                      <div id="content-with-photo4-block" > 
                          <div className="container py-md-5">
                              <div className="cwp4-two row">
                                  <div className="cwp4-text col-lg-12">
                                  <p><b>TechPledge  Certification & Exams</b></p>
                                  <p>
                                  TechPledge  Certification is Accredited by all major Global Companies around the world. It increases the value of 
                                  your resume and you can attain leading job posts with the help of this certification in leading MNC’s of the world. 
                                  The certification is only provided after successful completion of our training and practical based projects.

                                  </p>
                                  <p><b>Google Certification & Exams</b></p>
                                  <p>
                                  Google Certification is generally gained by IT professionals to demonstrate Google cloud expertise and possess 
                                  technical knowledge on GCP . The IT pros need to pass one or more exams that Google Offers . To Know What is GCP 
                                  Certifications Contact us at info@lydiapainting.com
                                    </p>
                                    <br />                 
                   <br />                 
                  <div>
                  
                  <p><h1>Explore Our Other Popular Courses
                    <div><Form15 /></div></h1></p>
                </div>
                          
                                    
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

export default GoogleCertificationsCard
