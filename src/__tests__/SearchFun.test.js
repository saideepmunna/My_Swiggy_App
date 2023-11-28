import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/SwiggyAPIData.json";
import ResContainer from "../components/ResContainer";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// Mocking the fetch function
//assigning a Jest mock function to the fetch function in the global context.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
    status: 200,
  });
});

it("should test the workflow of the search function", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <ResContainer />
      </BrowserRouter>
    )
  );

  //Querying

  const searchBtn = screen.getByRole("button", {name: "Search"});

  //Assertion

//   expect(searchBtn).toBeInTheDocument();

  const inputBox = screen.getByTestId("searchInput");

  fireEvent.change(inputBox, {target:{value:"pizza"}});

  fireEvent.click(searchBtn);

  const cardItems = screen.getAllByTestId("testCardItem");

  expect(cardItems.length).toBe(2);

});
