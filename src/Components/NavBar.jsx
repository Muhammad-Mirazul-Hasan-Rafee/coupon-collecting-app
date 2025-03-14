import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/brands">Brands</NavLink>
          </li>
          <li>
            <NavLink to="/brandDetails">Brand Details</NavLink>
          </li>

          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/about">About Dev</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Mobile menu (dropdown) */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>

      {/* Centered links for larger screens */}
      <div className="navbar-center flex justify-center w-full lg:flex">
        <ul className="menu menu-horizontal gap-4">{links}</ul>
      </div>
    </div>
  );
};

export default NavBar;
