import { useState, useEffect } from "react";
const useRestaurantCard = ({ id }: { id: number }) => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchSingleRestaurantData();
  }, []);
  console.log("CATEGORIES", categories);

  const fetchSingleRestaurantData = async () => {
    const data = await fetch(`
  https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8941425&lng=77.6353858&restaurantId=${id}&submitAction=ENTER`);
    const jsonData = await data.json();
    setResInfo(jsonData?.data?.cards?.[2]?.card?.card?.info);
    setCategories(
      jsonData?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card: any) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };
  return { resInfo, categories };
};

export default useRestaurantCard;
