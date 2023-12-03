import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Package = ({ pack }) => {
  const { _id, package_name, price, facilities } = pack;
  
  return (
    <Link to={`/checkout/${_id}`}>
      <div className="p-4 pt-8 rounded-md bg-base-200 shadow-md h-full hover:scale-105 duration-300">
        <span className="p-3 px-5 border font-bold capitalize bg-white rounded-md">{package_name}</span>
        <div className="w-40 h-40 mx-auto my-10 rounded-full bg-[#F89A20] flex justify-center items-center ">
          <p>
            $<span className="text-3xl font-medium">{price}</span>/month
          </p>
        </div>
        {facilities.map((facility, index) => (
          <p key={index} className="flex gap-2 mb-2">
            <span className="mt-1 p-1 h-fit rounded-full text-white bg-[#F89A20] ">
              <FaCheck />
            </span>
            <span>{facility}</span>
          </p>
        ))}
      </div>
    </Link>
  );
};

export default Package;
Package.propTypes = {
  pack: PropTypes.object.isRequired,
};
