import SectionTitle from "../../../Components/SectionTitle";
import useRequestedMeals from "../../../Hooks/useRequestedMeals";
import RequestedItem from "./RequestedItem";

const RequestedMeals = () => {
  const [requestedMeals, refetch] = useRequestedMeals();

  return (
    <div className="shadow-md pb-14 px-10 mx-10">
      <SectionTitle secTitle="My Requested meals" secDescrip="" />
      <table className="table mt-6">
        <thead>
          <tr className="bg-[#D1A054] text-white uppercase">
            <th></th>
            <th>Meal</th>
            <th>Likes</th>
            <th>Reviews</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requestedMeals.map((meal, index) => (
            <RequestedItem
              key={meal._id}
              meal={meal}
              index={index}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestedMeals;
