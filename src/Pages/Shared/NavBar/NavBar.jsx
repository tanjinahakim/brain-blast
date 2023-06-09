import { Link } from "react-router-dom";
import logo from '../../../assets/images/Logo/logo.jpg';
import '../../../assets/fonts/font.css';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Avatar, Tooltip } from "@mui/material";

const NavBar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }
        return (
        <div className="navbar bg-[#1D1847] text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 menu-font text-black">
                <li><Link to={'/'}>Home</Link></li>
                <li>
                <Link to={'/allToys'}>All Toys</Link>
                </li>
                {
                user && <li><Link to={'/myToys'}>My Toys</Link></li>
                }
                {
                    user &&  <li><Link to={'/addToy'}>Add Toy</Link></li>
                }
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
            </div>
            <div className="flex justify-center items-center ml-10">
            <p className="normal-case lg:text-xl font">Brain</p>
            <img src={logo} alt="" className="md:w-14 md:h-14  rounded-full " />
            <p className="normal-case lg:text-xl font">Blast</p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 menu-font">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/allToys'}>All Toys</Link></li>
            {
                user && <li><Link to={'/myToys'}>My Toys</Link></li>
            }
            {
                user &&  <li><Link to={'/addToy'}>Add Toy</Link></li>
            }
            <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </div>
        <div className="navbar-end mr-10">
                { user && 
                            <Tooltip title={user.displayName} >
                                <Avatar className='me-3' src={user.photoURL}></Avatar>
                            </Tooltip>
                        
                }
            {
                
                user?<Link onClick={handleLogOut} className="btn btn-outline btn-primary">LogOut</Link>
                :<Link to={'/login'} className="btn btn-outline btn-secondary">Login</Link>
            }
        </div>
    </div>
    );
};

export default NavBar;