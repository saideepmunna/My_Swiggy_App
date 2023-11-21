import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should test Cart rendered or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cart = screen.getByText(/cart/)// Tests a part of a string

  //Assertion

  expect(cart).toBeInTheDocument();
});

it("should test Signin rendered or not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    //Querying
    const loginButton = screen.getByText("Signin")
    //Assertion
  
    expect(loginButton).toBeInTheDocument();
  });


  it("should test Signin button functionality",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    
      //Querying
      const loginButton = screen.getByText("Signin")

      fireEvent.click(loginButton)

      const logoutButton = screen.getByText("Signout")
      //Assertion
    
      expect(logoutButton).toBeInTheDocument();
  })
  