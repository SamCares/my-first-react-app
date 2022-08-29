import React from "react";
import Greetings from "./components/greetings";
import UserProfileCard from "./components/UserProfileCard";
import List from "./components/List";
import "../src/assets/styles/card.css";
import Form from "./components/form";
import Counter from "./components/counter";


function App() {
  return (
    <section className="main-page">
      <Greetings />
      <UserProfileCard />
      <List />
      <Counter />
      <Form />
    </section>
  );
}

export default App;
