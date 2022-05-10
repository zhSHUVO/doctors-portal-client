import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening,
        },
    ];

    return (
        <div className="pt-32 pb-32">
            <h1 className="text-primary text-center">OUR SERVICES</h1>
            <h1 className="text-3xl	text-accent text-center">
                Services We Provide
            </h1>

            <div className="grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-5 ">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>

            <div class="hero  min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="w-96 rounded-lg" />
                    <div>
                        <h1 class="text-5xl font-bold">
                            Exceptional Dental Care, on Your Terms
                        </h1>
                        <p class="py-6">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English. Many desktop publishing packages and web
                            page
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
