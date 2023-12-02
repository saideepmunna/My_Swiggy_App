import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({catogeries}) => {
  const { title, itemCards } = catogeries?.card?.card;

  // console.log(itemCards)
 

const [showItems, setShowItems] = useState(false)
const expandItems = ()=>{
     setShowItems(!showItems); //TOGGLE FEATURE
    // expandIndex();
}
  return (
    <div>
      <div className="border-b-[15px] border-slate-200">
        <div className="flex justify-between mx-3 my-4 cursor-pointer" data-testid="foodCategory" onClick={expandItems}>
          <h3 className="font-bold text-lg text-slate-800">
            {title}({itemCards.length})
          </h3>
          <p className="text-lg">⬇️</p>
        </div>
          { showItems && <ItemList key={title} items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
