import { Outlet } from "react-router";
import { useState } from "react";
import UserContext from "./context/UserContext";
import { getFromLocalStorage } from "./utils/localStorage";
export default function App() {
  const [login, setLogin] = useState(getFromLocalStorage());

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      <Outlet />
    </UserContext.Provider>
  );
}
