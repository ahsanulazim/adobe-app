import { LuCheck } from "react-icons/lu";
import { Link } from "react-router";

const PaymentSuccessful = () => {
  return (
    <div className="max-w-360 mx-auto p-5">
      <div className="bg-base-100 p-5 rounded-box flex flex-col gap-5 max-w-sm mx-auto items-center justify-center">
        <div className="bg-success text-success-content rounded-full p-2 w-fit">
          <LuCheck className="text-2xl" />
        </div>
        <h2 className="text-xl text-success font-semibold">
          Payment Successfull
        </h2>
        <p className="text-center text-sm">
          Your payment has been processed successfully. You will receive a
          confirmation email shortly.
        </p>
        <Link to="/">
          <button className="btn btn-main btn-wide">Back to Home</button>
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

export default PaymentSuccessful;
