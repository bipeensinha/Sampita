import React from 'react'
import { Link } from "react-router-dom"
import SoftwarePricingTable from './SoftwarePricingTable';
import Player1 from './Player1'

function AboutMain() {
	return (
		<div>
			<section className="services-12" id="course">
				<div className="form-12-content">
					<div className="container">
						<div className="grid grid-column-2 ">

							<div className="column1">
								<div className="heading">
									<h3 className="head text-white">Software Development Services</h3>
									<h4>We build Apps that build your bussiness</h4>
									{/* <h4>Fall 2019 applications are now open</h4> */}
									<p className="my-3 text-white">
										Counted among Top App Development Companies, we provide Website and App development services to our clients spreading all across the globe. Our Website and App Development Services using React Native are proficient in adding new features and optimize it to improve performance and provides tailor-made products to blend advanced functionality with off-the-shelf products.

                                    </p>
								</div>
							</div>
							<div className="column2">
								<Link className="btn btn-secondary btn-theme2 mt-3" to="/Services" >Know More</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<SoftwarePricingTable />
			<br />
			<br />

			<hr />
			
		</div>
	)
}

export default AboutMain
