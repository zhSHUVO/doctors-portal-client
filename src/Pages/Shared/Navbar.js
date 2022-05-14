import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebaseinit";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="navbar bg-base-100 justify-between	lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            {" "}
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            {" "}
                            <Link to="/appointment">Appointment</Link>
                        </li>
                        <li>
                            {" "}
                            <Link to="/review">Reviews</Link>
                        </li>
                        <li>
                            {" "}
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        {user && (
                            <li>
                                {" "}
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        )}
                        <li>
                            {user ? (
                                <button
                                    className="btn btn-ghost"
                                    onClick={logout}
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Doctors Portal
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        {" "}
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/appointment">Appointment</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/review">Reviews</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    {user && (
                        <li>
                            {" "}
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    )}
                    <li>
                        {user ? (
                            <button className="btn btn-ghost" onClick={logout}>
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <label
                    tabIndex="1"
                    htmlFor="dashboard-sidebar"
                    className="btn btn-ghost lg:hidden"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z"
                            clipRule="evenodd"
                        ></path>
                        <path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
