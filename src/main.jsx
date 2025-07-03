import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./Onboarding /Onboarding.jsx";
import Layout from "./components/layout/Layout.jsx";
import Onboarding2 from "./Onboarding /Onboarding2.jsx";
import Onboarding3 from "./Onboarding /Onboarding3.jsx";
import Onboarding4 from "./Onboarding /Onboarding4.jsx";
import Login from "./Auth/Login.jsx";
import LoginWelcom from "./Auth/LoginWelcom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/onboarding4" element={<Onboarding4 />} />
          <Route path="/Loginwelcom" element={<LoginWelcom />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
