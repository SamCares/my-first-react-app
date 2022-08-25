import React from "react";
import Greetings from "./components/greetings";
import UserProfileCard from "./components/UserProfileCard";
import List from "./components/List"
import "../src/assets/styles/card.css"


function App() {
  const handleClick = (event) => {
    console.log("Button clicked")
  }
  return (
    <section className="main-page">
      <Greetings />
      <UserProfileCard />
      <List />
      <button onClick={handleClick}>Click Me</button>

      <button className="action-btn">Increment</button>
      <button className="action-btn">Decrement</button>
    </section >
  );
}

export default App;
