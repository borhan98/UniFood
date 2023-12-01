import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoryMeals from "./CategoryMeals";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>UniFood | Home</title>
      </Helmet>
      <Banner />
      <CategoryMeals />
    </div>
  );
};

export default Home;
