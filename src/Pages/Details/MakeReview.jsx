import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MakeReview = ({ meal }) => {
  const { _id, meal_title } = meal;
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newReview = {
      user_name: user?.displayName,
      user_image: user?.photoURL,
      email: user?.email,
      meal_id: _id,
      meal_title,
      opinion: data.opinion,
      rating: parseInt(data.rating),
    };

    if (user) {
      // handle post review to database
      axiosPublic.post("/reviews", newReview).then((res) => {
        if (res.data.insertedId) {
          // handle increase review for the meal
          const increase = { value: 1 };
          axiosPublic.patch(`/meals/${_id}`, increase).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              // Success alert, reset form and refetch data to show ui
              reset();
              toast.success("Review submitted.", {
                style: {
                  background: "#000000",
                  padding: "12px",
                  color: "#FFFAEE",
                },
              });
            }
          });
        }
      });
    } else {
      return Swal.fire({
        title: "You are not logged in?",
        text: "You have to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Continue to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <SectionTitle
        secTitle="Leave a review"
        secDescrip="Gathering user opinions on our website enhances the customer experience by providing valuable insights into product satisfaction and preferences."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Meal name */}
          <div className="space-y-1">
            <label>Meal name</label>
            <input
              type="text"
              {...register("meal_title")}
              defaultValue={meal_title}
              disabled
              className="w-full py-2 px-4 focus:outline-none rounded-md shadow focus:shadow-md"
            />
          </div>
          {/* Ratings */}
          <div className="space-y-1">
            <label htmlFor="rating">Rating</label>
            <input
              {...register("rating", { required: true })}
              type="number"
              max={5}
              min={0}
              placeholder="Enter your rating between (0-5)"
              className="w-full py-2 px-4 focus:outline-none rounded-md shadow focus:shadow-md"
              id="rating"
            />
          </div>
        </div>
        {/* Opinion */}
        <div className="mt-6">
          <label htmlFor="opinion">Your opinion</label>
          <textarea
            {...register("opinion")}
            className="w-full py-2 px-4 focus:outline-none rounded-md shadow focus:shadow-md"
            placeholder="Leave your opinion here..."
            id="opinion"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        {/* Review Submit button */}
        <div className="w-fit mx-auto mt-10">
          <button
            type="submit"
            className="py-3 px-5 bg-[#F89A20] border border-[#F89A20] hover:bg-transparent hover:text-zinc-700 text-lg duration-300 rounded-md text-white font-medium "
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeReview;
MakeReview.propTypes = {
  meal: PropTypes.object.isRequired,
};
