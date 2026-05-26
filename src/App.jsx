import { Route, Routes } from "react-router";
import MainLayout from "./ui/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
