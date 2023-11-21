import { useSelector } from "react-redux";

const Cart = () => {
  const cartDishes = useSelector((store) => store.cart.items);
  const resInfo = useSelector((store) => store.cart.basicResInfo);
  console.log(resInfo);
  console.log(cartDishes);
  return (
    cartDishes.length===0?(<div className="text-center font-semibold">
      <h1>Your cart is empty. Please add items.</h1>
      <img src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" className="mx-auto w-96"></img>
    </div>):
    <div>
       <div className="w-5/12 mx-auto font-bold p-3">
        <h1>Your Cart</h1>
      </div>
      <div> 
      <div className="w-5/12 mx-auto bg-slate-200 p-4">
        {cartDishes.map((item) => {
          return (
            <div className="flex justify-between m-2">
              <h1 key={item?.card?.info?.id}>{item?.card?.info?.name}</h1>
              <h1>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h1>
            </div>
          );
        })}
        <div className=" flex justify-between m-2 font-bold">
          <h1>To pay </h1>{" "}
          <h1>
            ₹
            {cartDishes.reduce(
              (total, item) =>
                total +
                (item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100,
              0
            )}
          </h1>
        </div>
      </div>
      <div className="bg-green-500 text-white font-bold text-lg w-5/12 mx-auto mt-4 text-center p-3 cursor-pointer">
        Proceed to pay
      </div>
    </div>
    </div>
    
  );
};

export default Cart;
