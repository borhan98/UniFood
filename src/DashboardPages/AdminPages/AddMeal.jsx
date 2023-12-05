import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";

const AddMeal = () => {
  return (
    <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
      <Helmet>
        <title>UniFood | Add Meal</title>
      </Helmet>
      <div className="w-fit mx-auto">
        <SectionTitle secTitle="Add new meal" secDescrip="" />
      </div>
    </div>
  );
};

export default AddMeal;
