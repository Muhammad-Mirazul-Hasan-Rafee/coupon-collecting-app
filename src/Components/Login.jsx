import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import auth from "../firebase_init";

const Login = () => {

  const navigate = useNavigate();
  const {signInUser , signInWithGoogle} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email , password);
    signInUser(email , password)
    .then(result =>{
      console.log(result.user);
      e.target.reset();
      navigate('/');
    })
    .catch((error) => {
      console.log("ERROR", error.message);
    });

  };

  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      navigate('/');
    })
    .catch(error => {
      console.log('Error' , error.message);
    })
  };




    return (
        <div>
          <h2>Login here</h2>
          <div className="flex justify-center mt-4 mb-4">
            <div className=" border border-red-500 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <p>Don't have an account? Please <Link to="/register">Register</Link></p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <button onClick={handleGoogleSignIn} className="mt-4 btn-ghost">Login with Google</button>
            </div>
          </div>
        </div>
      );
};

export default Login;