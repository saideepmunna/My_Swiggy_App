import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handlerItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        // const { id,name, price, description, imageId } = item?.card?.info;
        <div
          data-testid="foodItem"
          key={item.card.info.id}
          className="border-b-2 border-gray-400 py-3 px-0 flex align-middle"
        >
          <div className="w-9/12 m-4">
            <p className="font-medium mb-1">{item?.card?.info?.name}</p>
            <p className="text-sm font-medium text-gray-600 mb-3">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-sm font-light">
              {item?.card?.info?.description}
            </p>
          </div>
          {item?.card?.info?.imageId ? (
            <div className="w-3/12 relative">
              <img
                className="w-32 h-24 border-none rounded-sm"
                src={CDN_URL + item?.card?.info?.imageId}
              ></img>

              <div className="absolute top-1 px-4 py-1 bg-white text-green-500 font-semibold border-solid border-2 border-slate-300 rounded-md">
                <button
                 data-testid="addBtn"
                  onClick={() => {
                    handlerItem(item);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          ) : (
            <div className=" px-4 py-1 h-10 bg-white text-green-500 font-semibold border-solid border-2 border-slate-300 rounded-md">
              <button
                data-testid="addBtn"
                onClick={() => {
                  handlerItem(item);
                }}
              >
                ADD
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
