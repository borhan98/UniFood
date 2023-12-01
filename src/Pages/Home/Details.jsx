import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

const Details = () => {
  const meal = useLoaderData();
  const {
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
  // const dateTime = new Date().toLocaleString()

  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-2 lg:px-0">
        <Helmet>
          <title>UniFood | Meal Details</title>
        </Helmet>
        <figure className="relative rounded-b-md overflow-hidden">
          <img
            className="w-full h-[450px] object-cover"
            src={image}
            alt="Meal image"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-20"></div>
        </figure>
        {/* Like and Price */}
        <div className="flex items-center justify-between my-6">
          <button className="py-3 px-5 flex gap-2 font-semibold items-center bg-white rounded-md shadow-md">
            <span className="text-gray-400 text-xl">
              <BiSolidLike />
            </span>
            <span>Like</span>
            <span>{likes}</span>
          </button>
          <p className="text-sm md:text-base lg:text-xl font-semibold py-2 px-5 rounded-md border border-[#F89A20] text-[#F89A20] ">
            ${price}
          </p>
        </div>
        {/* Divider */}
        <div className="divider"></div>
        {/* all details about the meal */}
        <h2 className="text-4xl font-semibold text-zinc-700">{meal_title}</h2>
        <p className="text-sm md:text-base text-zinc-600 mt-6">{description}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Ingredients */}
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-xl font-medium mb-6">Ingredients</h3>
            {ingredients.map((item, index) => (
              <>
                <p
                  key={index}
                  className="flex items-center gap-2 mb-2 capitalize"
                >
                  <span className="p-1 bg-[#F89A20] rounded-full text-white">
                    <FaCheck />
                  </span>
                  {item}
                </p>
              </>
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
              Rating: {rating}
            </p>
            <p className="text-sm md:text-base mb-2 capitalize text-zinc-600">
              Reviews: {reviews}
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto mt-10 pb-20">
          <button className="py-3 px-5 bg-[#F89A20] border border-[#F89A20] hover:bg-transparent hover:text-zinc-700 text-lg duration-300 rounded-md text-white font-medium ">
            Meal Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
