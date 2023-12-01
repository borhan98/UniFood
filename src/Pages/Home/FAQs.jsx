import SectionTitle from "../../Components/SectionTitle";

const FAQs = () => {
  return (
    <div className="container mx-auto px-2 lg:px-0 mb-20">
      {/* Section title */}
      <SectionTitle
        secTitle="quick answers"
        secDescrip="Find solutions to common queries in our FAQs section. Simplifying your experience one question at a time."
      />
      {/* Section Content */}
      {/* Question 1 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F89A20]"
      >
        <div className="collapse-title text-xl font-medium">
          1. How often are menus updated?
        </div>
        <div className="collapse-content">
          <p>Menus are updated monthly. providing variety and ensuring fresh dining experiences.</p>
        </div>
      </div>
      {/* Question 2 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F89A20]"
      >
        <div className="collapse-title text-xl font-medium">
          2. How do I request or place an order for meal?
        </div>
        <div className="collapse-content">
          <p>Visit the meals page, select your preferred meals click on the details then make a request.</p>
        </div>
      </div>
      {/* Question 3 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F89A20]"
      >
        <div className="collapse-title text-xl font-medium">
          3. What payment methods are accepted?
        </div>
        <div className="collapse-content">
          <p>We accept various payment methods, including credit cards and university meal cards. Check the payment section for details.</p>
        </div>
      </div>
      {/* Question 4 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F89A20]"
      >
        <div className="collapse-title text-xl font-medium">
          4. Are there vegetarian or vegan options?
        </div>
        <div className="collapse-content">
          <p>Yes, we offer a range of vegetarian and vegan meal options. Check the menu for details.</p>
        </div>
      </div>
      {/* Question 5 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F89A20]"
      >
        <div className="collapse-title text-xl font-medium">
          5. How can I track my meal orders?
        </div>
        <div className="collapse-content">
          <p>Log in to your account and visit the &#39;Requested Meal&#39; section to track the status of your meal orders.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
