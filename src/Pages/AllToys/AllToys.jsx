import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [toys,setToys]=useState([]);
    let i=0;
    useEffect(()=>{
        fetch(`http://localhost:5000/allToys`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <>
            <div className="lg:overflow-x-auto overflow-hidden">
            <table className=" table-compact w-full">
                {/* head */}
                <thead className="text-left">
                <tr>
                    <th></th>
                    <th>Toy Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available <br /> Quantity</th>
                    <th>Seller</th>
                    <th>Details</th>
                </tr>
                 {/*Rows  */}
                </thead>
                {
                        toys.map(toy=><tbody key={toy._id}>
                            <tr className="border">
                            <th>{++i}</th>
                            <td>{toy.name}</td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>{toy.seller}</td>
                            <td><Link to={`/toy/${toy._id}`}><button className="btn btn-outline btn-accent text-xs btn-sm"><FaEye></FaEye></button></Link></td>
                            </tr>

                        </tbody>)
                }
            </table>
            </div>
        </>
    );
};

export default AllToys;