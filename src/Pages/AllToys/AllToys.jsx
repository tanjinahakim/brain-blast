import { useEffect, useState } from "react";
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
            <div className="overflow-x-auto">
            <table className="lg:table table-normal table-zebra w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Toy Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Seller</th>
                    <th>Details</th>
                </tr>
                 {/*Rows  */}
                </thead>
                {
                        toys.map(toy=><tbody key={toy._id}>
                            <tr>
                            <th>{++i}</th>
                            <td>{toy.name}</td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>{toy.seller}</td>
                            <td><Link to={`/toy/${toy._id}`}><button className="btn btn-outline btn-accent">View Details</button></Link></td>
                            </tr>

                        </tbody>)
                }
            </table>
            </div>
        </>
    );
};

export default AllToys;