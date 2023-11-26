import { useContext } from "react";
import MyContext from "../utils/MyContext";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData?.info;
  const data = useContext(MyContext) 
  return (
    <div className="p-3 bg-slate-100 rounded-lg">
      <img className="h-[150px] w-full rounded-md"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="res-logo"
      />
      <h2 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</p>
      <div className="flex">
      <p className="font-medium mr-3">⭐{avgRating}</p>
      <p className="font-medium">{sla.deliveryTime} mins</p>
      {/* <p>Name:{data.loginUserName}</p> */}
      </div>
    </div>
  );
};

export const withRatedLabel = ()=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute text-white bg-rose-400 px-1 mt-2 rounded-sm"> Top Rated</label> {/*To overlap we use overlap*/}
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard;