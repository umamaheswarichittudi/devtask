import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/create-account" element={<SignupScreen />} />
        <Route path="/account-settings" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;