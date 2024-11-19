import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Todos from "./pages/Todos/Todos";
import AboutUs from "./pages/About/AboutUs";
import AuthForm from "./pages/AuthForm/AuthForm";
import SimpleForm from "./pages/SimpleForm/SimpleForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/authform" element={<AuthForm />} />
      <Route path="/simpleform" element={<SimpleForm />} />
    </Routes>
  );
};

export default App;
