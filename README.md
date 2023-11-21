This is my first app of React


const ResContainer = () => (
  <div className="res-container">
    {/* <ResCard resName="Burger King" rating="4 star" cuisine="Burgers, American"/>
      <ResCard resName="KFC" rating="3.5 star" cuisine="Burger, American" /> */}
    {/* <ResCard /> */}
    {/* {resArr.map((restaurant)=>{
           <ResCard resData = {restaurant} />
        })} */}
    {resArr.map((restaurant) => {
      return <ResCard key={restaurant.info.id} resData={restaurant} />; //returning a piece of JSX
    })}
  </div>
);