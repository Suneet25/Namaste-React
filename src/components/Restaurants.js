import { useNavigate } from "react-router-dom";
import { swiggyRestaurantUrl } from "../constants/Urls";
import { useState, useEffect } from "react";

export const Restaurants = () => {
  const [listRestaurantData, setListRestaurantData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const navigate = useNavigate();
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

  const handleRestaurtantClick = (resId) => {
    navigate(`/restaurants/${resId}`);
  };

  return filteredRestaurant?.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="functionalityContainer">
        <button onClick={() => filterRestaurantsOnRating()}>
          Good Restaurants
        </button>
        <input
          name="restaurant"
          value={searchRestaurant}
          placeholder="Search for any restaurant"
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        <button onClick={() => handleSearchRestaurant()}>
          Search Restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurant?.map((restaurant) => (
          <div
            className="restaurant"
            key={restaurant?.info?.id}
            onClick={() => handleRestaurtantClick(restaurant?.info?.id)}
          >
            <img
              className="restaurantImg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}
            />
            <div>
              <h3>{restaurant?.info?.name}</h3>
              <p className="restaurentRating">{restaurant?.info?.avgRating}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Restaurants;
