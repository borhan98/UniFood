import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="w-full h-[90vh] flex justify-center items-center ">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to={"/login"}
      state={location.pathname ? location.pathname : ""}
    />
  );
};

export default AdminRoute;
AdminRoute.propTypes = {
  children: PropTypes.node,
};
