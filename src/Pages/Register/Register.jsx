import { FaCameraRetro, FaLock, FaRegEnvelope, FaRegUser, FaUserCircle } from "react-icons/fa";
import '../../assets/fonts/font.css'
import { Link } from 'react-router-dom';
import img from '../../assets/images/Logo/register.jpg'
const Register = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                {/* login container */}
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 my-20">
                    {/* form section */}
                    <div className='w-full px-16 my-10'>
                        <h2 className='font-extrabold text-3xl text-[#033663] text-center font '>Get Started</h2>
                        <p className='text-sm mt-4 text-[#C28B95] text-center'>your journey with us</p>
                        <form className='flex flex-col'>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl w-full border'  type="text" name="name" placeholder='Full Name' />
                            <FaRegUser className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaRegUser>
                            </div>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl border w-full'  type="text" name="username" placeholder='User Name' />
                            <FaUserCircle className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaUserCircle>
                            </div>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl border w-full'  type="email" name="email" placeholder='Email' />
                            <FaRegEnvelope className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaRegEnvelope>
                            </div>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl border w-full' type="password" name="password" placeholder='Password' />
                            <FaLock className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaLock>
                            </div>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl border w-full' type="text" name="photo" placeholder='Photo URL' />
                            <FaCameraRetro className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaCameraRetro>
                            </div>
                            <input type="submit" className='bg-[#055763]  mt-8 border-none text-white rounded-xl py-2  w-full' value="Login" />
                                <div className='flex items-center space-x-1  text-xs mt-4'>
                                    <input type="checkbox"  className="checkbox-xs checkbox" />
                                    <p>Accept Terms and Conditions</p>
                                </div>
                        </form>
                        <div className='mt-4 font-1'>
                            <p className='text-sm text-gray-500 text-center'>Already have an account?<Link to={'/login'} className='font text-red-600 ml-1 font-bold'>Login</Link></p>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='w-full p-4 mx-4 relative sm:block hidden '>
                        <img src={img} className='rounded-2xl' alt="" />
                        <h1 className='font text-4xl absolute text-center top-52 left-24 text-white'>Welcome <br /> to <br /> Brain Blast</h1>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Register;