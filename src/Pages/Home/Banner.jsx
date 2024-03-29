import { FaSearch } from "react-icons/fa";
import banner1 from "../../assets/Banner/banner1.png";
import banner2 from "../../assets/Banner/banner2.png";
import banner3 from "../../assets/Banner/banner3.png";
import banner5 from "../../assets/Banner/banner5.png";
import banner6 from "../../assets/Banner/banner6.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="h-fit md:h-[700px] py-4 md:py-0  bg-[#f89a2095]">
      <div className="h-full container mx-auto px-2 lg:px-0 flex items-center gap-0 md:gap-6">
        <div className="flex-1">
          {/* Banner title */}
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold capitalize">
            Easy meal management awaits
          </h1>
          {/* banner description */}
          <p className="text-[12px] md:test-base text-zinc-600 my-4">
            Your starting point to explore the world of delicious meals! Get
            acquainted with our hostel meal management system and discover a
            variety of culinary delights awaiting you.
          </p>
          {/* Search field in the banner */}
          <div className="grid grid-cols-3 mt-8">
            <input
              className="col-span-2 p-1 md:p-2 rounded-l-md focus:outline-none"
              type="search"
              name="search"
            />
            <button className="bg-[#F89A20] w-fit px-4 text-white rounded-r-md">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Carousel className="flex items-center" autoPlay={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}>
            <div className="flex items-center h-full">
              <img src={banner1} />
            </div>
            <div className="flex items-center h-full">
              <img src={banner2} />
            </div>
            <div className="flex items-center h-full">
              <img src={banner3} />
            </div>
            <div className="flex items-center h-full">
              <img src={banner5} />
            </div>
            <div className="flex items-center h-full">
              <img src={banner6} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
