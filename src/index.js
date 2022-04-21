import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App"
import Home from "./pages/Home";
import NoRoute from "./pages/NoRoute";
import SignIn from "./pages/SignIn";
import ResetCss from "./styles/shared/ResetCss";

render(
  <BrowserRouter>
    <ResetCss />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoRoute />} />
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
