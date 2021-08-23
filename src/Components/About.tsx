import React from 'react'
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Helmet } from 'react-helmet'
import Player from './Player'

function About() {

	return (
		
		<div>
			 <Helmet>
        		<title>Best Online Azure Training</title>
				<meta name="description" content="Learn cloud and DevOps from the real-life consultant. We are masters in all the disciplines like Microsoft Azure Solution Architect, Microsoft Azure Administrator, Microsoft Azure DevOps, AWS Solution Architect, and DevOps Automation. " ></meta>
				<meta name='og:title' content='TechPledge, Leaders in Online It Training'></meta>

					<meta name='og:url' content='https://www.lydiapainting.com/about'></meta>

					<meta name='og:description' content='Learn cloud and DevOps from the real-life consultant. We are masters in all the disciplines like Microsoft Azure Solution Architect, Microsoft Azure Administrator, Microsoft Azure DevOps, AWS Solution Architect, and DevOps Automation.'>
					</meta>
					<meta name='url' content='https://www.lydiapainting.com/about'></meta>
					<meta name='distribution' content='Global'></meta>
					<meta name="twitter:image" content="https://www.lydiapainting.com/assets/images/Logo.jpg">
					</meta>

					<meta name="keywords" content="AZ-204, AZ-400 , AZ 400 , AZ 204, AZ-500, AZ-500, AZ-303, DP-200,DP 201, technologies, new technologies, the new technology, Best devops online training, react native training, python,react training, az 400 certification">
					</meta>
      		</Helmet>
			<section className="w3l-about-breadcrum">
				<div className="breadcrum-bg py-sm-5 py-4">
					
					<div className="container py-lg-3">
						<h2>About Us</h2>
						<p><h3>Home/ About</h3></p>
					</div>
				</div>
			</section>
			{/* <!-- content-with-photo4 block --> */}
			<section className="w3l-index1" id="about">
				<div id="content-with-photo4-block" className="pt-5">
					<div className="container1a py-md-3">
						<div className="cwp4-two row">
							
							<div className="cwp4-text col-lg-6">
								<h1><b>About Our Organisation</b></h1>
								<p className="my-3 head text-justify text-nowra mx-auto" >TechPledge is a Pledge (Oath) to prepare a better and responsible tech community. TechPledge Consulting founded in the year 2015 with the promise to deliver what is needed by next-gen professionals. We keep evolving ourselves with each day. Our team of domain experts keeps note of the skills required to perform specific jobs in the IT sector to customize our content to deliver pinpoint skills rather than generic ones. 
								</p>
								<p className="my-3 head text-justify text-nowra mx-auto" >
								Since our inception in 2015, we keep our training portfolio expanded with many specialized skills-based modules. Today offers various Specialization module in a discipline like <b>Microsoft Azure Cloud, Amazon AWS Cloud, Google Cloud Platform, DevOps Automation, Big Data,</b> Server Infrastructure like <b>Windows Server 2019, Opensource Linux</b>, Various Database Application like <b> Oracle, MSSQL, MySQL,</b> etc. and Programming Language like <b>Java, React, Python,</b> etc.
								</p>
								<p className="my-3 head text-justify text-nowra mx-auto" >We've become better at responding when there is a requirement to upskills or reskills the professional and selfless dedication in our efforts to makes TechPledge Consulting the #1 Choice for Job Based Training by worldwide professionals. All our customers, students, professionals worldwide give us 5 Start Rating for our Training Approach, Training Content, Training Infrastructure, Flexible time, and our genuine efforts to deliver what we promise. We are bringing change in many professional lives across the world.</p>
								<br />
								<ul className="cont-4">
									
									<li><span className="fa fa-check"></span><b>Proven Success: 92%.Success in Exam.</b></li><br />
									<li><span className="fa fa-check"></span><b>Our Trainer are Veterans  & Experts from Industry.</b> </li><br />
									<li><span className="fa fa-check"></span><b>Individualized, Customized Traning </b></li><br />
									<li><span className="fa fa-check"></span><b>1 on 1 Industry Mentorship</b></li><br />
									<li><span className="fa fa-check"></span><b> Best Rated Online Azure & AWS Training Provider</b></li><br />
									<li><span className="fa fa-check"></span><b> Best Rated DevOps Bootcamp Course</b></li><br />
								</ul>
							</div>
							<hr />
							<div className="cwp4-image col-lg-6 pl-lg-4 mt-lg-0 mt-6">
								<Player />
							
															
								
								<p className="my-3 head text-justify text-nowra mx-auto" >
								Business today needs to transform. The customer now has more options to buy before them. Our customer success team helps you increase your footprint on the internet and social media platforms without investing much. 
								</p>
								<p>We build the app which built your business. Our website is creative, interactive, and Google search enabled. We do design, write content, and provide stock free media images for your website and apps. </p>
								<br />
								
								
								<div className="cwp4-image ccont-left">
								<img src="assets/images/gg.jpg" className="img-responsive" alt="TechPledge" />
								
								
								<br /><br />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- content-with-photo4 block --> */}
			<section className="w3l-features-1">
				{/* <!-- /features --> */}
				<div className="features py-4">
					<div className="container1a pb-5">

						<div className="fea-gd-vv row ">
							<div className="float-lt feature-gd col-lg-4 col-sm-6">
								<div className="icon-info">
									<h5>CAREER ADVISORS</h5>
									<p>
										Our Empanel Industry leaders Working with you to Lay out a Career Path and help you adhere with your timelines and goals. We also provide Job Placement assistance with our TechPledge Job Assist program.
									</p>
								</div>
							</div>
							<div className="float-mid feature-gd col-lg-4 col-sm-6 mt-sm-0 mt-4">
								<div className="icon-info">
									<h5>JOB BASED TRAINING</h5>
									<p>
									Every Candidate gets trained on Different Job Profile Like Helpdesk, System Admin, Cloud Admin, Architect, Software Development, Database Analyst, Linux System Admin, Data Science Professional, DevOps Engineer, Automation Engineer, etc.
									</p>

								</div>
							</div>
							<div className="float-rt feature-gd col-lg-4 col-sm-6 mt-lg-0 mt-4">
								<div className="icon-info">
									<h5>CERTIFICATION</h5>
									<p>
									Our in-depth training, lab-based practice, Rigorous preparation help  92% of students get the exam cleared in the first attempt with 75% average passing marks. We have been rated five stars by our students for certification-based training. 
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
				<div className="container1a pb-5">
				<div className="icon-info"> <br />
                                        <div className="elfsight-app-58af44dd-fa0a-4532-ad7f-5049fa523b6e"></div>
                                    </div>
				</div>
				</div>
				{/* <!-- //features --> */}
			</section>
			<section className="w3l-feature-2">
				<div className="grid top-bottom py-5">
					<div className="container1a py-md-5">
						<div className="heading text-center mx-auto">
							<h3 className="head" >Why Choose TechPledge As Your Learning Partner</h3>
							<p className="my-3 head text-justify text-nowra mx-auto" ><h5>TechPledge Consulting is neither like a traditional training institute whose responsibility only limited to delivering the Syllabus Nor like Aggregators who’s connect you with contracted or freelance trainer, we are a group of professional who committed to give the right direction to career and go out of the box to enable you to deliver your professional goal.
								</h5></p>
							 
					</div>
						<div className="middle-section row mt-5 pt-3">
							<div className="three-grids-columns col-lg-3 col-sm-6 text-center ">
								<div className="icon"> <span className="fa fa-graduation-cap" aria-hidden="true"></span></div>
								<h4>Job Role Oriented Content </h4>
								<p className="my-3 head text-justify text-nowra mx-auto" > Our Job Role based Training will enable  you to  deliver what is  expected from you and that is too with much ease. </p>
							</div>
							<div className="three-grids-columns col-lg-3 col-sm-6 mt-sm-0 mt-5 text-center">
								<div className="icon"> <span className="fa fa-user" aria-hidden="true"></span></div>
								<h4>Training by Professional</h4>
								<p className="my-3 head text-justify text-nowra mx-auto" >Our Trainers are not trainers by profession but are veterans and experts from industry, but drive with the passion of imparting their knowledge and experience</p>
							</div>
							<div className="three-grids-columns col-lg-3 col-sm-6 mt-lg-0 mt-5 text-center">
								<div className="icon"> <span className="fa fa-globe fa-5x" aria-hidden="true"></span></div>
								<h4> Global Training Approach</h4>
								<p className="my-3 head text-justify text-nowra mx-auto" >We follow the best adopted global approach of training  , that's why our examples are simple, practical labs are easy to execute and lectures are easy to understand.</p>
							</div>
							<div className="three-grids-columns col-lg-3 col-sm-6 mt-lg-0 mt-5 text-center">
								<div className="icon"> <span className="fa fa-bed" aria-hidden="true"></span></div>
								<h4>Flexible Timing For Global Candidate</h4>
								<p className="my-3 head text-justify text-nowra mx-auto" >We are very flexible with our timing. We operate round the clock across geography . So you can join us at your convenience and comfort.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="teams-1">
				<section className="teams text-center py-1" id="team">
					
						<div className="heading text-center mx-auto">
							<h3 className="head">Meet Your  Instructors & Mentors </h3>
							
							<p className="my-3 head text-justify text-nowra mx-auto " ><h5> Each member of our Managements board has more than two decades of industry experience. All our Instructors are not trainers by profession but are veterans and experts from the industry. They drive with a passion for imparting their knowledge to the community. </h5></p>
							
							<p className="my-3 head text-justify text-nowra mx-auto" ><h5>The trainer provides complete training on real-time scenarios with 100% hands-on. They bring vast knowledge and experience from the industry. Our Trainer mentors the candidate in every step of their assignments and projects. They also encouraged to explore the subjects and asks ant relevant question</h5></p>
						
						<div className="row inner-sec-w3ls-w3pvt-aminfo pt-5 mt-3">
							<div className="elfsight-app-bd34ba61-9cb7-4e52-899a-ae9fc9a6c5da"></div>
							</div>
							{/* <div className="col-lg-2 col-sm-7">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t1.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Shruti Sinha</h4>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t2.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Christian Anyanwu</h4>
										 <ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7  mt-sm-0 mt-5">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t3.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Poornima Arun</h4>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t4.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Bipeen Sinha</h4>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7  mt-sm-0 mt-5">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t5.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Aditi Srivastava</h4>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t6.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Berlin Donald</h4>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/LorenMind.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Loren Mind</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
									</div>
									<div className="team-info">
										<h4></h4>
									</div>
								</div>
							</div>

							<div className="col-lg-2 col-sm-7  mt-sm-0 mt-5">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/devesh.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Devesh Srivastava</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">

									</div>
									<div className="team-info">
										<h4></h4>
									</div>
								</div>
							</div>


							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/WilliemBob.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Williem Bob</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">

									</div>
									<div className="team-info">
										<h4></h4>
									</div>
								</div>
							</div> */}

						</div>
					
				</section>
				<section className="w3l-feature-2">
					<div className="grid top-bottom py-5">
						<div className="container py-md-5">
							
							<div className="elfsight-app-c7c15687-73d8-4438-b5d8-efc1d180ee46"></div>
						</div>
					</div>
				</section>
			</section>

		</div >
	)
}

export default About
