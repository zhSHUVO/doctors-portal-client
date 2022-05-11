import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero pb-32 lg:min-h-screen  lg:bg-bg-chair lg:bg-cover lg:bg-contain lg:bg-no-repeat lg:bg-center ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="md:w-96 flex-1 rounded-lg shadow-2xl" />
                <div className="flex-1">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Your appointment date: {format(date, "PP")}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
