import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Package from "./Package";

const Packages = () => {
  const axiosPublic = useAxiosPublic();
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      return res.data;
    },
  });

  return (
    <div className="container mx-auto px-2 lg:px-0 mb-20 ">
      <SectionTitle
        secTitle="Membership plan"
        secDescrip="Explore Silver, Gold, and Platinum plans tailored to your preferences. Find budget-friendly options, flexibility, or a premium experience. Compare plans to discover the perfect fit for you"
      />
      <div className="grid gap-6 md:grid-cols-3 mt-10">
        {
            packages.map(pack => <Package key={pack._id} pack={pack} />)
        }
      </div>
    </div>
  );
};

export default Packages;
