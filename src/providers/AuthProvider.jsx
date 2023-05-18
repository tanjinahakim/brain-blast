import { createContext, useEffect } from "react";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    // signUp 
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signIn with email-password
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // login with Google
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    // user is available or not
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo={
       user,
       loading,
       createUser,
       signIn,
       handleGoogleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;