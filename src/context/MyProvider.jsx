import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setNewUser(JSON.parse(storedUser));
    }

    // Firebase observer একবারই attach হবে
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email;
        try {
          const res = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/users/getUser?email=${email}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            },
          );
          const data = await res.json();
          setNewUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setNewUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const data = {
    newUser,
    loading,
  };

  return <MyContext value={data}>{children}</MyContext>;
};

export default MyProvider;
