import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MyContext } from "../context/MyProvider";

const Overview = ({ checkoutRef }) => {
  const { selectedPlan, newUser } = useContext(MyContext);

  // TanStack Query mutation — backend-এ order POST করে
  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: async (orderData) => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/orders/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        },
      );
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || "Order creation failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      if (data?.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        toast.error("Payment URL not found");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  // Pay Now handler
  const handlePayNow = async () => {
    if (!selectedPlan) return;

    try {
      // ShippingForm থেকে validated data নেওয়া
      const shippingData = await checkoutRef.current.getFormData();

      // Order payload তৈরি
      const orderData = {
        userId: newUser?.user._id,
        plan: {
          id: selectedPlan.id,
          name: selectedPlan.name,
          price: selectedPlan.price,
          currency: selectedPlan.currency,
          billingCycle: selectedPlan.billingCycle,
        },
        shippingInfo: shippingData,
      };

      createOrder(orderData);
    } catch (validationErrors) {
      // ShippingForm validation fail হলে
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="bg-base-100 rounded-box p-5">
      <h2 className="font-bold text-xl">Order Summary</h2>
      <div className="divider"></div>

      {selectedPlan ? (
        <div className="flex flex-col mb-5">
          {/* Plan Name & Billing */}
          <div className="mb-3">
            <p className="text-sm font-semibold">{selectedPlan.name}</p>
            <p className="text-xs opacity-50">{selectedPlan.tagline}</p>
            <span className="badge badge-warning badge-xs mt-1">
              {selectedPlan.billingCycle}
            </span>
          </div>

          <div>
            <h3 className="flex justify-between">
              <span>Subtotal: </span>
              <span className="font-bold">
                ৳{selectedPlan.price.toLocaleString()}
              </span>
            </h3>
          </div>
          <div className="divider"></div>
          <div>
            <h3 className="flex justify-between">
              <span>Total: </span>
              <span className="font-bold text-xl text-main">
                ৳{selectedPlan.price.toLocaleString()}
              </span>
            </h3>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 mb-5 opacity-50">
          <p className="text-sm text-center">No plan selected yet.</p>
          <p className="text-xs text-center">Go back and choose a plan.</p>
        </div>
      )}

      <button
        onClick={handlePayNow}
        disabled={!selectedPlan || isPending}
        className="btn btn-main w-full rounded-full disabled:opacity-40"
      >
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Pay Now"
        )}
      </button>
    </div>
  );
};

export default Overview;
