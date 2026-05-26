import { useRef } from "react";
import ShippingForm from "../components/ShippingForm";
import Overview from "../components/Overview";

const Checkout = () => {
  const checkoutRef = useRef(null);

  return (
    <section className="px-5 mb-5 min-h-[calc(100dvh-65px)] flex items-center justify-center">
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-8 gap-5 flex-1 p-5">
        <div className="lg:col-span-6">
          <div className="bg-base-100 p-5 rounded-box">
            <h2 className="text-xl font-bold">Shipping & Billing</h2>
            <div className="divider"></div>
            <div>
              <ShippingForm ref={checkoutRef} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <Overview />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
