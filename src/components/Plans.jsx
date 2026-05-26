import PricingCard from "./PricingCard";

const Plans = () => {
  return (
    <section>
      <div className="max-w-360 mx-auto px-5 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Find Your Perfect Plan
          </h2>
          <p>
            Find the best creative apps in the world with one Adobe Creative
            Cloud Subscription
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </section>
  );
};

export default Plans;
