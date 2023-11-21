import { sum } from "../components/sum";


test("Sum function should calculate the sum", () => {
  const result = sum(3,4);

  //Assertion
  expect(result).toBe(7);

});

test("hello", ()=>{
  const res = sum(5,5);

  expect(res).toBe(10);
})