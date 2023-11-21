// import { resArr } from "../utils/mockData";
import ResCard, { withPromotedLabel } from "./Rescard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import StatusError from "./StatusError";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import NetworkError from "./NetworkError";
import MyContext from "../utils/MyContext";
import { useContext } from "react";

const ResContainer = () => {
  const [listOfRests, setListOfrests] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTextBtn, setSearchTextBtn] = useState("");
  const [errorRender, setErrorrender] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestCardPromoted = withPromotedLabel(ResCard);

  const {myName, setMyName} = useContext(MyContext)
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
      if (data.status != 200) {
        throw new Error("Unable to fetch data");
      }

      const json = await data.json();

      // console.log(json);
      //optional chaining
      setListOfrests(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(typeof err);
      setErrorrender(err.message);
    }
  };

  //Conditional rendering
  //   if(listOfRests.length===0){
  //     return <Shimmer />
  //    }
  // console.log(filteredList);

  if (onlineStatus === false) {
    return <NetworkError />;
  }

  return errorRender ? (
    <StatusError />
  ) : filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-50">
      <div className="flex">
        <div className="flex justify-between m-4">
          <input
            className="border-solid border-2 border-sky-500 p-1 rounded-lg mx-2 "
            value={searchTextBtn}
            onChange={(e) => {
              setSearchTextBtn(e.target.value);
            }}
          ></input>
          <button
            className="bg-purple-300 px-2 rounded-lg mx-2"
            onClick={() => {
              let searchedList = listOfRests.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchTextBtn.toLowerCase());
              });
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>

          <button
            className="ml-36 bg-purple-300 px-2 rounded-lg "
            onClick={() => {
              const filteredListItems = listOfRests.filter((restaurant) => {
                return restaurant.info.avgRating > 4.2;
              });
              setFilteredList(filteredListItems); // to update the state Variable which binds with UI.
            }}
            //Whenever the state variable updates, React will trigger the reconciliation process(It will re-render the component)
          >
            Top rated restaurants
          </button>
          <input
            className="border-2 ml-3 px-2 font-normal" value={myName} placeholder="Type for live loading"
            onChange={(e) => {
              setMyName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 w-10/12 mx-auto">
        {filteredList.map((rest) => {
          return (
            <Link to={"/restaurants/" + rest?.info?.id} key={rest?.info?.id}>
              {rest.info.avgRating >= 4.1 ? (
                <RestCardPromoted resData={rest} />
              ) : (
                <ResCard resData={rest} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResContainer;
