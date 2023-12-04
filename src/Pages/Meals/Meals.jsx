import { FaSearch } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import Category from "../Home/Category";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Meals = () => {
  const [priceRange, setPriceRange] = useState("");
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [meals, setMeals] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get(
        `/meals?priceRange=${priceRange}&category=${category}&searchValue=${searchValue}`
      )
      .then((res) => setMeals(res.data));
  }, [axiosPublic, priceRange, category, searchValue]);

  return (
    <div className="container mx-auto px-2 lg:px-0 mb-20">
      <Helmet>
        <title>UniFood | Meals</title>
      </Helmet>
      <SectionTitle
        secTitle="meals awaits for you"
        secDescrip="Explore our diverse selection of delectable meals crafted for student satisfaction. From breakfast to dinner, discover a culinary journey that caters to every taste bud. Dive into our menu and savor the essence of delightful dining experiences on campus."
      />
      {/* Search field */}
      <form className="flex justify-center mb-20">
        <input
          onChange={() => setSearchValue(event.target.value)}
          className="p-2 border border-[#F89A20] rounded-l-md focus:outline-none"
          type="search"
          placeholder="Search by meal name"
          name="search"
        />
        <button className="bg-[#F89A20] w-fit px-4 text-white rounded-r-md">
          <FaSearch />
        </button>
      </form>
      {/* Filter by category and price range */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="bg-base-200 p-2 rounde-md">
          <label className="mx-2" htmlFor="category">
            Filter by Category
          </label>
          <select
            onClick={() => setCategory(event.target.value)}
            className="rounded-md p-2 focus:outline-none"
            name="category"
            id="category"
          >
            <option value={""}>All</option>
            <option value={"breakfast"}>Breakfast</option>
            <option value={"lunch"}>Lunch</option>
            <option value={"dinner"}>Dinner</option>
          </select>
        </div>
        <div className="bg-base-200 p-2 rounde-md">
          <label className="mx-2" htmlFor="category">
            Price range
          </label>
          <select
            onClick={() => {
              setPriceRange(event.target.value);
            }}
            className="rounded-md p-2 focus:outline-none"
            name="range"
            id="range"
          >
            <option value={""}>All</option>
            <option value={"7-11"}>7-11</option>
            <option value={"11-15"}>11-15</option>
            <option value={"15-20"}>15-20</option>
            <option value={"20-30"}>20-30</option>
            <option value={"30-50"}>30-50</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <Category key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
