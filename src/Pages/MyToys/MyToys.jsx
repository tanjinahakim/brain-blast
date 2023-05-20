import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyToys = () => {
    let i=0;
    const {user} = useContext(AuthContext);
    const [myToys,setMyToys]=useState([]);
    const url = `http://localhost:5000/allToys?email=${user?.email}`;
    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    }, [])
    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/allToys/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                       Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
              const remaining = myToys.filter(toy=>toy._id !== id)
              setMyToys(remaining);
                }
            })
            }
          })
    }
    return (
        <>
           <div className="lg:overflow-x-auto overflow-hidden">
            <table className="table-compact w-full">
                {/* head */}
                <thead className="text-left">
                <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Toy</th>
                    <th>Toy Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available <br /> Quantity</th>
                    <th>Details</th>
                </tr>
                 {/*Rows  */}
                </thead>
                {
                        myToys.map(toy=><tbody key={toy._id}>
                            <tr className="border">
                            <th>{++i}</th>
                            <th><div className="avatar">
                            <div className="lg:w-16 w-8 rounded">
                                <img src={toy.photo} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            </div></th>
                            <td>{toy.name}</td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                <div className="lg:space-x-2 space-y-2">
                                <Link to={`/toy/${toy._id}`}><button className="btn btn-outline btn-primary btn-sm"><FaEye></FaEye></button></Link>
                                <Link to={`/updateToy/${toy._id}`}><button className="btn btn-outline btn-accent btn-sm"><FaPencilAlt></FaPencilAlt></button></Link>
                                <button onClick={()=>handleDelete(toy._id)} className="btn btn-outline btn-error btn-sm"><FaTrash></FaTrash></button>
                                </div>
                            </td>
                            </tr>

                        </tbody>)
                }
            </table>
            </div>
        </>
    );
};

export default MyToys;