import React from 'react'
import {Link} from "react-router-dom"


function Feature() {
    return (
        <div>
			{/* <section class="w3l-feature-3" id="features">
				<div class="grid top-bottom mb-lg-5 pb-lg-5">
					<div class="container">
						
						<div class="middle-section grid-column text-center">
						
						</div>
					</div>
				</div>
			</section> */}
            
			<section className="w3l-feature-3" id="features">
				<div className="grid top-bottom mb-lg-5 pb-lg-5">
					<div className="container">
						<div className="middle-section grid-column text-center">
							<div className="three-grids-columns">
								
								<img src="assets/images/111.jpg" height="80%" width="100%"className="img-responsive" alt="TechPledge" />
								{/*<h4> Role Based Training</h4>
								<p>
								What you learn in the classroom is a generic concept and lab in nature. But when you go for the job you need different skills and experience. It is an evident gap. TechPledge offers a Role-based training program rather than a curriculum or certification based. 
								We design our lab environment similar to the production. We provide a customer immersion experience (CIE).
								</p>*/}
								{/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
							<div className="three-grids-columns">
								<img src="assets/images/112.jpg" height="80%" width="100%"className="img-responsive" alt="TechPledge" />
								
								{/*<span className="fa fa-users"></span>
								
								<h4>	Customized ​Learning
								</h4>
								<p>
								We are flexible. We provide customized (add or omit modules & labs) if this suits the candidate's requirement. It also gives the best value for money as a candidate can get different modules in a single training. Contact us today.  Our expert will assess your skill requirement for a specific job role and set your career path accordingly.
								</p>*/}
								{/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
							<div className="three-grids-columns">
							<img src="assets/images/113.jpg" height="80%" width="100%"className="img-responsive" alt="TechPledge" />
								{/*<span className="fa fa-book"></span>
								<h4>Live Industry Project</h4>
								<p>
								Choose any project from our project portfolio. Our Project portfolio includes a project from implementation to migration, from development to automation, and crack the interview with confidence.Contact TechPledge Consulting now.  Our expert panel will help you select the right project for you.
								</p>
								<br />{/*
								{/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
								{/* <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/" >Read More</Link> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="./JobAssistance" >Read More	</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default Feature
