import React from "react";
import Greetings from "./components/greetings";
import UserProfileCard from "./components/UserProfileCard";
import List from "./components/List"
import "../src/assets/styles/card.css"


function App() {
  return (
    <section className="main-page">
      <Greetings />
      <UserProfileCard />
      <List />
    </section>
  );
}

export default App;
