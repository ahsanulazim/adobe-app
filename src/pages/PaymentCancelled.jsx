import { LuX } from "react-icons/lu";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div className="max-w-360 mx-auto p-5">
      <div className="bg-base-100 p-5 rounded-box flex flex-col gap-5 max-w-sm mx-auto items-center justify-center">
        <div className="bg-error text-error-content rounded-full p-2 w-fit">
          <LuX className="text-2xl" />
        </div>
        <h2 className="text-xl text-error font-semibold">Payment Cancelled</h2>
        <p className="text-center text-sm">
          Hey, seems like there was some trouble. We are there with you. Just
          hold back.
        </p>
        <Link to="/dashboard">
          <button className="btn btn-main btn-wide">Try Again</button>
        </Link>
        <p className="text-center text-xs">
          Need help? Contact our support team at{" "}
          <a
            className="link text-blue-600 link-hover"
            href="mailto:support@adobe-gnt.vercel.app"
          >
            support@adobe-gnt.vercel.app
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentCancelled;
