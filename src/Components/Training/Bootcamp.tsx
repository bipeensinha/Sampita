import React from 'react'
import CardsTranning from '../CardsTranning';
import CardsTranning9 from '../CardsTranning9';
import CardsTranning7 from '../CardsTranning7';
import CardsTranning9a from '../CardsTranning9a';
import CardsTranning9b from '../CardsTranning9b';
import CardsTranning8 from '../CardsTranning8';
import Form15 from '../Form15';
import Course from '../Course';
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom"

function Bootcamp() {
    return (
        <div>
          <Helmet>
        		<title>TechPledge H20 Bootcamo </title>
      		</Helmet>
        <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>TechPledge H20 Bootcamp</h2>
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
                          TechPledge H20 Bootcamp is a rigorous, accelerated professional training program that teaches specific skills like DataScience, Machine Learning, Full Stack Development, DevOps, Cloudinbg Computing, etc quickly to students of all backgrounds. H20 boot camps are designed for speed and high-impact learning with live project-based assignments. 
                          Each learning module lasts four to five days and involves weekly homework assignments with set deadlines. H20 boot camps are a cost-effective, efficient, and effective way to improve your job-ready skills and job prospects. 
                         </p>
                          <p><b>The Below Bootcamp designed as per unique specialty a person need to prove their credential. </b></p>
                              {/* <ul className="cont-4">
                                  <li><span className="fa fa-check"></span>Testimonials: Highet Approval Ratings by Student.</li>
                                  <li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
                                  <li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
                                  <li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
                              </ul> */}
                          </div>
                              <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <img src="assets/images/topics/ES1.jpg" className="img-fluid" alt="Ansible" />
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
                  <h4>H20 Bootcamp</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                          <CardsTranning7 title={`Data Science Bootcamp`} certificate={`Data Science Engineer`} examcode={`TP-H20-DS07`} tranhrs={`300 hrs`} exmpre={`6 Hr`} price={`3650`} pdfURL={`assets/images/bootcamp/H20DS.pdf`} />
                             
                              
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                            <CardsTranning8 title={`Machine Learning Bootcamp`} certificate={`Machine Learning Engineer`} examcode={`TP-H20-ML06`} tranhrs={`150 Hr`} exmpre={`6 hrs`} price={`2270`} pdfURL={`assets/images/bootcamp/H20ML.pdf`} />
                          </div>					 
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>	
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning9 title={`Full Stack JS Developer`} certificate={`FullStack JS Developer`} examcode={`TP-H20-FS07`} tranhrs={`200 Hr`} exmpre={`6 Hr`} price={`2970`} pdfURL={`assets/images/bootcamp/H20FS.pdf`} />
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
                              <CardsTranning9a  title={`DevOps Automation Eng`} certificate={`DevOps Engineer`} examcode={`TP-H20-DA03`} tranhrs={`300 Hr`} exmpre={`6 Hr`} price={`3642`} pdfURL={`assets/images/bootcamp/H20DE.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                       
                      
                     
                      
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning9b  title={`Cloud Master Track`} certificate={`Cloud Architect`} examcode={`TP-H20-CM02`} tranhrs={`300 Hr`} exmpre={`6 Hr`} price={`3742`} pdfURL={`assets/images/bootcamp/H20CM.pdf`} />
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

export default Bootcamp
