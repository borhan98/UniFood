import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoryMeals from "./CategoryMeals";
import FAQs from "./FAQs";
import Packages from "./Packages";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>UniFood | Home</title>
      </Helmet>
      <Banner />
      <CategoryMeals />
      <FAQs />
      <Packages />
    </div>
  );
};

export default Home;
