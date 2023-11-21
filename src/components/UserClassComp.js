import React from "react";

class UserClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
      name: "dummy",
      company: "company",
      location: "USA"
      }
    };
    console.log("child-constructor")
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
     
    this.setState({
      userInfo: json
    })
    console.log(json)

  }

  componentDidUpdate(){
    console.log( "component got updated")
  }

  componentWillUnmount(){
    console.log("Cpomponent unmounted")
  }
  render() {
    // const { name, role, city } = this.props; //destructuring the object
    const { name, company, location } = this.state.userInfo;
    console.log("child-render")
    return (
      <div className="userClassComp">
        <h4>Class Component</h4>
        {/* <h2>count: {count}</h2> */}
        {/* <button
          className="countBtn"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        > 
         Click me(+)
        </button> */}
        <p>Name: {name}</p>
        <p>Role: {company}</p>
        <p>City: {location}</p>
      </div>
    );
  }
}

export default UserClassComp;


/*********IMPORTANT**********/

/**
 * ----MOUNTING PHASE------
 * 
 * constructor(dummy data)
 * render (dummy data)
 * 
 * <HTML> rendered on page(dummy)
 * 
 * componentDidMount
 * (API Call)
 * (this.setState) -> State variables are updated
 * 
 * -------UPDATE PHASE-----------
 * 
 * render(API data)
 * <HTML> rendered on page(API data)
 * 
 * componentDidUpdate()
 */