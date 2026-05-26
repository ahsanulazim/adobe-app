import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MyProvider from "./context/MyProvider.jsx";
import QueryProvider from "./query/QueryProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <MyProvider>
          <App />
        </MyProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
