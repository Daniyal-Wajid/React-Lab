import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Todos from "./pages/Todos/Todos";
import AboutUs from "./pages/About/AboutUs";
import AuthForm from "./pages/AuthForm/AuthForm";
import SimpleForm from "./pages/SimpleForm/SimpleForm";
import IncrementPage from "./pages/IncrementPage/IncrementPage";
import TogglePages1 from "./pages/TogglePages/TogglePages1";
import TogglePages2 from "./pages/TogglePages/TogglePages2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/authform" element={<AuthForm />} />
      <Route path="/simpleform" element={<SimpleForm />} />
      <Route path="/incrementpage" element={<IncrementPage />} />
      <Route path="/pageone" element={<TogglePages1 />} />
      <Route path="/pagetwo" element={<TogglePages2 />} />
    </Routes>
  );
};

export default App;
