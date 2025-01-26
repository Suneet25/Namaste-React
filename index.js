import React from "react";
import ReactDOM from "react-dom/client";
import Restaurants from "./src/components/Restaurants";

const Container = (
  <>
    <Restaurants />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Container);
