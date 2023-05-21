import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
const AllToys = () => {
    const {user}=useContext(AuthContext);
    const [toys,setToys]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useTitle('All Toys')
    let i=0;
    useEffect(()=>{
        fetch(`https://brain-blast-tanjinahakim.vercel.app/allToys?search=${searchQuery}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[searchQuery])
    const notify = () =>{
        Swal.fire({
            title: 'You have to log in first to view details',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
            rgba(0,0,123,0.4)`
          })
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by toy name"
                        className="border py-2 px-3 w-full"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
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
                            <td>
                               {
                                user?<><Link to={`/toy/${toy._id}`}><button className="btn btn-outline btn-accent text-xs btn-sm"><FaEye></FaEye></button></Link></>
                                :<><Link to={`/toy/${toy._id}`} onClick={notify}><button  className="btn btn-outline btn-accent text-xs btn-sm"><FaEye></FaEye></button></Link></>
                               }
                            </td>
                            </tr>

                        </tbody>)
                }
            </table>
            </div>
        </>
    );
};

export default AllToys;