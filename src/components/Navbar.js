import React from "react";
import { Link } from "react-router-dom";
import useCheckOnline from "../hooks/useCheckOnline";

const Navbar = () => {
  const isOnline = useCheckOnline();
  return (
    <div>
      <ul className="NavHeader">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/restaurants"}>Restaurants</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About us</Link>
        </li>
        <li>
          <h1>Online Status : {isOnline ? "🟢" : "🔴"}</h1>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
