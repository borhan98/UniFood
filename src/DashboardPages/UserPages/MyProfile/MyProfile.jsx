import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import silverImg from "../../../assets/badge/silver.png";
import goldImg from "../../../assets/badge/gold.png";
import platinumImg from "../../../assets/badge/platinum.png";
import bronzeImg from "../../../assets/badge/bronze.png";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}`)
      .then((res) => setCurrentUser(res.data));
  }, [axiosSecure, user?.email]);

  const { name, email, image, badge } = currentUser;

  let userBadge;
  if (badge === "silver") {
    userBadge = silverImg;
  } else if (badge === "gold") {
    userBadge = goldImg;
  } else if (badge === "platinum") {
    userBadge = platinumImg;
  } else {
    userBadge = bronzeImg;
  }

  return (
    <div className="shadow-md  pb-4 md:pb-14 px-1 md:px-10 mx-1 md:mx-10">
      <Helmet>
        <title>UniFood | My Profile</title>
      </Helmet>
      <SectionTitle secTitle="Your Profile" secDescrip="" />
      <div>
        <figure className="relative w-fit mx-auto rounded-full border-4 border-[#F89A20] mb-14 ">
          <img
            className="w-40 h-40 rounded-full"
            src={image}
            alt="Your image"
          />
          <img
            className="absolute bottom-0 right-0 h-16 w-16 rounded-full"
            src={userBadge}
            alt=""
          />
        </figure>
      </div>
      <div className="space-y-2 md:space-y-4">
        <div>
          <p className="text-zinc-500">Your name</p>
          <p className="text-lg md:text-xl font-semibold mt-2">{name}</p>
        </div>
        <div>
          <p className="text-zinc-500">Your email</p>
          <p className="text-lg md:text-xl font-semibold mt-2">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
