import { useNavigate } from "react-router-dom";
import { SWIGGY_IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleRestaurtantClick = (resId) => {
    navigate(`/restaurants/${resId}`);
  };
  return (
    <div
      className="rounded-lg bg-gray-200 w-[200px] "
      key={restaurant?.info?.id}
      onClick={() => handleRestaurtantClick(restaurant?.info?.id)}
    >
      <img
        className="h-40 w-full rounded-lg"
        src={`${SWIGGY_IMAGE_CDN_URL}/${restaurant?.info?.cloudinaryImageId}`}
      />
      <div className="p-2">
        <h3 className="line-clamp-1">{restaurant?.info?.name}</h3>
        <p
          className={` w-auto inline py-1 px-2 text-xs rounded-md ${
            restaurant?.info?.avgRating ? "inline-block" : "hidden"
          } ${
            Number(restaurant?.info?.avgRating) > 4.4
              ? "bg-green-300"
              : "bg-red-400"
          }`}
        >
          {restaurant?.info?.avgRating}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
