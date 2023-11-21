import UserClassComp from "./UserClassComp";
import UserFnComponent from "./UserFnComponent";
import UserClassComp from "./UserClassComp";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("Parent-Constructor")
  }
componentDidMount(){
    console.log("Parent-mounted")
}
  render() {
    console.log("Parent-render")
    return (
      <>
        <h1>About</h1>
        <h2>This is a food delivery app</h2>
        <UserClassComp
          // name={"Saideep Goud"}
          // role={"Front-end developer"}
          // city={"Hyderabad"}
        />
      </>
    );
  }
}

// const About = ()=>{
//     return (
//         <>
//         <h1>About</h1>
//         <h2>This is a food delivery app</h2>
//         <UserFnComponent name={"Saideep Goud"} role= {"Front-end developer"} city={"Hyderabad"}/>
//         <UserClassComp name={"Saideep Goud"} role= {"Front-end developer"} city={"Hyderabad"}/>
//         </>
//     );
// }

export default About;
