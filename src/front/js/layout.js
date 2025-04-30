import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar"; 
import { Home } from "./pages/home";
import { Signup } from "./component/signup"; 
import { Form } from "./component/form"; 
import { Demo } from "./pages/demo";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Form />} />
          <Route path="/private" element={<Demo />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
