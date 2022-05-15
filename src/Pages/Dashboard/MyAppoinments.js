import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseinit";

const MyAppoinments = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => {
                    if ( res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    setAppointment(data);
                });
        }
    }, [user]);

    return (
        <div>
            <h1 className="text-center text-2xl">My Appoinments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map((a, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;
