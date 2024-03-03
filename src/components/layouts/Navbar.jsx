import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

  const {user, logout} = useAuth();
  console.log(user);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">Clean Co</div>
      <div className="flex-none hidden lg:block">
        <div className="flex gap-5">
          {/* Navbar menu content here */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact
          </NavLink>
          {
            user?.email? <button onClick={logout}>Log Out</button> :
            <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Login
          </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
