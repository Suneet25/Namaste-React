import { useNavigate } from "react-router-dom";
import { swiggyRestaurantUrl } from "../constants/Urls";
import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RedtaurantCard";
import PromotedRestaurant from "./PromotedRestaurant";
import { UserContext } from "../contexts/UserContext";

export const Restaurants = () => {
  const [listRestaurantData, setListRestaurantData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const { userData, setUserName } = useContext(UserContext);
  const data = useContext(UserContext);
  console.log("DATAAAA", data);

  const PromRestaurantCard = PromotedRestaurant(RestaurantCard);
  const fetchRestaurantsData = async () => {
    const res = await fetch(swiggyRestaurantUrl);
    const json = await res.json();
    setListRestaurantData(
      json?.data?.cards?.find(
        (item) => item?.card?.card?.id === "restaurant_grid_listing"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards?.find(
        (item) => item?.card?.card?.id === "restaurant_grid_listing"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("HELLO", listRestaurantData);
  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const filterRestaurantsOnRating = () => {
    console.log(
      listRestaurantData?.filter(
        (restaurent) => restaurent?.info?.avgRating >= 4.5
      )
    );
    setFilteredRestaurant(
      listRestaurantData?.filter(
        (restaurent) => restaurent?.info?.avgRating >= 4.5
      )
    );
  };

  const handleSearchRestaurant = () => {
    const filteredRestaurants = listRestaurantData?.filter((item) =>
      item?.info?.name?.toLowerCase()?.includes(searchRestaurant?.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurants);
  };

  console.log("ADASDASD", filteredRestaurant);

  return filteredRestaurant?.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="p-4 flex justify-start items-center gap-10">
        <button
          onClick={() => filterRestaurantsOnRating()}
          className="bg-teal-500 text-white py-2 px-3 rounded-md"
        >
          Good Restaurants
        </button>
        <div className="flex gap-2">
          <input
            className="py-2 px-3text-black rounded-md placeholder:text-black "
            name="restaurant"
            value={searchRestaurant}
            placeholder="Search for any restaurant"
            onChange={(e) => setSearchRestaurant(e.target.value)}
          />
          <button
            onClick={() => handleSearchRestaurant()}
            className="bg-teal-500 text-white py-2 px-3 rounded-md"
          >
            Search Restaurants
          </button>
        </div>
        <div className="flex gap-2">
          <input
            className="py-2 px-3text-black rounded-md placeholder:text-black "
            name="userName"
            value={userData}
            placeholder="Enter User name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            onClick={() => handleSearchRestaurant()}
            className="bg-teal-500 text-white py-2 px-3 rounded-md"
          >
            Enter User name
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 p-4">
        {filteredRestaurant?.map((restaurant) => (
          <div key={restaurant?.info?.id}>
            {restaurant?.info?.promoted ? (
              <PromRestaurantCard restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Restaurants;
