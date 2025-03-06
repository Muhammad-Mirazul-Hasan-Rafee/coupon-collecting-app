import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked; //check- check korbe j click ache kina. click hole true hbe
    console.log(name, email, password);

    // input field and error message clear
    e.target.reset();
    setErrorMessage("");
    setSuccess(false);

    if(!terms){
      setErrorMessage('Please accept terms and conditions!');
      return; // r samne egiye jete deya hobe na ejnno ekhanei return kore felbo ha ha ha hi hi hi !!
    }

    // password validation
    if (password < 6) {
      setErrorMessage("Password should be at least 6 characters or longer!");
      return; // ekhan theke return kore deya hcce func k jno r firebase e na jay password er accuracyr jnno
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setSuccess(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <h2>Register here</h2>
      <div className="flex justify-center mt-4 mb-4">
        <div className=" border border-red-500 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <button
                onClick={() => setShowPassword(!showPassword)} // every click e true hole false korbe and vice versa
                className="btn btn-xs absolute right-2 top-12"
              >
                {showPassword ? <LuEyeClosed /> : <FaEye />}
              </button>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"} // showPassword true hole text hbe noyto password hbe
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <p>
                  Already have an account? <Link to="/login">Login here</Link>
                </p>
              </label>
            </div>
            
              <label className="fieldset-label space-x-2 justify-start">
                <input type="checkbox" name="terms" className="checkbox-secondary" />
                <span>Accept terms and conditions</span>
              </label>
        
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {errorMessage && <p>{errorMessage}</p>}

          {success && (
            <p className="text-green-600">{"Sign Up Successfull!!"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
