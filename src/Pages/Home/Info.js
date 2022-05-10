import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div class="card lg:card-side bg-base-100 shadow-xl bg-primary text-white px-8 pt-6">
                <figure>
                    <img src={clock} alt="opening hour" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-accent text-white px-8 pt-6">
                <figure>
                    <img src={marker} alt="location marker" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-primary text-white px-8 pt-6">
                <figure>
                    <img src={phone} alt="phone" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
