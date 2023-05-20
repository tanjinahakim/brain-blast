import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaTrash } from "react-icons/fa";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys,setMyToys]=useState([]);
    const url = `http://localhost:5000/allToys?email=${user?.email}`;
    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                        <button><FaTrash></FaTrash></button>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyToys;