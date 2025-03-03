import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth/cordova";

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

  return (
    <div>
      <div className="flex justify-between items-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <h2 className="flex-grow text-center">Welcome Here in Header</h2>
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
