import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantCard from "../hooks/useRestaurantCard";
import { SWIGGY_IMAGE_CDN_URL } from "../utils/constants";
import MenuItems from "./MenuItems";

const SingleRestaurantCard = () => {
  const { id } = useParams();
  const { resInfo, categories } = useRestaurantCard({ id });
  const [accordion, setAccordion] = useState(false);
  const [showItems, setShowItems] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  console.log("RES_INFO", resInfo);
  if (!resInfo) return <h1>Loading...</h1>;
  return (
    <>
      <div className="m-auto w-[300px] bg-gray-300 rounded-md">
        <img
          className="h-40 w-full rounded-lg"
          src={`${SWIGGY_IMAGE_CDN_URL}/${resInfo?.cloudinaryImageId}`}
        />
        <div className="px-2 py-3">
          <h1 className="text-lg font-medium">{resInfo?.name}</h1>
          <p
            className={` w-auto inline py-1 px-2 text-xs rounded-md ${
              resInfo?.avgRating ? "inline-block" : "hidden"
            } ${
              Number(resInfo?.avgRating) > 4.4 ? "bg-green-300" : "bg-red-400"
            }`}
          >
            {resInfo?.avgRating}
          </p>
          <p className="font-medium">
            <span className="text-md font-normal">Location:</span>{" "}
            {resInfo?.locality}
          </p>
          <p className="font-medium">
            Cuisines: {resInfo?.cuisines?.join(" , ")}
          </p>
        </div>
      </div>
      <div className="flex flex-col m-auto w-[300px] gap-5 mt-10">
        {categories?.length &&
          categories?.map((category, index) => (
            <MenuItems
              showItems={index === showIndex ? true : false}
              setShowItems={(index) =>
                showIndex === index ? setShowIndex(null) : setShowIndex(index)
              }
              category={category}
              key={category?.card?.card?.categoryId}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default SingleRestaurantCard;
