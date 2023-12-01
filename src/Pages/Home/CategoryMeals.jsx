import useMeals from "../../Hooks/useMeals";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";
import "./Category.css";
import SectionTitle from "../../Components/SectionTitle";

const CategoryMeals = () => {
  const [meals] = useMeals();

  const breakfast = meals.filter((meal) => meal.category === "breakfast");
  const lunch = meals.filter((meal) => meal.category === "lunch");
  const dinner = meals.filter((meal) => meal.category === "dinner");

  return (
    <div className="container mx-auto px-2 lg:px-0">
        <SectionTitle secTitle="Meals By Category" secDescrip="Explore culinary diversity with our 'Meal by Category' section, offering a curated selection of delicious dishes to suit every taste bud at your university hostel" />
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <div className="w-fit mx-auto mb-10">
          <TabList className={"flex"}>
            <Tab className={"px-3 py-1 rounded-t border-b "}>All Meals</Tab>
            <Tab className={"px-3 py-1 rounded-t border-b "}>Breakfast</Tab>
            <Tab className={"px-3 py-1 rounded-t border-b "}>Lunch</Tab>
            <Tab className={"px-3 py-1 rounded-t border-b "}>Dinner</Tab>
          </TabList>
        </div>
        <TabPanel>
          {/* All Meals */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meals.map((meal) => (
              <Category key={meal._id} meal={meal} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* Breakfast */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {breakfast.map((meal) => (
              <Category key={meal._id} meal={meal} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* Lunch */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lunch.map((meal) => (
              <Category key={meal._id} meal={meal} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* Dinner */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dinner.map((meal) => (
              <Category key={meal._id} meal={meal} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryMeals;
