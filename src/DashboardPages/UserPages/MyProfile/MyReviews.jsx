import SectionTitle from "../../../Components/SectionTitle";
import useReviews from "../../../Hooks/useReviews";
import MyReview from "./MyReview";

const MyReviews = () => {
  const [reviews, refetch] = useReviews();
  return (
    <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
      <div className="w-fit mx-auto">
      <SectionTitle secTitle="My Reviews" secDescrip="" />
      </div>
      <table className="table mt-6">
        <thead>
          <tr className="bg-[#D1A054] text-white uppercase">
            <th></th>
            <th>Meal</th>
            <th>Likes</th>
            <th>Reviews</th>
            <th>Actions</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <MyReview
              key={review._id}
              review={review}
              index={index}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
