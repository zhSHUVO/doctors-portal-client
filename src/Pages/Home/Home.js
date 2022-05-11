import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testtimonials";

const Home = () => {
    return (
        <div className="p-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;
