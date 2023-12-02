import PropTypes from "prop-types";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Reviews = ({ _id, meal_title }) => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${_id}`);
      return res.data;
    },
  });
  // const { meal_title, opinion, user_name, user_image, rating } = reviews;

  return (
    <div className="bg-white shadow-md py-10 mt-24">
      <SectionTitle
        secTitle={`Student's Opinion About ${meal_title}`}
        secDescrip="Discover favorite meals like Spaghetti Bolognese through student opinions. Join the discussion, find new favorites, and make informed dining choices"
      />
      <div>
        <Carousel className="mt-20"
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex gap-10 items-center justify-center"
            >
              <div className="text-right">
                <h3 className="text-3xl font-medium text-zinc-700">
                  {review?.meal_title}
                </h3>
                <p className="my-2">&#34;{review?.opinion}&#34;</p>
                <h4 className="mt-6 text-xl font-medium">{review?.user_name}</h4>
                <p className="text-sm tracking-widest">Student</p>
                <div className="flex justify-end gap-4 mt-6">
                    <span className="p-2 rounded-full text-white bg-[#F89A20] "><FaFacebookF /></span>
                    <span className="p-2 rounded-full text-white bg-[#F89A20] "><FaTwitter /></span>
                    <span className="p-2 rounded-full text-white bg-[#F89A20] "><FaLinkedinIn /></span>
                </div>
              </div>
              <figure className="relative w-64 h-64 border-8 border-[#F89A20] rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={review?.user_image}
                  alt="Student Photo"
                />
                <span className="absolute top-5 -left-1 text-white text-2xl p-4 bg-[#F89A20] rounded-full">
                  <FaQuoteLeft />
                </span>
              </figure>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
Reviews.propTypes = {
  _id: PropTypes.string.isRequired,
  meal_title: PropTypes.string.isRequired,
};
