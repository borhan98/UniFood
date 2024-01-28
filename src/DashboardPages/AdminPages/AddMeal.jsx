import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const image_api_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

const AddMeal = () => {
  const [addMeal, setAddMeal] = useState("");
  const [upcomingMeal, setUpcomingMeal] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // handle add new meal
  const onSubmit = (data, e) => {
    // upload image to imgBB
    const image_file = { image: data.image[0] };
    axiosPublic.post(image_api, image_file, {
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      if (res.data.success) {
        // new meal to add
        const newMeal = {
          meal_title: data.meal_title,
          category: data.category,
          price: parseFloat(data.price),
          ingredients: data.ingredients.split(","),
          description: data.description,
          image: res.data.data.display_url,
          reviews: 0,
          likes: 0,
          rating: 0,
          post_time: new Date().toLocaleDateString(),
          distributor_name: user?.displayName,
          distributor_email: user?.email,
        };

        // add meal
        if (addMeal) {
          // add a new meal
          axiosSecure.post(`https://unifood-server.vercel.app/meals`, newMeal).then((res) => {
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
        // add to upcoming
        if (upcomingMeal) {
          // add a new meal to upcomonig
          axiosSecure
            .post(`https://unifood-server.vercel.app/upcoming`, newMeal)
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
        e.target.reset();
      } else {
        return toast.error(`Something went wrong when you try to host image`, {
          style: {
            background: "#000000",
            padding: "12px",
            color: "#FFFAEE",
          },
        });
      }
    })
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Row 1 */}
          <div className="grid gap-4 grid-cols-2">
            {/* Distributor Name */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="distributorName">Meal Distributor Name</label>
              <input
                type="text"
                {...register("distributorName")}
                defaultValue={user?.displayName}
                className="py-3 px-4 text-black rounded-md shadow focus:shadow-xl focus:outline-none "
                id="distributorName"
                disabled
              />
            </div>
            {/* Distributor Email */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="distributorEmail">Meal Distributor Email</label>
              <input
                {...register("distributorEmail")}
                type="text"
                defaultValue={user?.email}
                className="py-3 px-4 text-black rounded-md shadow focus:shadow-xl focus:outline-none "
                id="distributorEmail"
                disabled
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid gap-4 grid-cols-2">
            {/* Meal title */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="mealtitle">Your meal title</label>
              <input
                {...register("meal_title", { required: true })}
                type="text"
                placeholder="Enter meal title"
                className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                id="mealtitle"
              />
              {errors.meal_title && (
                <span className="text-red-500">This field is required*</span>
              )}
            </div>
            {/* category */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="category">Meal category</label>

              <select
                {...register("category", { required: true })}
                className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                id="category"
              >
                <option value={"breakfast"}>Breakfast</option>
                <option value={"lunch"}>Lunch</option>
                <option value={"dinner"}>Dinner</option>
              </select>
              {errors.category && (
                <span className="text-red-500">This field is required*</span>
              )}
            </div>
          </div>
          {/* price */}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="price">Meal price</label>
            <input
              type="text"
              {...register("price", { required: true, pattern: /^\d+(\.\d+)?$/ })}
              placeholder="Enter price"
              className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="price"
            />
            {errors.price && (
              <span className="text-red-500">Please input a valid number*</span>
            )}
          </div>
          {/* Ingredients*/}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="ingredients">Ingredients</label>
            <input
              {...register("ingredients", { required: true })}
              type="text"
              placeholder="Enter some ingredients"
              className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="ingredients"
            />
            {errors.ingredients && (
              <span className="text-red-500">This field is required*</span>
            )}
          </div>
          {/* Description*/}
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="py-3 px-4 text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              id="description"
              cols="30"
              rows="5"
              placeholder="Enter description"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">This field is required*</span>
            )}
          </div>
          {/* Photo*/}
          <div className="flex flex-col justify-center items-center border-2 border-[#F89A20] space-y-2 mb-4 rounded-md">
            {/* TODO: upload photo */}
            <input type="file" {...register('image', { required: true })} className="img_upload w-full p-10" />
            {errors.image && (
              <span className="text-red-500">This field is required*</span>
            )}
          </div>
          <div className="grid gap-4 grid-cols-2">
            {/* Add Meall Button */}
            <button
              onClick={() => setAddMeal("add")}
              type="submit"
              disabled={false}
              className={`py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest `}
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
