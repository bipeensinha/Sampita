import React from 'react'
import { Link } from "react-router-dom"
import SoftwarePricingTable from './SoftwarePricingTable';
import Player1 from './Player1'
import CardsTranning from './CardsTranning6';

function AboutMain1() {
	return (
		<div>
			
				
			<section className="w3l-index1" id="about">
				<div className="calltoaction-20  py-5 editContent">
					<div className="container1a py-md-3">

						<div className="calltoaction-20-content row">
							<div className="column center-align-self col-lg-6 pr-lg-5">
								<h1 className="editContent">Pledge For Responsible Tech</h1>
								<section className="w3l-feature-1 .features" id="features">
								<p className="more-gap editContent" >
								TechPledge vision is to develop a better and responsible tech community. We believe in the fundamental that humanity always comes before technology. We pledge for a better, tech-driven world. TechPledge Consulting Services strive to impart our knowledge and experience to create more responsible professionals.
								</p>
								<p className="more-gap editContent">On Behalf of TechPledge Consulting,  request all our associates, partners, and students to sign the below pledge.
							</p>
								<p className="more-gap editContent">
								<ul className="cont-4">
									
									<li><span className="fa fa-check"></span><b>I pledge to use our new knowledge to make a better world.</b></li><br />
									<li><span className="fa fa-check"></span><b>Take a pledge to use our technical knowledge to solve the problem of humanity</b> </li><br />
									<li><span className="fa fa-check"></span><b>We always assist other tech members in learning.  </b></li><br />
									<li><span className="fa fa-check"></span><b>Avoid using learning to develop something which is against the law.</b></li><br />
									<li><span className="fa fa-check"></span><b> Support new aspiring techie with our knowledge.</b></li><br />
									<li><span className="fa fa-check"></span><b> Pledge to be a responsible tech citizen.</b></li>
								</ul>	
								</p>
								</section>
								<br /> <br /> <br />
								
								<img src="assets/images/g1.jpg" className="img-responsive" alt="AZ-303" />
								
								{/* <a className="btn btn-secondary btn-theme2 mt-3" href="about.html"> Read More</a> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
							<div className="column ccont-left col-lg-6">
								
								<Player1 />
								
								<p>
								Business today needs to transform. The customer now has more options to buy before them. Our customer success team helps you increase your footprint on the internet and social media platforms without investing much. 
								We build the app which built your business. Our website is creative, interactive, and Google search enabled. We do design, write content, and provide stock free media images for your website and apps. 
								</p>
								<p>TechPledge's application development team uses the latest tool and the framework for your app. We have delivered a stunning website, logos, and mobile apps to customers across the globe. 

								</p>
								<p>Connect with us now. Expert here will guide you through the best way forward to increase your digital footprint. </p>
								<br />
								<img src="assets/images/g2.jpg" className="img-responsive" alt="DevOps" />
								{/* <a className="btn btn-secondary btn-theme2 mt-3" href="about.html"> Read More</a> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default AboutMain1
