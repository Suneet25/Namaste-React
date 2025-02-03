import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantCard from "../hooks/useRestaurantCard";

const RestaurantCard = () => {
  const { id } = useParams();
  const resInfo = useRestaurantCard({ id });

  if (!resInfo) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{resInfo?.name}</h1>
      <p>{resInfo?.avgRating}</p>
      <p>{resInfo?.locality}</p>
      <p>Cuisines: {resInfo?.cuisines?.join(" , ")}</p>
    </div>
  );
};

export default RestaurantCard;
