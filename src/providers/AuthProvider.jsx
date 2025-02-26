import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext } from "react";
import auth from "../firebase_init.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = 'Rafee';

  const createUser = (email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password);
  }

  const authInfo = {
      name,
      createUser
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// ✅ Export both AuthContext and AuthProvider
export default AuthProvider;
