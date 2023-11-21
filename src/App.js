import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import ResContainer from "./components/ResContainer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import SigninPage from "./components/SigninPage";
import MyContext from "./utils/MyContext";
import ResContainer from "./components/ResContainer";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const App = () => {
  const [myName, setMyName] = useState("Saideep");

  return (
    <Provider store={appStore}>
       <MyContext.Provider value={{ myName, setMyName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </MyContext.Provider>
    </Provider>
     
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ResContainer />, // if path is /about then load this component on the page
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ), // if path is /about then load this element on the page
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuPage />,
      },
      {
        path:"/login",
        element: <SigninPage />,
      },
      {
        path: "/cart",
      element:<Cart />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(<RouterProvider router={appRouter} />);
