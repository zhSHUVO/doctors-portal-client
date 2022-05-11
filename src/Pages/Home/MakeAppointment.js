import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex p-6 lg:p-0 lg:pr-6 justify-content rounded-xl items-center text-white"
        >
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt="doc" />
            </div>
            <div className="flex-1 text-white">
                <h1 className="text-primary text-center font-bold">
                    Appointment
                </h1>
                <h1 className="text-3xl	text-center pb-4 font-bold">
                    Make an appointment Today
                </h1>
                <p className="pb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ullam itaque laboriosam iste veritatis soluta. Laborum odit
                    modi quaerat blanditiis praesentium aspernatur. Consectetur
                    vitae aliquid corporis reprehenderit sapiente? Nulla cumque
                    unde deserunt recusandae! Quaerat repellat doloremque
                    laborum reprehenderit temporibus culpa id, sequi a mollitia
                    qui perferendis laudantium illum quae beatae dolorum!
                </p>
                <PrimaryButton>Book Appoinment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
