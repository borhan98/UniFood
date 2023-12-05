import { RiDeleteBin6Line, RiEdit2Fill, RiEyeCloseFill } from "react-icons/ri";
import PropTypes from "prop-types";
import useMeals from "../../../Hooks/useMeals";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyReview = ({ review, index, refetch }) => {
  const [meals] = useMeals();
  const axiosSecure = useAxiosSecure();
  const { _id, meal_id, meal_title } = review;

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
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
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
      <td>
        <Link to={`editReview/${_id}`}>
          <button className="block text-xl p-2 bg-[#F89A20] shadow w-fit text-white ml-auto">
            <RiEdit2Fill />
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="block text-xl p-2 bg-[#F89A20] shadow w-fit text-white ml-auto"
        >
          <RiDeleteBin6Line />
        </button>
      </td>
      <td>
        <Link to={`/details/${meal_id}`}>
          <button className="block text-xl p-2 bg-[#F89A20] shadow w-fit text-white ml-auto">
            <RiEyeCloseFill />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyReview;
MyReview.propTypes = {
  review: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
