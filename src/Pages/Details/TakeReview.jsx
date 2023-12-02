import SectionTitle from "../../Components/SectionTitle";
import PropTypes from "prop-types";

const TakeReview = ({ meal }) => {
  const { meal_title } = meal;
  return (
    <div>
      <SectionTitle
        secTitle="Leave a review"
        secDescrip="Gathering user opinions on our website enhances the customer experience by providing valuable insights into product satisfaction and preferences."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="meal">Meal name</label>
          <input
            type="text"
            defaultValue={meal_title}
            disabled
            className="bg-[#FBC47C] w-full py-2 px-4 focus:outline-none rounded-md shadow focus:shadow-md"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="meal">Rating</label>
          <input
            type="number"
            max={5}
            min={1}
            defaultValue={1}
            className="w-full py-2 px-4 focus:outline-none rounded-md shadow focus:shadow-md"
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="review">Your opinion</label>
        <textarea
          className="w-full py-2 px-4 focus:outline-none rounded-md shadow focus:shadow-md"
          name="review"
          placeholder="Leave your opinion here..."
          id="review"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="w-fit mx-auto mt-10">
        <button className="py-3 px-5 bg-[#F89A20] border border-[#F89A20] hover:bg-transparent hover:text-zinc-700 text-lg duration-300 rounded-md text-white font-medium ">
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default TakeReview;
TakeReview.propTypes = {
  meal: PropTypes.object.isRequired,
};
