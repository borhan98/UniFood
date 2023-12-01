import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoryMeals from "./CategoryMeals";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>UniFood | Home</title>
      </Helmet>
      <Banner />
      <CategoryMeals />
      <FAQs />
    </div>
  );
};

export default Home;
