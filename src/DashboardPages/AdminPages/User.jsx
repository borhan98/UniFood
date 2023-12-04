import PropTypes from "prop-types";
import { GrUserAdmin } from "react-icons/gr";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const User = ({ user, index, refetch }) => {
  const { name, email, badge } = user;
  const axiosSecure = useAxiosSecure();

  // make admin
  const handleMakeAdmin = (mail) => {
    console.log(user);
    axiosSecure.patch(`/users/admin/${mail}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`${name} is admin now`, {
          style: {
            background: "#000000",
            padding: "12px",
            color: "#FFFAEE",
          },
        });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {user.role === "admin" ? (
          "Admin"
        ) : (
          <button
            onClick={() => handleMakeAdmin(email)}
            className="block text-xl p-2 bg-[#F89A20] shadow w-fit text-white ml-auto"
            title="Make Admin"
          >
            <GrUserAdmin />
          </button>
        )}
      </td>
      <td>{badge}</td>
    </tr>
  );
};

export default User;
User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
