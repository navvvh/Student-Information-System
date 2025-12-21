import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/RegistrationPage";
import SearchPage from "./pages/SearchPage.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/records" element={<SearchPage />} />
      </Routes>
  );
};

export default App;
