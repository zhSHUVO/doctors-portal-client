import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";

const Home = () => {
    return (
        <div className="p-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;
