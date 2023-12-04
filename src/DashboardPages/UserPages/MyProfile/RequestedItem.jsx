import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import useMeals from "../../../Hooks/useMeals";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RequestedItem = ({ meal, index, refetch }) => {
  const { _id, meal_id, meal_title, status } = meal;
  const [meals] = useMeals();
  const axiosSecure = useAxiosSecure();

  const userMeal = meals.filter((meal) => meal._id === meal_id);

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/request/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{meal_title}</td>
      <td>{userMeal[0]?.likes}</td>
      <td>{userMeal[0]?.reviews}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="block text-xl p-2 bg-[#F89A20] shadow w-fit text-white ml-auto"
        >
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
};

export default RequestedItem;
RequestedItem.propTypes = {
  meal: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
