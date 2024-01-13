import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import MakeReview from "./MakeReview";
import Reviews from "./Reviews";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Details = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const meal = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    meal_title,
    image,
    distributor_name,
    description,
    ingredients,
    post_time,
    rating,
    likes,
    reviews,
    category,
    price,
  } = meal;
  
  // const [makeLike, setMakeLike] = useState(localStorage.getItem(`like${_id}${user?.email}`));
  const [totalLikes, setTotalLikes] = useState(likes);
  const like = JSON.parse(localStorage.getItem(`like${_id}${user?.email}`));

  // load user based on the logged in user
  const { data: loadedUser = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  // load reviews based on the meal id
  const { data: mealReviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${_id}`);
      return res.data;
    },
  });

  // Handle like meal
  const handleLike = () => {
    const liker = user?.email;
    if (user) {
      const likeIdInLs = localStorage.getItem(`${_id}${liker}`);
      if (likeIdInLs) {
        localStorage.removeItem(`${_id}${liker}`);
        localStorage.removeItem(`like${_id}${liker}`);
        // setMakeLike(false);
        setTotalLikes(parseInt(totalLikes) - 1);
      } else {
        localStorage.setItem(`${_id}${liker}`, `${_id}${liker}`);
        localStorage.setItem(`like${_id}${liker}`, true);
        // setMakeLike(true);
        setTotalLikes(parseInt(totalLikes) + 1);
      }
      // increase & decrese likes for meal
      const isLike = { like };
      axiosPublic.patch(`/meals/${_id}`, isLike).then(() => {});
    } else {
      Swal.fire({
        text: "You have to login first to like any meal",
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

  const handleMealRequest = () => {
    const userBadge = loadedUser.badge;
    if (user) {
      if (
        userBadge === "silver" ||
        userBadge === "gold" ||
        userBadge === "platinum"
      ) {
        const requestedMeal = {
          user_name: user?.displayName,
          user_email: user?.email,
          meal_id: _id,
          meal_title,
          status: "pending",
        };
        // handle post meal request to databse
        axiosPublic.post("/request", requestedMeal).then((res) => {
          if (res.data.insertedId) {
            toast.success(`Request submited`, {
              style: {
                background: "#000000",
                padding: "12px",
                color: "#FFFAEE",
              },
            });
          }
        });
      } else {
        // Inform to the logged in user to purchase a package
        Swal.fire({
          icon: "error",
          title: "You don't have any packages!",
          text: "You have to purchage a package before request for meal!",
        });
      }
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "You have to login before request for meal!",
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

  // const dateTime = new Date().toLocaleString()

  return (
    <div className="bg-base-200 pb-20">
      <div className="container mx-auto px-2 lg:px-0">
        <Helmet>
          <title>UniFood | Meal Details</title>
        </Helmet>
        <figure className="relative rounded-b-md overflow-hidden">
          <img
            className="w-full h-[250px] md:h-[450px] object-cover"
            src={image}
            alt="Meal image"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-20"></div>
        </figure>
        {/* Like and Price */}
        <div className="flex items-center justify-between my-6">
          <button
            onClick={handleLike}
            className="py-1 md:py-3 px-3 md:px-5 flex gap-2 font-semibold items-center bg-white rounded-md shadow-md"
          >
            <span
              className={
                like ? "text-[#F89A20] text-xl" : "text-gray-400 text-xl"
              }
            >
              <BiSolidLike />
            </span>
            <span>{like ? "Dislike" : "Like"}</span>
            <span>{totalLikes}</span>
          </button>
          <p className="text-sm md:text-base lg:text-xl font-semibold py-1 md:py-2 px-3 md:px-5 rounded-md border border-[#F89A20] text-[#F89A20] ">
            ${price}
          </p>
        </div>
        {/* Divider */}
        <div className="divider"></div>
        {/* all details about the meal */}
        <h2 className="text-xl md:text-4xl font-semibold text-zinc-700">{meal_title}</h2>
        <p className="text-sm md:text-base text-zinc-600 mt-2 md:mt-6">{description}</p>
        <div className="grid md:grid-cols-2 gap-3 md:gap-6 mt-10">
          {/* Ingredients */}
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-xl font-medium mb-6">Ingredients</h3>
            {ingredients.map((item, index) => (
              <p
                key={index}
                className="flex items-center gap-2 mb-2 capitalize"
              >
                <span className="text-sm md:text-base p-1 bg-[#F89A20] rounded-full text-white">
                  <FaCheck />
                </span>
                {item}
              </p>
            ))}
          </div>
          {/* Others details */}
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-xl font-medium mb-6">Some Information</h3>
            <p className="text-sm md:text-base mb-2 capitalize text-zinc-600">
              Category: {category}
            </p>
            <p className="text-sm md:text-base mb-2 capitalize text-zinc-600">
              Distributor: {distributor_name}{" "}
            </p>
            <p className="text-sm md:text-base mb-2 capitalize text-zinc-600">
              Posted: {post_time}
            </p>
            <p className="text-sm md:text-base mb-2 capitalize text-zinc-600">
              Rating: ({rating})
            </p>
            <p className="text-sm md:text-base mb-2 capitalize text-zinc-600">
              Reviews: ({reviews})
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto mt-10">
          <button
            onClick={handleMealRequest}
            className="py-3 px-5 bg-[#F89A20] border border-[#F89A20] hover:bg-transparent hover:text-zinc-700 text-lg duration-300 rounded-md text-white font-medium "
          >
            Meal Request
          </button>
        </div>
        {/* All reviews for the meal */}
        {reviews ? (
          <Reviews mealReviews={mealReviews} meal_title={meal_title} />
        ) : (
          ""
        )}
        {/* Take review from user */}
        <MakeReview meal={meal} />
      </div>
    </div>
  );
};

export default Details;
