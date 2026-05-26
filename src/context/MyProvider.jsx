import { createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const data = {};

  return <MyContext value={data}>{children}</MyContext>;
};

export default MyProvider;
