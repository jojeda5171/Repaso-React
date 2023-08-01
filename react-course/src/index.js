import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Greeting() {
  function add(a, b) {
    return a + b;
  }

  //const name ='José'
  const user = {
    firstName: "Ryan",
    lastName: "Ray",
  };
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
      <h1>{add(10, 30)}</h1>
    </div>
  );
}

root.render(
  <>
    <Greeting></Greeting>
    <Greeting></Greeting>
    <Greeting></Greeting>
  </>
);
