import PropTypes from "prop-types";
import { RiDeleteBin6Line, RiEyeCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useMeals from "../../Hooks/useMeals";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SingleReview = ({ review, index, refetch }) => {
  const [meals] = useMeals();
  const { _id, meal_title, meal_id } = review;
  const axiosSecure = useAxiosSecure();

  const currentMeal = meals.filter((meal) => meal._id === meal_id);

  const handleDelete = (id) => {
    // delete review by _id
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
      <td>{currentMeal[0]?.likes}</td>
      <td>{currentMeal[0]?.reviews}</td>
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

export default SingleReview;
SingleReview.propTypes = {
  review: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
