import { createContext, useEffect } from "react";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
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
    // update user
    const updated =(user,name, photo) =>{
        return updateProfile(user,{displayName:name,photoURL:photo});
    }
    // login with Google
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    // logout
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    // user is available or not
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe()
        }
    }, [])
    const authInfo={
       loading,
       createUser,
       signIn,
       user,
       handleGoogleLogin,
       updated,
       logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;