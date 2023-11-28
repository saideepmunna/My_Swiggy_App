import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard";
import { withRatedLabel } from "../components/ResCard";
import MOCK_DATA from "../Mocks/RestaurantData.json";
import "@testing-library/jest-dom"

it("should test restaurant card component", () => {
  render(<ResCard resData={MOCK_DATA} />);


  //Querying
  const restaurantName = screen.getByText("Pizza Hut");

  //Assertion
  
  expect(restaurantName).toBeInTheDocument();
});

it("should test resCard with promoted label", ()=>{
   
    const RatedLabelCard = withRatedLabel(ResCard)
    render(<RatedLabelCard resData={MOCK_DATA}/>)

    const ratedLabel = screen.getByText("Top Rated")

    expect(ratedLabel).toBeInTheDocument()
});