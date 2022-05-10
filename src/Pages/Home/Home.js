import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Info from "./Info";

const Home = () => {
    return (
        <div className="p-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;
