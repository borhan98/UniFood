import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = ({ meal }) => {
  const { _id, meal_title, image, price, rating, category } = meal;
  const oldRate = ((price * 10) / 100 + price).toFixed(2);

  return (
    <div className="card_style p-4 rounded-md bg-base-200">
      <figure className="w-full">
        <img className="w-full h-52 rounded-md" src={image} alt="" />
      </figure>
      <div>
        <h3 className="text-xl font-semibold text-center mt-6">{meal_title}</h3>
        <p className="flex justify-center gap-6 text-lg font-medium text-zinc-600 my-4">
          <span className="text_clr text-[#F89A20]">${price}</span>
          <span className="line-through">${oldRate}</span>
        </p>
        <p className="flex justify-around items-center gap-6 text-lg font-medium text-zinc-600 my-4 capitalize">
          <span className="py-2 px-4 border rounded-md bg-white">
            {category} Item
          </span>
          <span className="text_clr text-[#F89A20] flex items-center gap-1">
            <FaStar />
            {rating}
          </span>
        </p>
        <Link to={`/details/${_id}`}>
          <button className="py-2 bg-[#F89A20] w-full rounded-md text-white font-medium ">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
Category.propTypes = {
  meal: PropTypes.object.isRequired,
};
