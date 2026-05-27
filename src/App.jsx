import { Route, Routes } from "react-router";
import MainLayout from "./ui/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Plans from "./components/Plans";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import PaymentCancelled from "./pages/PaymentCancelled";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Plans />} />
            <Route path="/dashboard/plans" element={<Plans />} />
          </Route>
          <Route path="/payment-success" element={<PaymentSuccessful />} />
          <Route path="/payment-cancelled" element={<PaymentCancelled />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
