import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/images/logo.png";
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
        <Link to='/' className="btn btn-ghost text-xl  mx-auto h-[80px] w-[90px] rounded-full"><img className="w-10 h-10 rounded-full" src={logo} alt="" /></Link>
        <h4 className="text-center mt-6 ml-28 mb-[116px] text-2xl font-bold text-[#21243f]">{user ? `Welcome ${user.displayName}` : ""}</h4>
        <div className="mx-auto">
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
