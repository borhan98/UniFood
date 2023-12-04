import { Link, NavLink } from "react-router-dom";
import UniFoodLogo from "../assets/UniLogo.png";
import {
  FaBarcode,
  FaBars,
  FaHome,
  FaListUl,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdPending } from "react-icons/md";

const Sidebar = () => {
  const isAdmin = false;

  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#F89A20] py-2 px-3 rounded-md text-white"
      : "py-2 px-3 rounded-md";

  return (
    <div>
      <Link>
        <div className="flex items-center justify-center">
          <img className="w-12" src={UniFoodLogo} alt="Logo" />
          <h3 className="text-3xl font-bold">
            Uni<span className="text-[#F89A20]">Food</span>{" "}
          </h3>
        </div>
      </Link>

      <ul className="menu menu-sm mt-3 space-y-2">
        {isAdmin ? (
          <>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/adminHome"}>
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/additem"}>
                <FaUtensils /> Add Item
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/manageitem"}>
                <FaBarcode /> Manage Iitems
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/manageitem"}>
                <FaListUl /> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/allusers"}>
                <FaUsers /> All Users
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/myprofile"}>
                <FaHome /> <span className="hidden md:block">My Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/requestedMeals"}>
                <FaShoppingCart />{" "}
                <span className="hidden md:block">Requested Meals</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/myReviews"}>
                <FaStar /> <span className="hidden md:block">My Reviews</span>
              </NavLink>
            </li>
          </>
        )}
        {/* Devider */}
        <div className="divider"></div>
        <>
          <li>
            <NavLink className={activeRoute} to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeRoute} to={"/meals"}>
              <FaBars /> Meals
            </NavLink>
          </li>
          <li>
            <NavLink className={activeRoute} to={"/"}>
              <MdPending /> Upcoming Meals
            </NavLink>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Sidebar;
