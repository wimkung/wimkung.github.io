import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="/login" />
      <DashboardPage path="/dashboard" />
    </Router>
  );
}

export default App;
