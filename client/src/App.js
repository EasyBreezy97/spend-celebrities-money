import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spend from "./components/Spend";
import Results from "./components/Results";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/spend/:id" component={Spend}></Route>
      <Route exact path="/results" component={Results}></Route>
      <Footer />
    </div>
  );
}

export default App;
