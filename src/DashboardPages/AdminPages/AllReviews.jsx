import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SingleReview from "./singleReview";

const AllReviews = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allReviews = [], refetch } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });


  return (
    <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
      <Helmet>
        <title>UniFood | All Reviews</title>
      </Helmet>
      <div className="w-fit mx-auto">
        <SectionTitle secTitle="Manage All Reviews" secDescrip="" />
      </div>
      <table className="table mt-6">
        <thead>
          <tr className="bg-[#D1A054] text-white uppercase">
            <th></th>
            <th>Meal</th>
            <th>Likes</th>
            <th>Rating</th>
            <th>Actions</th>
            <th>View Meal</th>
          </tr>
        </thead>
        <tbody>
          {allReviews.map((review, index) => (
            <SingleReview
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

export default AllReviews;
