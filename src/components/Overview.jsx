import { Link } from "react-router";

const Overview = ({}) => {
  return (
    <div className="bg-base-100 rounded-box p-5">
      <h2 className="font-bold text-xl">Order Summery</h2>
      <div className="divider"></div>
      <div className="flex flex-col mb-5">
        <div>
          <h3 className="flex justify-between">
            <span>Subtotal: </span>
            <span className="font-bold">৳17500</span>
          </h3>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="flex justify-between">
            <span>Total: </span>
            <span className="font-bold text-xl text-main">৳17500</span>
          </h3>
        </div>
      </div>

      <Link to="#">
        <button className="btn btn-main w-full rounded-full">Pay Now</button>
      </Link>
    </div>
  );
};

export default Overview;
