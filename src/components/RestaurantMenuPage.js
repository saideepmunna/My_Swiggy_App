import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useDispatch } from "react-redux";

const RestaurantMenuPage = () => {
  // const [ resInfo, setResInfo ] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //Using Custom Hook for fetching data

  const [showIndex, setShowIndex] = useState(null);

  const dispatch = useDispatch();

  

  if (resInfo === null) return <Shimmer/>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const {itemCards} = resInfo;
  // console.log(resInfo)

  const menuCard = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log(menuCard)

  const foodMenu = menuCard.filter((card) => {
    return (
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log(foodMenu);
  

  return (
    <div className="w-7/12 mx-auto">
      <div className="border-b-2 border-gray-400 p-3">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
        <p className="text-gray-600">{costForTwoMessage}</p>
      </div>
      {foodMenu.map((foodCategory) => {
        // console.log(card);
        return (
          //Controlled component
          <RestaurantCategory
            key={foodCategory.card.card.title}
            catogeries={foodCategory}
            // showItems={index === showIndex ? true : false}
            expandIndex={() => {
              // setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
