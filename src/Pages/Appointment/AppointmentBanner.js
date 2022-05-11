import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero pb-32 lg:min-h-screen  lg:bg-bg-chair lg:bg-cover lg:bg-contain lg:bg-no-repeat lg:bg-center ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="md:w-96 flex-1 rounded-lg shadow-2xl" />
                <div className="flex-1">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
