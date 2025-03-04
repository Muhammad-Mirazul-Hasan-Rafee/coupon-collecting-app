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
  const userEmail = user?.email || "";
  const userName = userEmail.split("@")[0];

  return (
    <div>
      <div className="flex justify-between items-center">
        <a className="btn btn-ghost text-xl">Logo</a>
        <h4 className="text-center ml-28">{user ? `Welcome ${userName}` : ""}</h4>
        <div>
          {user ? (
            <>
              <span>{user.email}</span>
              <a onClick={handleSignOut} className="btn">Sign Out</a>
            </>
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
