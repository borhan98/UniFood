import { Link, NavLink } from "react-router-dom";
import UniFoodLogo from "../assets/UniLogo.png";
import ProfileImg from "../assets/profile_pic.jpg";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#F89A20] py-2 px-3 rounded-md text-white"
      : "py-2 px-3 rounded-md";

  const menuLinks = (
    <>
      <li>
        <NavLink className={activeRoute} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeRoute} to={"/meals"}>
          Meals
        </NavLink>
      </li>
      <li>
        <NavLink className={activeRoute} to={"/upcoming"}>
          Upcoming meals
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#00000084] fixed z-50 w-full">
      <div className="container mx-auto px-2 lg:px-0 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
              {menuLinks}
            </ul>
          </div>
          <div>
            {/* Website Logo */}
            <Link>
              <div className="flex items-center">
                <img className="w-12" src={UniFoodLogo} alt="Logo" />
                <h3 className="text-3xl font-bold text-white">
                  Uni<span className="text-[#F89A20]">Food</span>{" "}
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{menuLinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {/* Dropdow Notification */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <p className="relative flex items-center gap-1">
                <span className="p-4 text-2xl text-white">
                  <FaBell />
                </span>
                <span className="absolute top-0 right-2 text-lg bg-[#F89A20] px-1 text-white rounded-full">
                  0
                </span>
              </p>
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>No Notification available</a>
              </li>
            </ul>
          </div>
          {/* TODO: conditional join us button */}
          <button className="py-2 px-4 rounded-md bg-[#F89A20] text-white text-lg capitalize">
            Join Us
          </button>
          {/* Dropdow profile */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="border-4 border-[#F89A20] rounded-full"
            >
              <img
                className="w-12 h-12 rounded-full"
                src={ProfileImg}
                alt="Profile Image"
              />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
              <p className="text-center">
                <Link>Username</Link>
              </p>
              <li>
                <Link>Dashboard</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
