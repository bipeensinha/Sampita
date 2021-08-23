import React, { useEffect } from 'react'
import Slider from '../Slider';
import Feature from '../Feature';
import Form12 from '../Form12';
import Specifications from '../Specifications';
import Testimonials from '../Testimonials';
import News from '../News';
import AboutMain1 from '../AboutMain1';
import Course from '../Course';
import Form15 from '../Form15';
import EventCalender from '../EventCalender';
const Home: React.SFC = props => {

    useEffect(() => {
        // refreshPage()
        // alert("I m locading")
    }, [])


    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <Slider name="slider" />
            {/* Role Based Training */}
            
            <Feature />
            <p className="my-3 head text-center text-nowra mx-auto" >
            <h1><b >Hot Pick : Our Most Demanding Courses </b></h1></p>
                       <Form15 />
            { /*Software Development Servicesv*/ }
            
            <AboutMain1 /> 

            {/* Book a Demo */}
            <Course />
            {/* Find a course */}
            <Form12 />
            {/* 60 Professionla Instructor */}
            <Specifications />
            {/* Our Speciality Course */}
            <News />
            {/*Hear what our students have to say  */}
            {/* What our customers say */}
            <Testimonials />
            {/* eventcalender */}
            <EventCalender />
        </div>
    )
}

export default Home
