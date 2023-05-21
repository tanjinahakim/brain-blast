import { Link } from "react-router-dom";
import logo from '../../assets/Error/404.jpg'
const ErrorPage = () => {
    return (
        <div className="max-w-5xl mx-auto"> 
            <div className="my-10 ">
        <Link to={'/'}><button className="btn border-none text-xl font">Back to home</button></Link>
         </div>
            <div>
                <img src={logo} alt="" />
            </div>            
        </div>
    );
};

export default ErrorPage;