import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const location= useLocation();
    if(loading){
        return(<div style={style}>
            <FadeLoader color={"#123abc"} size="400"/>
          </div>)
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;