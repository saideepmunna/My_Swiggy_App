import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import MyContext from "../utils/MyContext";
import { useSelector } from "react-redux";

let Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Signin");
  const status = useOnlineStatus();
  const { myName } = useContext(MyContext);
  const cartItems = useSelector((store)=>store.cart.items)
  // console.log(cartItems)
  // console.log(data);
  return (
    
    <div className="flex justify-between">
      <Link to={"/"}>
        <div className="w-20 m-2">
          <img src={LOGO_URL} />
        </div>
      </Link>
      <ul className="flex items-center p-3">
        <li className="m-4 font-semibold">Status: {status ? "✅" : "🔴"}</li>
        <li className="m-4 font-semibold">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="m-4 font-semibold">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="m-4 font-semibold">
          <Link to={"/contact"}>contact us</Link>
        </li>
        <li className="m-4 font-semibold">
          <Link to={"/grocery"}>Instamart</Link>
        </li>
        <li className="m-4 font-semibold text-lg">
          <Link to={"/cart"}>🛒cart({cartItems.length})</Link>
        </li>
        <li
          className="m-4 font-semibold"
          onClick={() => {
            btnNameReact === "Signin"
              ? setBtnNameReact("Signout")
              : setBtnNameReact("Signin");
          }}
        >
          <Link to={"/login"}>{btnNameReact}</Link>
        </li>
        <li className="m-4 font-semibold">{myName}</li>
        {/* <li className="m-4 font-semibold"><button className="loginBtn" onClick={()=>{
          btnNameReact==="login"? setBtnNameReact("logout") : setBtnNameReact("login");
        }}>
          {btnNameReact}
        </button></li> */}
      </ul>
    </div>
  );
};

export default Header;
