import { Outlet } from "react-router";
import { useState } from "react";
import UserContext from "./context/UserContext";
import { getFromLocalStorage } from "./utils/localStorage";
export default function App() {
  const [login, setLogin] = useState(getFromLocalStorage());
  const [item, setItem] = useState();

  return (
    <UserContext.Provider value={{ login, setLogin, item, setItem }}>
      <Outlet />
    </UserContext.Provider>
  );
}
