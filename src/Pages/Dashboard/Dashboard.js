import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input
                id="dashboard-sidebar"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content ">
                <h1 className="font-bold text-2xl text-center text-primary">
                    Welcome to the Dashboard
                </h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="dashboard-sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    <li>
                        <Link to="/dashboard">My Appoinments</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">My Reviews</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
