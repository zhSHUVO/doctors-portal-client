import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Failed to Make an Admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modification > 0) {
                    refetch();
                    toast.success("Promoted to admin");
                }
            });
    };

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>
                {role !== "admin" && (
                    <button onClick={makeAdmin} className="btn btn-xs">
                        Promote to Admin
                    </button>
                )}
            </td>
            <td>
                <button className="btn btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default UserRow;
