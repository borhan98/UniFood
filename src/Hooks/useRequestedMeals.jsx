import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRequestedMeals = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: requestedMeals = [], refetch } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/request?email=${user?.email}`);
      return res.data;
    },
  });

  return [requestedMeals, refetch];
};

export default useRequestedMeals;
