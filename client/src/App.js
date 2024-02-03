import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import BlogPostPage from "./Pages/BlogPostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="blogpost" element={<BlogPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
