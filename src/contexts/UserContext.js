import { createContext, useState } from "react";

export const UserContext = createContext({
  userData: "Default Name",
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>;
};
