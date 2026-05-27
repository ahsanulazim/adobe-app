import { useContext } from "react";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router";
import { MyContext } from "../context/MyProvider";

const PricingCard = ({ plan }) => {
  const { setSelectedPlan } = useContext(MyContext);

  return (
    <div
      className={`card bg-base-100 shadow-sm ${plan.popular ? "border-blue-500 border" : ""}`}
    >
      <div className="card-body justify-between">
        <div>
          {plan.popular && (
            <span className="badge badge-xs badge-warning">Most Popular</span>
          )}

          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl font-bold">{plan?.name}</h2>
              <p className="text-xs opacity-50">{plan.tagline}</p>
            </div>
            <span className="text-xl">৳{plan.price}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {plan.features.map((feature, i) => (
              <li key={i}>
                <LuCheck className="size-4 me-2 inline-block text-success" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link to="/checkout">
            <button
              onClick={() => setSelectedPlan(plan)}
              className={`btn ${plan.popular ? "btn-main" : "btn-outline border-blue-600 text-blue-600"} rounded-full btn-block`}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
