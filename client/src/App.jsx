import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import About from "./pages/about";
import Profile from "./pages/profile";
import CreateListing from "./pages/createListing";
import PrivateRoute from "./components/privateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/createListing" element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
