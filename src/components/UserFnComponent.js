import { useState } from "react";


const UserFnComponent = ({name, role, city})=>{
    const [count, setCount] = useState(0);
    const [count1] = useState(1);
    console.log(useState());
    return (
        <div className="userFunComp"> 
            <h4>Functional Component</h4>
            <h2>count: {count}</h2>
            <h2>count1: {count1}</h2>
            <button className="countBtn" onClick={
                ()=>{
                    setCount(count+1)
                }
            }>Click me(+)</button>
            <button className="countBtn" onClick={
                ()=>{
                    if(count>0)
                    setCount(count-1)
                }
            }>Click me(-)</button>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default UserFnComponent;