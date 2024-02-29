import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-5 items-center mt-16">
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
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Login
            </NavLink>
          </div>
    );
};

export default Sidebar;