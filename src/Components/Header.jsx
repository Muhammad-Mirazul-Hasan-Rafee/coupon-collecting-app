import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const {name} = useContext(AuthContext) ; 

  console.log(name); 

  return (
    <div>
      <div className="flex justify-between items-center">
      <a className="btn btn-ghost text-xl">daisyUI</a>
        <h2 className="flex-grow text-center">Welcome Here in Header</h2>
        <div>
          <Link to="/register" className="btn">Register</Link>
          <span>or</span>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>

      <NavBar></NavBar>
    </div>
  );
};

export default Header;
