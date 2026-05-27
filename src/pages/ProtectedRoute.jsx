import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { newUser, loading } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!newUser && !loading) {
      navigate("/login");
    }
  }, [newUser, navigate]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default ProtectedRoute;
