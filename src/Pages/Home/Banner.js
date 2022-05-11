import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div class="hero pb-32 lg:min-h-screen  lg:bg-bg-chair lg:bg-cover lg:bg-contain lg:bg-no-repeat lg:bg-center ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="md:w-96 flex-1 rounded-lg shadow-2xl" />
                <div className="flex-1">
                    <h1 class="text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <PrimaryButton>Lets Go</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
