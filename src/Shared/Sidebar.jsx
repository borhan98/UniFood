import { Link, NavLink } from "react-router-dom";
import UniFoodLogo from "../assets/UniLogo.png";
import { PiBowlFoodFill } from "react-icons/pi";
import {
  FaBars,
  FaHome,
  FaListUl,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Sidebar = () => {
  const [isAdmin] = useAdmin();

  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#F89A20] py-2 px-3 rounded-md text-white"
      : "py-2 px-3 rounded-md";

  return (
    <div>
      <Link className="hidden md:block" to={"/"}>
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
              <NavLink className={activeRoute} to={"/dashboard/adminProfile"}>
                <FaUser /> <span className="hidden md:block">Admin Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/manageUsers"}>
                <FaUsers /> <span className="hidden md:block">Manage Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/addMeal"}>
                <IoFastFoodSharp /> <span className="hidden md:block">Add Meal</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/allMeals"}>
                <FaListUl /> <span className="hidden md:block">All Meals</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/allReviews"}>
                <FaStar /> <span className="hidden md:block">All Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/serveMeals"}>
                <PiBowlFoodFill /><span className="hidden md:block">Serve Meals</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/upcoming meals"}>
                <MdFastfood /> <span className="hidden md:block">Upcoming Meals</span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className={activeRoute} to={"/dashboard/myprofile"}>
                <FaUser /> <span className="hidden md:block">My Profile</span>
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
              <FaHome /> <span className="hidden md:block">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={activeRoute} to={"/meals"}>
              <FaBars /> <span className="hidden md:block">Meals</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={activeRoute} to={"/upcoming"}>
              <MdPending /> <span className="hidden md:block">Upcoming Meals</span>
            </NavLink>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Sidebar;
