import React from 'react'

function Form12() {
    return (
        <div>
                <p className="my-3 head text-center text-nowra mx-auto" >
            <h1><b >Career Track H20 Bootcamp Program </b></h1></p>
            <section className="w3l-form-12">
                <div className="form-12-content py-5" id="services">
                    <div className="container py-md-3">
                        <div className="grid grid-column-2 py-md-5">

                            <div className="column1">
                                <h4 className="tagline">Find your course</h4>
                                <p>Fill in below form to find your courses</p>
                                <form action="/" method="Get">
                                    <div className="">
                                        <input type="text" name="name" className="form-input" placeholder="Course Name" />
                                    </div>
                                    <div className="" >
                                        <select id="sel1" placeholder="Category">
                                            <option>Category</option>
                                            <option>Azure</option>
                                            <option>AWS</option>
                                            <option>GCP</option>
                                            <option>DevOps</option>
                                            <option>MCSE</option>
                                            <option>RHCE</option>
                                            <option>DBA</option>
                                            <option>Java    </option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-theme2">Submit</button>
                                </form>
                            </div>
                            <div className="column2">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <a href="/Bootcamp"><div className="courses-item">
                                            {/* <span className="fa fa-male"></span> */}
                                            <p><img src="assets/images/DS.jpg" className="img-responsive" alt="Data Science" />Data Science Bootcamp </p>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <a href="/Bootcamp"><div className="courses-item">
                                            {/* <span className="fa fa-suitcase"></span> */}
                                            <p><img src="assets/images/ML.jpg" className="img-responsive" alt="Machine Learning" />Machine Learning Bootcamp</p>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6 mt-md-0 mt-4">
                                        <a href="/Bootcamp"><div className="courses-item">
                                            {/* <span className="fa fa-code"></span> */}
                                            <p><img src="assets/images/FS.jpg" className="img-responsive" alt="Full Stack" />Full Stack Bootcamp</p>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6 mt-md-0 mt-4">
                                        <a href="/Bootcamp"><div className="courses-item">
                                            {/* <span className="fa fa-flask"></span> */}
                                            <p><img src="assets/images/DA.jpg" className="img-responsive" alt="DevOps Bootcamp" />DevOps Master Bootcamp</p>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6 mt-4">
                                        <a href="/Bootcamp"><div className="courses-item mt-2">
                                            {/* <span className="fa fa-money"></span> */}
                                            <p><img src="assets/images/CM.jpg" className="img-responsive" alt="Cloud Master Bootcamp" />Cloud Master Bootcamp</p>
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6 mt-4">
                                        <a href="/Bootcamp"><div className="courses-item mt-2">
                                            {/* <span className="fa fa-money"></span> */}
                                            <p><img src="assets/images/IOT.jpg" className="img-responsive" alt="IOT Bootcamp" />IOT with Cloud Bootcamp</p>
                                        </div></a>
                                    </div>
                                    
                                    <br /> <br />
                                    <div className="paypalCenter">
                                        <div id="smart-button-container" className="paypal col-md-12 col-sm-12 col-12 mt-4">
                                            <div>
                                                <div id="paypal-button-container"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="paypalCenter">
                                    {/* <div className="elfsight-app-6909a4b7-e4d4-457a-9674-5d366b92adc4"></div> */}
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <div className="elfsight-app-6909a4b7-e4d4-457a-9674-5d366b92adc4"></div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Form12
