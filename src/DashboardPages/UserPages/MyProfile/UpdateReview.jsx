import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const review = useLoaderData();
  const { _id, meal_id, meal_title, rating, opinion } = review;

  const onSubmit = (data) => {
    const updatededMeal = {
      user_name: user?.displayName,
      user_image: user?.photoURL,
      email: user?.email,
      meal_id,
      meal_title,
      opinion: data.opinion,
      rating: parseInt(data.rating),
    };

    axiosSecure.put(`/oneReview/${_id}`, updatededMeal).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Review updated successfully.", {
          style: {
            background: "#000000",
            padding: "12px",
            color: "#FFFAEE",
          },
        });
      }
      if (!res.data.modifiedCount) {
        Swal.fire({
          text: "You didn't updated anything!",
          icon: "warning",
        })
      }
    });
  };

  return (
    <div className="shadow-md pb-14 px-10 mx-10">
      <SectionTitle secTitle="Update Your review" secDescrip="" />
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
              defaultValue={rating}
              type="number"
              max={5}
              min={0}
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
            defaultValue={opinion}
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
            Submit Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
