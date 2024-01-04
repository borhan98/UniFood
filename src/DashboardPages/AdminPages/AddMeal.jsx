import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddMeal = () => {
  const [addMeal, setAddMeal] = useState("");
  const [upcomingMeal, setUpcomingMeal] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const meal_title = form.meal_title.value;
    const category = form.category.value;
    const ingredients = form.ingredients.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);

    const newMeal = {
      meal_title,
      category,
      price,
      ingredients,
      description,
      reviews: 0,
      likes: 0,
      rating: 0,
      post_time: new Date().toLocaleDateString(),
      distributor_name: user?.displayName,
      distributor_email: user?.email,
    };

    if (addMeal) {
      // TODO: ("add logic");
      axiosSecure.post(`http://localhost:5000/meals`, newMeal).then((res) => {
        if (res.data.insertedId) {
          toast.success(`Successfully added`, {
            style: {
              background: "#000000",
              padding: "12px",
              color: "#FFFAEE",
            },
          });
        }
      });
    }
    if (upcomingMeal) {
      // TODO: ('upcoming logic');
      axiosSecure
        .post(`http://localhost:5000/upcoming`, newMeal)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`Successfully added to upcoming meal`, {
              style: {
                background: "#000000",
                padding: "12px",
                color: "#FFFAEE",
              },
            });
          }
        });
    }

    setAddMeal("");
    setUpcomingMeal("");
  };

  return (
    <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
      <Helmet>
        <title>UniFood | Add Meal</title>
      </Helmet>
      <div className="w-fit mx-auto">
        <SectionTitle secTitle="Add new meal" secDescrip="" />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid gap-4 grid-cols-2">
            {/* Meal title */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="mealtitle">Your meal title</label>
              <input
                name="meal_title"
                type="text"
                placeholder="Enter meal title"
                className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                id="mealtitle"
              />
            </div>
            {/* category */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="category">Meal category</label>

              <select
                name="category"
                className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                id="category"
              >
                <option value={"breakfast"}>Breakfast</option>
                <option value={"lunch"}>Lunch</option>
                <option value={"dinner"}>Dinner</option>
              </select>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid gap-4 grid-cols-2">
            {/* price */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="price">Meal price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter meal title"
                className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                id="price"
              />
            </div>
            {/* Likes */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="likes">Likes</label>
              <input
                type="number"
                name="like"
                defaultValue={0}
                className="py-3 px-4 text-black rounded-md shadow focus:shadow-xl focus:outline-none "
                id="likes"
                disabled
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid gap-4 grid-cols-2">
            {/* Distributor Name */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="distributorName">Meal Distributor Name</label>
              <input
                type="text"
                name="distributorName"
                defaultValue={user?.displayName}
                className="py-3 px-4 text-black rounded-md shadow focus:shadow-xl focus:outline-none "
                id="distributorName"
                disabled
              />
            </div>
            {/* Reviews */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="reviews">Reviews</label>
              <input
                name="reviews"
                type="number"
                defaultValue={0}
                className="py-3 px-4 text-black rounded-md shadow focus:shadow-xl focus:outline-none "
                id="reviews"
                disabled
              />
            </div>
          </div>
          {/* Row 4 */}
          <div className="grid gap-4 grid-cols-2">
            {/* Distributor Email */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="distributorEmail">Meal Distributor Email</label>
              <input
                name="distributorEmail"
                type="text"
                defaultValue={user?.email}
                className="py-3 px-4 text-black rounded-md shadow focus:shadow-xl focus:outline-none "
                id="distributorEmail"
                disabled
              />
            </div>
            {/* Rating */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="rating">Rating</label>
              <input
                name="rating"
                type="number"
                defaultValue={0}
                className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                id="rating"
              />
            </div>
          </div>
          {/* Ingredients Email */}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="ingredients">Ingredients</label>
            <input
              name="ingredients"
              type="text"
              placeholder="Enter some ingredients"
              className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="ingredients"
            />
          </div>
          {/* Description Email */}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="description"
              cols="30"
              rows="5"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="grid gap-4 grid-cols-2">
            {/* Add Meall Button */}
            <button
              onClick={() => setAddMeal("add")}
              type="submit"
              className="py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
            >
              Add Meal
            </button>
            {/* Add to upcoming Button */}
            <button
              onClick={() => setUpcomingMeal("upcoming")}
              type="submit"
              className="py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
            >
              Add to Upcoming
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeal;
