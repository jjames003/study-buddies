import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import ClassSearchPage from "./pages/ClassSearchPage";
import MyClassesPage from "./pages/MyClassesPage";
import FriendsPage from "./pages/FriendsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import AboutUsPage from "./pages/AboutUsPage";

import "./App.css";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Study Buddies
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/my-classes">
              My Classes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/friends">
              Friends
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login">
              Log In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/" element={<ClassSearchPage />} />
            <Route path="/my-classes" element={<MyClassesPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
