import React from "react";

const PromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    console.log("RENDERED");
    return (
      <div>
        <p className="absolute z-10 bg-black py-1 px-2 rounded-md text-white">
          Promoted
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default PromotedRestaurant;
