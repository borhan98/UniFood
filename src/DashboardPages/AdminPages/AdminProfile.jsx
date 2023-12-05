import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMeals from "../../Hooks/useMeals";

const AdminProfile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [meals] = useMeals();
  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}`)
      .then((res) => setCurrentUser(res.data));
  }, [axiosSecure, user?.email]);

  const { name, email, image } = currentUser;
  const adminAdded = meals.filter(meal => meal.distributor_email === email);

  return (
    <div className="shadow-md  pb-4 md:pb-14 px-1 md:px-10 mx-1 md:mx-10">
      <Helmet>
        <title>UniFood | My Profile</title>
      </Helmet>
      <SectionTitle secTitle="Your Profile" secDescrip="" />
      <div>
        <figure className="w-fit mx-auto rounded-full border-4 border-[#F89A20] mb-14 ">
          <img
            className="w-40 h-40 rounded-full"
            src={image}
            alt="Your image"
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
        <div>
          <p className="text-zinc-500">Your total added meal</p>
          <p className="text-lg md:text-xl font-semibold mt-2">{adminAdded.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
