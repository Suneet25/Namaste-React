import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useCheckOnline from "../hooks/useCheckOnline";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const isOnline = useCheckOnline();
  const { userData } = useContext(UserContext);

  return (
    <div className="h-15">
      <ul className="flex justify-center items-center gap-4 ">
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
        <li>
          <h1 className="font-bold text-lg">User Name : {userData}</h1>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
