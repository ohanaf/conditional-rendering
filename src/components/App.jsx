import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function RenderCondition(){
  if (isLoggedIn){
    return (<h1>Hello</h1>);
  } else {
    return(
      <Login />
    )
  }
}


function App() {
  return (
    <div className="container">
      {RenderCondition()}
    </div>
  );
}

export default App;
