import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import { FaCheck, FaCcAmazonPay } from "react-icons/fa";

const Checkout = () => {
  const pack = useLoaderData();
  const { title, description, package_name, facilities, price } = pack;

  return (
    <div className="container mx-auto px-2 lg:px-0">
      <SectionTitle secTitle={title} secDescrip="" />
      {/* Information about the package */}
      <div className="flex py-10 gap-6">
        <div className="w-2/3 border-r pr-4">
          <div className="flex justify-between">
            <h3 className="capitalize text-2xl font-medium mb-4">
              about {package_name} Membership
            </h3>
            <span className="text-lg font-medium text-[#F89A20] ">
              ${price}
            </span>
          </div>
          <p className="text-sm md:text-base text-zinc-600">{description}</p>
          <h4 className="capitalize text-2xl font-medium mb-4 mt-6">
            Some facilities
          </h4>
          {facilities.map((facility, index) => (
            <p key={index} className="flex gap-2 mb-2">
              <span className="mt-1 p-1 h-fit rounded-full text-white bg-[#F89A20] ">
                <FaCheck />
              </span>
              <span>{facility}</span>
            </p>
          ))}
        </div>
        <div className="w-1/3 h-fit p-4 py-8 rounded-md shadow bg-base-200">
          <h3 className="text-2xl font-medium mb-8 text-center">Payment</h3>
          <form>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Enter your card number"
                className="py-3 pl-8 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              />
              <span className="absolute top-4 left-2 text-lg">
                <FaCcAmazonPay />
              </span>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="CVV/CVC"
                className="py-3 px-4 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
              />
            </div>
            <button
            type="submit"
            className="py-3 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
          >
            Purchase
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
