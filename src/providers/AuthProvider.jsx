import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_init.js";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user , setUser] = useState(null);

  const [loading , setLoading] = useState(true); //reload kora hocche tokhn loading suru hbe,



  const createUser = (email , password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email , password);
  };

  const signInUser = (email , password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password);
  };

  const signInWithGoogle = () =>{
    return signInWithPopup(auth , googleProvider);
  };

  const signOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
  };

  // onAuthStateChanged(auth , currentUser =>{
  //   if(currentUser){
  //     console.log('Currently logged in user' , currentUser);
  //     setUser(currentUser);
  //   }
  //   else{
  //     console.log('No user logged in!');
  //     setUser(null); 
  // }
  // })

  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth , currentUser =>{
      console.log('Current User Here' , currentUser);
      setUser(currentUser);
      setLoading(false);// user peye gele false hbe.mane loading er kaj ses
    })

    return ()=> unSubscribe();
  }, []);

  const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signInWithGoogle,
      signOutUser,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};


export default AuthProvider;
