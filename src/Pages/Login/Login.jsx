import img from '../../assets/images/Logo/login4.jpg'
import { FaGithub, FaLock, FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import '../../assets/fonts/font.css'
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
const Login = () => { 
    const {signIn}= useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.result)
                Swal.fire({
                    icon: 'error',
                    text: `${error}`,
                  })
            
            
            console.log(error)

        })

    }
    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                {/* login container */}
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 my-20">
                    {/* form section */}
                    <div className='sm:w-1/2 px-16 my-10'>
                        <h2 className='font-extrabold text-3xl text-[#033663] text-center font '>Login</h2>
                        <p className='text-sm mt-4 text-[#C28B95] text-center'>If you are already a member, easily log in</p>
                        <form onSubmit={handleLogin} className='flex flex-col'>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl border'  type="email" name="email" placeholder='Email' />
                            <FaRegEnvelope className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaRegEnvelope>
                            </div>
                            <div className='relative'>
                            <input className='py-2 px-8 mt-8 rounded-xl border' type="password" name="password" placeholder='Password' />
                            <FaLock className='text-gray-300 absolute bottom-1 left-3 -translate-y-1/2 text-center  '></FaLock>
                            </div>
                            <input type="submit" className='bg-[#055763]  mt-8 border-none text-white rounded-xl py-2 ' value="Login"/>
                            <div className='flex mt-4'>
                                <div className='flex items-center space-x-1 flex-1 text-xs'>
                                    <input type="checkbox"  className="checkbox-xs checkbox" />
                                    <p>Remember me</p>
                                </div>
                                <p className='text-xs '>Forgot Password?</p>
                                
                            </div>
                        </form>
                        {/* loginwith section */}
                        <div className='mt-4 grid grid-cols-3 items-center text-gray-500'>
                            <hr className='border-gray-400' />
                            <p className='text-center text-sm'>OR</p>
                            <hr className='border-gray-400'/>
                        </div>
                        <div className='flex mt-2 mr-6 space-x-1 items-center justify-center'>
                        <button className="btn btn-outline btn-sm  py-2 px-4 text-xs text-black border-gray-400 rounded-md"><FcGoogle className='mr-2'></FcGoogle> Login with Google</button>
                        <button className="btn btn-outline btn-sm py-2 px-4 text-xs text-black border-gray-400 rounded-md"><FaGithub className='mr-2'></FaGithub>Login with Github</button>
                        </div>
                        <div className='mt-4 font-1'>
                            <p className='text-sm text-gray-500'>Don`t have an account?<Link to={'/register'} className='font text-red-600 ml-1 font-bold'>Register Now</Link></p>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='w-full p-8 mx-10 relative sm:block hidden '>
                        <img src={img} className='rounded-2xl' alt="" />
                        <h1 className='font text-4xl absolute text-center top-52 left-20'>Welcome Back</h1>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Login;