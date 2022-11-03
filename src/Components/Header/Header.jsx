import React, { useContext } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaUserCheck,
  FaRegSun,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { AuthContext } from "../../Context/UserContext";
import userIcon from "../../Assets/icons/userIcon.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <header className="px-6 mb-2">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="Car Docter" style={{ width: "4rem" }} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user?.uid ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} alt={user?.displayName} />
                      ) : (
                        <img src={userIcon} alt={user?.displayName} />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link className="justify-between">
                        {user?.displayName}
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="justify-between">
                        <FaUserCheck></FaUserCheck> Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard">
                        <FaRegSun></FaRegSun> Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logout}>
                        <FaSignOutAlt></FaSignOutAlt> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost normal-case">
                  Login
                </Link>
              </>
            )}
            <div className="flex mx-3 items-center gap-4">
              <div className="hidden md:block">
                <div className="flex gap-4">
                  <Link>
                    <FaShoppingCart className="text-2xl" />
                  </Link>
                  <Link>
                    <FaSearch className="text-2xl" />
                  </Link>
                </div>
              </div>
              <Link className="btn btn-outline btn-warning">Appointment</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
