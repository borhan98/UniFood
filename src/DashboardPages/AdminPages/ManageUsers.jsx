import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import User from "./User";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  return (
    <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
      <div className="w-fit mx-auto">
        <SectionTitle secTitle="manage all users" secDescrip="" />
      </div>
      <table className="table mt-6">
        <thead>
          <tr className="bg-[#D1A054] text-white uppercase">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={user._id} user={user} index={index} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
