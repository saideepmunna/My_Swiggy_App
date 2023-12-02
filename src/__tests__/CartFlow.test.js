import { act } from "react-dom/test-utils";
import MOCK_MENU_DATA from "../Mocks/RestaurantMenu.json";
import RestaurantMenuPage from "../components/RestaurantMenuPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header"
import "@testing-library/jest-dom"
import Cart from "../components/Cart"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
    status: 200,
  });
});

it("should test accordian button and itemList", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    )
  );

  // const accordianTitle = screen.getByText("Family Packs(8)");

  // expect(accordianTitle).toBeInTheDocument();

  // fireEvent.click(accordianTitle);

  let foodItems = screen.getAllByTestId("foodCategory");

  expect(foodItems.length).toBe(6)

  fireEvent.click(foodItems[2]);

  const dishType = screen.getAllByTestId("foodItem")

  expect(dishType.length).toBe(5);


  // expect(foodItem).toBeInTheDocument();

  // const addBtn = screen.getByTestId("addBtn");

  // fireEvent.click(addBtn);
});


it("should test the workflow of add button to change in cart in header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    )
  );
   
       const noodlesItem = screen.getByText("Noodles(6)");

       fireEvent.click(noodlesItem);

       const addBtns = screen.getAllByTestId("addBtn");

       fireEvent.click(addBtns[1]);
       fireEvent.click(addBtns[1]);

       expect(screen.getByText("🛒cart(2)")).toBeInTheDocument();
  
});

it("should test the workflow of add button to change in cart in header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenuPage />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );
   
    const swiggyShawarma = screen.getByText("Shawarma(2)");
    
   fireEvent.click(swiggyShawarma);

   fireEvent.click(screen.getAllByTestId("addBtn")[0]);
   fireEvent.click(screen.getAllByTestId("addBtn")[0]);

   fireEvent.click(screen.getByTestId("cartBtn"));
   

  const cartData = screen.getByText("Your Cart");

  expect(cartData).toBeInTheDocument();

  expect(((screen.getAllByTestId("cartItem")).length)).toBe(4);


    
  
});