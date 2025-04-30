import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Form } from "../component/form";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      {store.login ? <Navigate to="/private" /> : <Form />}
    </div>
  );
};

export default Home;