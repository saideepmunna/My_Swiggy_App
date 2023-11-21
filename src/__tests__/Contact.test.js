import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("should test contact page", () => {
  it("to test contact page header", () => { // test or it both can be used
    //Render
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("to test the placeholder text", () => {
    //rendering
    render(<Contact />);

    //Querying
    const placeholderText = screen.getByPlaceholderText("name");

    //Assertion
    expect(placeholderText).toBeInTheDocument();
  });

  it("should load 2 input boxes rendered", () => {

    //Render
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes).toHaveLength(2);
  });
});

test("should load the button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("To test text submit", () => {
  render(<Contact />);

  const submitTxt = screen.getByText("Submit");
  expect(submitTxt).toBeInTheDocument();
});
