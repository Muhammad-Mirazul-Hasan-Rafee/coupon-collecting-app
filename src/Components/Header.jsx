import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
      console.log('User sign out successfully!')
    })
    .catch(error => {
      console.log('Error' , error.message);
    })
  };

  console.log(user);
  // const userEmail = user?.email || "";
  // const userName = userEmail.split("@")[0];

  return (
    <div>
      <div className="flex justify-between items-center">
        <a className="btn btn-ghost text-xl">Logo</a>
        <h4 className="text-center ml-28 mb-[116px] text-2xl text-slate-700">{user ? `Welcome ${user.displayName}` : ""}</h4>
        <div>
          {user ? (
            <div className="grid grid-rows-1 gap-y-2"> 
              <span>{user.email}</span>
              <img className="w-28 h-16 rounded-full ml-8" src={user.photoURL} alt="" />
              <a onClick={handleSignOut} className="btn">Sign Out</a>
            </div>
          ) : (
            <>
              <Link to="/register" className="btn">
                Register
              </Link>
              <span>or</span>
              <Link to="/login" className="btn">
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      <NavBar user={user}></NavBar>
    </div>
  );
};

export default Header;
